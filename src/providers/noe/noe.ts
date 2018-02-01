import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/*
  Generated class for the NoeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NoeProvider {
  animais = [];

  constructor(public http: HttpClient){
  }

  inserir(animal){
    this.http
      .post('http://188.166.14.140:3000/animal', animal)
      .subscribe(() => {
        console.log('Animal inserido!');
      });

    console.log('Mandei a bagaça');
  }

  ler(){
    this.http
      .get<any>('http://188.166.14.140:3000/animal')
      .subscribe((resposta) => {
        this.animais = resposta;
      });
  }

}

import { Injectable } from '@angular/core';

/*
  Generated class for the NoeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NoeProvider {
  animais = [];

  inserir(animal){
    this.animais.push(animal);
    console.log(this.animais);
  }

}

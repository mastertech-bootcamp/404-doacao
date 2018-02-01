import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoeProvider } from '../../providers/noe/noe';

/**
 * Generated class for the FormularioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class FormularioPage {
  dados = {
    nome: '',
    foto: ''
  };

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public noe: NoeProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioPage');
  }

  inserir(){
    this.noe.inserir(this.dados);
    this.dados = {nome: '', foto: ''};  
  }

}

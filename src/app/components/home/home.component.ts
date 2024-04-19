import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  nomeProduto: string = 'Curso de Angular';
  anuncio: string = `O ${this.nomeProduto} está em promoção`;
  idProduto: number = 3;
  precoProduto: number = 2.51;
  dataValidade='2021-12-31'
  promocao: boolean = true;
  foto: string = 'assets/img/backend.webp';

  ngOnInit(): void {}

  constructor() {
    //this.anuncio = `O` + this.nomeProduto + 'está em promoção';
    /*console.log('Nome do Produto: ',this.nomeProduto)
    console.log('Anucio: ',this.anuncio)
    console.log('IdProduto: ',this.idProduto)
    console.log('PreçoProduto: ',this.precoProduto)
    console.log('Promoção: ',this.promocao)

    //Escopo das variaveis dentro do código
    var variavel1;
    let variavel2;
   //const variavel3;

   var idade = 10
   console.log('Minha idade é', idade)

   function imprimeIdade() {
    for (let idade = 30; idade <=40; idade++) {
      console.log('Idade dentro do for:', idade)
    }
    console.log('Idade fora do for:', idade)
   }
   imprimeIdade
   }


   var variavel = 0;
   var variavel = 10;
   console.log('variavel', variavel);
   function funcao (){
    var outra_variavel = 20;
    var outra_variavel = 30;
    console.log('outra variavel: ', outra_variavel);
   }
   funcao();*/

    /*var a = 10;
   let b = 20;
   function bar() {
    var a = 30;
    let b = 60;
     if(true) {
      var a = 50;
      let b = 60
      console.log('variavel a dentro do if', a);
      console.log('variavel a dentro do if', b);
     }
     console.log('variavel a dentro da função', a);
     console.log('variavel a dentro da função', b);
   }
   bar();
    console.log('variavel a fora da função', a);
    console.log('variavel a fora da função', b);*/

    let a = 1;
    function bar() {
      console.log('variavel a: ', a);
      let b = 2;
      if (true) {
        let c = 3;
        let a = 4;
        console.log('variavel a dentro do if: ', a);
        console.log('variavel b dentro do if: ', b);
        console.log('variavel c dentro do if: ', c);
      }
      console.log('variavel a fora do if: ', a);
      console.log('variavel b fora do if: ', b);
      //console.log(c)
    }
    bar();

    /*var a = 5;
   var b = 10;
   if(a = 5){
    let a = 4;
    var b = 1;
    console.log('Variavel a dentro do if', a);
    console.log('Variavel b dentro do if', b);
   }
   console.log('Variavel a fora do if', a);
   console.log('Variavel b fora do if', b);*/
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crudprodutos',
  templateUrl: './crudprodutos.component.html',
  styleUrls: ['./crudprodutos.component.css']
})
export class CrudprodutosComponent implements OnInit {

  produtos = {
    "item" : [
        { "imagem" : "Img 1", "nome" : "Prod 1", "descricao" : "Descrição produto 1", "preco" : 100.00 },
        { "imagem" : "Img 2", "nome" : "Prod 2", "descricao" : "Descrição produto 2", "preco" : 200.00 },
        { "imagem" : "Img 3", "nome" : "Prod 3", "descricao" : "Descrição produto 3", "preco" : 300.00 }, 
        { "imagem" : "Img 4", "nome" : "Prod 4", "descricao" : "Descrição produto 4", "preco" : 400.00 },
        { "imagem" : "Img 5", "nome" : "Prod 5", "descricao" : "Descrição produto 5", "preco" : 500.00 }
    ]
  }

  //produtos;

  constructor(private http:HttpClient) { }

  ngOnInit() {

    //this.http.get("<url-do-server>")
    //.subscribe( dados => this.produtos = dados );
  }

}

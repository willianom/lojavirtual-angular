import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http:HttpClient) { }

  getListProduto(){

    return this.http.get(environment.apiUrl + "lista_todos_produtos/");    
  };

  addProduto(){

  };

  editProduto(){

  };

  deleteProduto(){

  };
}

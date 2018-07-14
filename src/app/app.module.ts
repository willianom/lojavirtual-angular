import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PainelmainLojavirtualComponent } from './painelmain-lojavirtual/painelmain-lojavirtual.component';
import { BarranavegLojavirtualComponent } from './barranaveg-lojavirtual/barranaveg-lojavirtual.component';
import { MenulateralLojavirtualComponent } from './menulateral-lojavirtual/menulateral-lojavirtual.component';
import { ListaprodutosComponent } from './listaprodutos/listaprodutos.component';
import { CrudprodutosComponent } from './crudprodutos/crudprodutos.component';
import { AddprodutoComponent } from './addproduto/addproduto.component';
import { ProdutoService } from './listaprodutos/produto.service';

let routes = [
   { path : "lista_produtos", component: ListaprodutosComponent},
   { path : "crud_produtos", component: CrudprodutosComponent},
   { path : "add_produto", component: AddprodutoComponent},
   { path : "**", redirectTo: "lista_produtos"}
  ]

@NgModule({
  declarations: [
    AppComponent,
    PainelmainLojavirtualComponent,
    BarranavegLojavirtualComponent,
    MenulateralLojavirtualComponent,
    ListaprodutosComponent,
    CrudprodutosComponent,
    AddprodutoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

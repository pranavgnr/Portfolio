import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CodingComponent } from './coding/coding.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'product', component: ProductsComponent},
  {path: 'coding', component: CodingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

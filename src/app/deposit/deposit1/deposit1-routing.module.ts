import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Deposit1Component } from './deposit1.component';

const routes: Routes = [
  {path:'', component: Deposit1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Deposit1RoutingModule { }

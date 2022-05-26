import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Deposit2Component } from './deposit2.component';

const routes: Routes = [
  {
    path:'', component: Deposit2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Deposit2RoutingModule { }

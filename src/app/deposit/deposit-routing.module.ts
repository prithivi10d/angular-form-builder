import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DepositComponent } from './deposit.component';


const routes: Routes = [

  {
    path: '', component: DepositComponent ,children: [
      {
        path: 'coins' , loadChildren: () => import('./deposit1/deposit1.module').then(r => r.Deposit1Module)
      },
      {
        path: 'notes' , loadChildren: () => import('./deposit2/deposit2.module').then(r => r.Deposit2Module)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepositRoutingModule { }
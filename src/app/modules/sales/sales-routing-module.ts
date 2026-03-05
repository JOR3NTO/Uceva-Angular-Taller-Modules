import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSalesComponent } from './pages/list-sales/list-sales.component';

const routes: Routes = [
  {
    path: 'list-sales',
    component: ListSalesComponent
  },
  {
    path: '**',
    redirectTo: 'list-sales'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }

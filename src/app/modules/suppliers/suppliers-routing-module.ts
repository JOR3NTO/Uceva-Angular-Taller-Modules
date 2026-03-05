import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSuppliersComponent } from './pages/list-suppliers.component';

const routes: Routes = [
  {
    path: 'list-suppliers',
    component: ListSuppliersComponent
  },
  {
    path: '**',
    redirectTo: 'list-suppliers'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuppliersRoutingModule { }

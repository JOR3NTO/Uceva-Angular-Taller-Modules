import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCommentsComponent } from './pages/list-comments.component/list-comments.component';

const routes: Routes = [
  {
    path: 'list-comments',
    component: ListCommentsComponent
  },
  {
    path: '**',
    redirectTo: 'list-comments'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }

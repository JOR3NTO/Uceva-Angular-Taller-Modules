import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCommentsComponent } from './pages/list-comments.component/list-comments.component';

/**
 * Rutas del módulo `comments`.
 *
 * Define las rutas hijas que mostrarán las páginas del módulo. Compodoc
 * incluirá esta clase en la documentación del enrutamiento del módulo.
 */
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

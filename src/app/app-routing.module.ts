import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BooklistComponent} from "./booklist/booklist.component";
import {CreatebookComponent} from "./createbook/createbook.component";
import {EditbookComponent} from "./editbook/editbook.component";
import {ViewComponent} from "./view/view.component";
import {ViewDeleteComponent} from "./view-delete/view-delete.component";

const routes: Routes = [
  {
    path: '',
    component: BooklistComponent
  },
  {
    path: 'view/:id',
    component: ViewComponent
  },
  {
    path: 'create',
    component: CreatebookComponent
  },
  {
    path: 'update/:id',
    component: EditbookComponent
  },
  {
    path: 'viewDelete/:id',
    component: ViewDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

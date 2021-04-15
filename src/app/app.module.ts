import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BooklistComponent} from './booklist/booklist.component';
import {CreatebookComponent} from './createbook/createbook.component';
import {EditbookComponent} from './editbook/editbook.component';
import {ViewComponent} from './view/view.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ViewDeleteComponent } from './view-delete/view-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    BooklistComponent,
    CreatebookComponent,
    EditbookComponent,
    ViewComponent,
    ViewDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

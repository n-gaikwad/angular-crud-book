import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AddBookComponent } from './add-book/add-book.component';
import { BookListComponent } from './book-list/book-list.component';
import { EditBookComponent } from './edit-book/edit-book.component';

@NgModule({
  imports:[ BrowserModule, FormsModule ,BrowserAnimationsModule, MaterialModule,  ],
  declarations: [ AppComponent, BookListComponent, EditBookComponent ],
  bootstrap:    [ AppComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
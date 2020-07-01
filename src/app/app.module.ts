import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookListComponent } from './book-list/book-list.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { AppRoutingModule } from './app-routing.module';
import { BookService } from './book.service';

@NgModule({
  imports:[ BrowserModule,BrowserAnimationsModule, AppRoutingModule ,FormsModule,ReactiveFormsModule,MaterialModule ,MatDatepickerModule ],
  declarations: [ AppComponent,AddBookComponent, BookListComponent, EditBookComponent ],
  providers: [BookService,MatDatepickerModule],
  bootstrap: [ AppComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }

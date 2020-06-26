import { Component, OnInit, ViewChild } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA,ENTER } from '@angular/cdk/keycodes';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Language } from '../book';
//import { Language } from 'src/app/book';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  visible = true;
  selectable = true;
  removeable = true;
  addOnBlur = true;
  languageArr: Language[] = [];
  bookForm: FormGroup;
  @ViewChild('chipList',{static:false}) chipList;
  @ViewChild('resetBookForm',{static: false}) myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER,COMMA];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.bookForm = this.fb.group({
      book_name : ['',[Validators.required]],
      author_name: ['',[Validators.required]],
      publication_date: ['',[Validators.required]],
      languages:[this.languageArr]
    });
  }

  add(event: MatChipInputEvent) : void {
    const input = event.input;
    const value = event.value;
    console.log(input.value)
    if((value || '').trim() && this.languageArr.length < 5) {
      this.languageArr.push({name: value.trim() })
    }
    if(input) {
      input.value = '';
    }
  }

  remove(langArr: Language): void {
    const index = this.languageArr.indexOf(langArr)
  }

  resetForm() {
    this.languageArr = [];
    this.bookForm.reset();
    Object.keys(this.bookForm.controls).forEach(key => {
      this.bookForm.controls[key].setErrors(null)
    });
  }

}

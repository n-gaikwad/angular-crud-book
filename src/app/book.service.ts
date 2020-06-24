import { Injectable } from '@angular/core';
import { Book } from './book';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
    providedIn: 'root',
})
export class BookService {
    booksRef: AngularFireList<any>;
    bookRef: AngularFireObject<any>;

    constructor(private db: AngularFireDatabase) {}

    AddBook(book:Book) {
        this.booksRef.push({
            book_name: book.bookName,
            authorName: book.authorName,
            publicationDate: book.publicationDate,
            languages: book.languages,
        }).catch(error => {
            this.handleError(error);
        })
    }

    getBook(id:string) {
        this.bookRef = this.db.object('books-list/'+id);
        return this.bookRef;
    }

    getBookList() {
        this.booksRef = this.db.list('books-list');
        return this.booksRef;
    }
    
    handleError(err: string) {
        console.log(err);
    }

}
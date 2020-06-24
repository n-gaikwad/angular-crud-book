export interface Book {
    id: string;
    bookName: string;
    authorName: string;
    publicationDate: Date;
    languages: Array<string>;
}

export interface Language {
    name : string;
}
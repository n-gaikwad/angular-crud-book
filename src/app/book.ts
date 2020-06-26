export interface Book {
    id: string | number;
    bookName: string;
    authorName: string;
    publicationDate: Date;
    languages: Array<string>;
}

export interface Language {
    name : string;
}
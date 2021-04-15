import {Component, OnInit} from '@angular/core';
import {Book} from "../book";
import {BookService} from "../book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
})
export class BooklistComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookService: BookService, private router: Router) {
    this.showBook();
  }

  ngOnInit(): void {
  }

  showBook(): Book[] {
    this.bookService.getAllBook().subscribe(books => {
      this.books = books;
    });
    return this.books;
  }


}

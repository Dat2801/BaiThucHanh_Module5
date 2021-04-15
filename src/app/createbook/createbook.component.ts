import {Component, OnInit} from '@angular/core';
import {Book} from "../book";
import {Router} from "@angular/router";
import {BookService} from "../book.service";

@Component({
  selector: 'app-createbook',
  templateUrl: './createbook.component.html',
  styleUrls: ['./createbook.component.scss']
})
export class CreatebookComponent implements OnInit {


  book: Book = {
    id: 0,
    title: '',
    author: '',
    description: '',
  };

  constructor(private router: Router,
              private bookService: BookService,
  ) {
  }

  ngOnInit(): void {
  }

  createBook() {
    this.bookService.createBook(this.book).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

}

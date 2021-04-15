import {Component, OnInit} from '@angular/core';
import {Book} from "../book";
import {BookService} from "../book.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  book: Book;
  id: number;

  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( paraMap => {
      this.id =  Number(paraMap.get("id"));
      this.showBook(this.id);
    })
  }

  showBook(id: number) {
    this.bookService.getById(id).subscribe(book => {
      this.book = book;
    });
  }
}

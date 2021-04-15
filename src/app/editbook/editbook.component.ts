import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Book} from "../book";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {BookService} from "../book.service";

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.scss']
})
export class EditbookComponent implements OnInit {

  sub: Subscription;
  id: number;
  book: Book = {
    id: 0,
    title: '',
    author: '',
    description: ''
  };

  constructor(private router: Router,
              private bookService: BookService,
              private activatedRouter: ActivatedRoute) {
    this.sub = this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = Number(paramMap.get('id'));
      this.getById(this.id);
    });
  }

  ngOnInit(): void {
  }

  edit() {
    this.bookService.updateBook(this.book.id, this.book).subscribe(() => {
      this.router.navigate(['/']);
    })
  }

  getById(id: number) {
    this.bookService.getById(id).subscribe(book => {
      this.book = book;
    });
  }

}

import {Component, OnInit} from '@angular/core';
import {Book} from "../book";
import {BookService} from "../book.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-view-delete',
  templateUrl: './view-delete.component.html',
  styleUrls: ['./view-delete.component.scss']
})
export class ViewDeleteComponent implements OnInit {
  books: Book[] = [];
  book: Book;
  id: number;

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paraMap => {
      this.id = Number(paraMap.get("id"));
      this.showBook(this.id);
    })
  }

  showBook(id: number) {
    this.bookService.getById(id).subscribe(book => {
      this.book = book;
    });
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe(() => {
      this.router.navigate(['/']);
      alert("Bạn đã xóa thành công")
    });
  }

}

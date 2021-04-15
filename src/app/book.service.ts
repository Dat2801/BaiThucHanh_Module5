import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './book';


const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpCLine: HttpClient) {
  }

  getAllBook(): Observable<Book[]> {
    return this.httpCLine.get<Book[]>(API_URL + '/books');
  }

  createBook(book: Book): Observable<Book> {
    return this.httpCLine.post<Book>(API_URL + '/books/create', book);
  }

  getById(id: number): Observable<Book> {
    return this.httpCLine.get<Book>(API_URL + `/books/${id}`);
  }

  updateBook(id: number, book: Book): Observable<Book> {
    return this.httpCLine.put<Book>(API_URL + `/books/edit/${id}`, book);
  }

  deleteBook(id: number): Observable<Book> {
    return this.httpCLine.delete<Book>(API_URL + `/books/delete/${id}`);
  }
}

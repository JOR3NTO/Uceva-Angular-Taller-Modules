import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentInterface } from '../interfaces/comments.interface';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  private http = inject(HttpClient);
  private readonly url = 'https://jsonplaceholder.typicode.com/comments';

  getComments(): Observable<CommentInterface[]> {
    return this.http.get<CommentInterface[]>(this.url);
  }
}

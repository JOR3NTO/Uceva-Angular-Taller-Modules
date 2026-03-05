import { Component, OnInit, inject } from '@angular/core';
import { CommentsService } from '../../services/comments.service';
import { CommentInterface } from '../../interfaces/comments.interface';

@Component({
  selector: 'app-list-comments',
  standalone: false,
  template: '<app-table-comments [comments]="comments"></app-table-comments>',
})
export class ListCommentsComponent implements OnInit {
  comments: CommentInterface[] = [];

  private commentsService = inject(CommentsService);

  ngOnInit(): void {
    this.commentsService.getComments().subscribe({
      next: (comments) => (this.comments = comments),
      error: (error) => console.error(error),
    });
  }
}

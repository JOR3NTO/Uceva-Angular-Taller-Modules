import { Component, Input } from '@angular/core';
import { CommentInterface } from '../../../interfaces/comments.interface';

@Component({
  selector: 'app-table-comments',
  standalone: false,
  templateUrl: './table-comments.component.html',
})
export class TableCommentsComponent {

  @Input() comments: CommentInterface[] = [];

}

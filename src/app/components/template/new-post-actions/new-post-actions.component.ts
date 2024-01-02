import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PostsService } from '../../../services/posts.service';
import {  MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-new-post-actions',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './new-post-actions.component.html',
  styleUrl: './new-post-actions.component.css',
})
export class NewPostActionsComponent {
  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<NewPostActionsComponent>,
    private postService: PostsService
  ) {}

  discard() {
    this.dialog.closeAll();
    this.postService.showMessage('Changes discard!', false);
  }

  back(){
    this.dialogRef.close();

  }
}

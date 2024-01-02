import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Post } from './post-form.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PostsService } from '../../../services/posts.service';
import { NewPostActionsComponent } from '../new-post-actions/new-post-actions.component';


@Component({
  selector: 'app-new-post-form',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, FormsModule,CommonModule],
  templateUrl: './new-post-form.component.html',
  styleUrl: './new-post-form.component.css',
  providers: [PostsService],
})
export class NewPostFormComponent {
  disabled = true;
  post: Post = {
    user: '',
    title: '',
    postContent: '',
  };
  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<NewPostFormComponent>,
    private postService: PostsService
  ) {}
  publish() {
    this.postService.newPost(this.post).subscribe(() => {
      this.dialog.closeAll();
      this.postService.showMessage('New post Added', true);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    });
  }
  cancel(){
    if(this.post.postContent != ''){
      this.dialog.open(NewPostActionsComponent)
    }else{
      this.dialogRef.close()
    }
  }
}

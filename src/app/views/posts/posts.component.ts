import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { PostsService } from '../../services/posts.service';
import { MatDialog } from '@angular/material/dialog';
import { Post } from '../../components/template/new-post-form/post-form.model';
import { CommonModule } from '@angular/common';
import { PostsButtonComponent } from "../posts-button/posts-button.component";

@Component({
    selector: 'app-posts',
    standalone: true,
    templateUrl: './posts.component.html',
    styleUrl: './posts.component.css',
    imports: [MatCardModule, MatButtonModule, MatMenuModule, MatIconModule, CommonModule, PostsButtonComponent]
})
export class PostsComponent implements OnInit {
  posts!: Post[];
  constructor(private postService: PostsService, private dialog: MatDialog) {}

  ngOnInit() {
    this.postService.getPosts().subscribe((post) => {
      this.posts = post;
    });
  }
  delete(post: Post) {
    this.postService.deletePost(`${post.id}`).subscribe(() => {
      this.postService.showMessage('Post deleted', true);
      this.ngOnInit();
    });
  }
  update(post: Post) {
    this.postService.setPost(post);
    // this.dialog.open();
  }
}

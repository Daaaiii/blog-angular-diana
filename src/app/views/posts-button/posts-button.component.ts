import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-posts-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './posts-button.component.html',
  styleUrl: './posts-button.component.css',
})
export class PostsButtonComponent {
  liked = false;
  unliked = false;
  like() {
    this.liked = !this.liked;
    this.unliked = false;
  }

  unlike() {
    this.unliked = !this.unliked;
    this.liked = false;
  }
}

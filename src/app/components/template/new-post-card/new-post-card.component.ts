import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { NewPostFormComponent } from '../new-post-form/new-post-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-post-card',
  standalone: true,
  imports: [MatCardModule, CommonModule, FormsModule],
  templateUrl: './new-post-card.component.html',
  styleUrl: './new-post-card.component.css',
})
export class NewPostCardComponent {
  constructor(private dialog: MatDialog) {}
  newPost() {
    this.dialog.open(NewPostFormComponent);

  }
}

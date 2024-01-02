import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { NewPostCardComponent } from './components/template/new-post-card/new-post-card.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './views/posts/posts.component';
import { SidenavInfoComponent } from "./components/template/sidenav-info/sidenav-info.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        CommonModule,
        RouterOutlet,
        HeaderComponent,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        HttpClientModule,
        MatSnackBarModule,
        MatCardModule,
        MatDialogModule,
        NewPostCardComponent,
        MatInputModule,
        MatFormFieldModule,
        FormsModule,
        PostsComponent,
        MatSidenavModule,
        MatListModule,
        SidenavInfoComponent
    ]
})
export class AppComponent {
  title = 'blog-angular-diana';
}

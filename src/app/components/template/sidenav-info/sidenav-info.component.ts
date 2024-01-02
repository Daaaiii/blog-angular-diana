import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidenav-info',
  standalone: true,
  imports: [MatSidenavModule, MatListModule, RouterOutlet],
  templateUrl: './sidenav-info.component.html',
  styleUrl: './sidenav-info.component.css'
})
export class SidenavInfoComponent {

}

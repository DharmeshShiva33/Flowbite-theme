import { Component } from '@angular/core';

import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [ MenuComponent, SidebarComponent ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

}

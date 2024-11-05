import { Component } from '@angular/core';
import { Drawer } from 'flowbite';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  drawer: Drawer | null = null;

  ngAfterViewInit(): void {
    const drawerElement = document.getElementById('drawer-navigation');
    if (drawerElement) {
      this.drawer = new Drawer(drawerElement, { placement: 'left', backdrop: true });
    }
  }

  toggleDrawer(): void {
    if (this.drawer) {
      this.drawer.toggle();
    }  
  }

}

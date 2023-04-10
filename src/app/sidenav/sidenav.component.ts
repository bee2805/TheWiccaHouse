// Side nav slider tutorial from:
// https://www.youtube.com/watch?v=rAWlJMe_7rg&t=598s

import { Component, EventEmitter, Output } from '@angular/core';
import { navbarData } from './nav-data';

interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  username = sessionStorage.getItem("username");

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeNav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth})
  }

  logout(){
    sessionStorage.clear();
    alert('You have logged out');
    window.location.reload()
  }

}

// Side nav slider tutorial from:
// https://www.youtube.com/watch?v=rAWlJMe_7rg&t=598s

import { Component, EventEmitter, Output } from '@angular/core';
import { navbarData } from './nav-data';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoggedOutComponent } from '../logged-out/logged-out.component';

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
  constructor(public router:Router, private dialogRef: MatDialog) { }

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
    this.dialogRef.open(LoggedOutComponent)
  }

}

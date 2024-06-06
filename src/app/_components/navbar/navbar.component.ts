import { Component, OnInit } from '@angular/core';
import { AuthModalComponent } from '../../auth-modal/auth-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {

  }

  constructor(private dialog: MatDialog) {}

  openAuthModal(): void{
 this.dialog.open(AuthModalComponent), {
   width: "400px",

   disableClose: true
 }
  }
}

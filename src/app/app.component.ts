import { Component, OnInit } from '@angular/core';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   title = "projeto-teclados";

   constructor(public dialog: MatDialog) {}

   openAuthModal(): void{
    const dialogRef = this.dialog.open(AuthModalComponent,{
      width: '400px',
      height: "500px",
    });

    dialogRef.afterClosed().subscribe(result =>{

    })
   }

}

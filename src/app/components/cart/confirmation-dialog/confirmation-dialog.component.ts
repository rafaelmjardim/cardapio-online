import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent {

  constructor (
    private router: Router,
    public dialog: MatDialog,
  ){}

  handleReturnToBuy = () => {
    this.dialog.closeAll();
  }
  
  handleOpenOrders = () => {
    this.router.navigateByUrl('/pedidos')
    this.dialog.closeAll();
  }
  
}

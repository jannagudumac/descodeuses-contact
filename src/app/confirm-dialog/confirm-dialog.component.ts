import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.css',
})
export class ConfirmDialogComponent {

}

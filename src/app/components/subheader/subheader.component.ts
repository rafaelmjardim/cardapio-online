import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { MobileUtilsService } from 'src/app/services/mobile_utils/mobile-utils.service';

import { MatDialog } from "@angular/material/dialog";
import { InfoDialogComponent } from './info-dialog/info-dialog.component';


@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss']
})
export class SubheaderComponent implements AfterViewInit {


  constructor (
    public router: Router, 
    public mobile_utils: MobileUtilsService, 
    private change_detector_ref: ChangeDetectorRef,
    private dialog: MatDialog  
  ){}

  ngAfterViewInit(): void {
    this.mobile_utils.onInitMediaScreen();
  }

  handleOpenDialog = () => {
    this.dialog.open(InfoDialogComponent)
  }
}

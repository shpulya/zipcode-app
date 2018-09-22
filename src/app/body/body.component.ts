import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription} from 'rxjs';
import {ZipService} from '../zip.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit, OnDestroy {
  isDisabled = true;
  zipCodes = [];
  private zipCodesSubscription: Subscription;

  constructor(private  zipService: ZipService
  ) {
    setTimeout(() => {
      this.isDisabled = false;
    }, 1000);
  }
  onAddZipCode(form) {
    console.log(form)
    if (form.valid) {
      this.zipService.addZipCode(form.value.zipCode);
    }
  }
  onRemoveZipCode(zipCode: number) {
    this.zipCodes = this.zipCodes.filter(zip => zip !== zipCode);
  }
  ngOnInit() {
    this.zipCodes = this.zipService.getZipCodes();
    this.zipCodesSubscription = this.zipService.zipCodesUpdated.subscribe(() => {
      this.zipCodes = this.zipService.getZipCodes();
   });
  }
  ngOnDestroy() {
     this.zipCodesSubscription.unsubscribe();
   }
}

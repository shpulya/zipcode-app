import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ZipResponse } from './zip-response';

@Injectable()
export class ZipService {
  private zipCodes = [];
  zipCodesUpdated = new Subject();
  zipInfo: any;

  constructor(private http: HttpClient) {}

  addZipCode(zipCode: number) {
    const url = 'https://api.zip-codes.com/ZipCodesAPI.svc/1.0/QuickGetZipCodeDetails/'+zipCode+'?key=DEMOAPIKEY';
    this.http.get(url).subscribe(response => {
      //let zipInfoResponse: any;
      this.zipInfo = response;
      //this.zipInfo = {'city': zipInfoResponse.City, 'state': zipInfoResponse.State, 'zipCode': zipInfoResponse.ZipCode} as ZipResponse;

      console.log(this.zipInfo);
      if (!this.zipCodes.some(zip => zip === this.zipInfo.ZipCode)) {
        this.zipCodes.push(this.zipInfo.ZipCode);
        this.zipCodesUpdated.next();
      }
      console.log(this.zipCodes);
    });
  }

  getZipCodes() {
    return [...this.zipCodes];
  }

  deleteZipCode(zipCode: number) {
    this.zipCodes = this.zipCodes.filter(zip => zip !== zipCode);
    this.zipCodesUpdated.next();
  }
}

import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { ZipService} from '../zip.service';

@Component({
  selector: 'app-zip-info',
  templateUrl: './zip-info.component.html',
  styleUrls: ['./zip-info.component.scss']
})
export class ZipInfoComponent implements OnInit {
  @Input() zipCode: number;
  @Output() zipCodeClicked = new EventEmitter();
  constructor(private zipCodesService: ZipService) { }

  ngOnInit() {
  }
  onClicked() {
    // this.zipCodeClicked.emit();
    this.zipCodesService.deleteZipCode(this.zipCode);
  }
}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipInfoComponent } from './zip-info.component';

describe('ZipInfoComponent', () => {
  let component: ZipInfoComponent;
  let fixture: ComponentFixture<ZipInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZipInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

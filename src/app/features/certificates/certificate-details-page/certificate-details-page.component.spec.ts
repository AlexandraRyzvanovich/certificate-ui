import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateDetailsPageComponent } from './certificate-details-page.component';

describe('CertificateFormComponent', () => {
  let component: CertificateDetailsPageComponent;
  let fixture: ComponentFixture<CertificateDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificateDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateUpdatePageComponent } from './certificate-update-page.component';

describe('CertificateUpdatePageComponent', () => {
  let component: CertificateUpdatePageComponent;
  let fixture: ComponentFixture<CertificateUpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificateUpdatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

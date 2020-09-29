import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateCreatePageComponent } from './certificate-create-page.component';

describe('CertificateCreationFormComponent', () => {
  let component: CertificateCreatePageComponent;
  let fixture: ComponentFixture<CertificateCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificateCreatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateCreationFormComponent } from './certificate-creation-form.component';

describe('CertificateCreationFormComponent', () => {
  let component: CertificateCreationFormComponent;
  let fixture: ComponentFixture<CertificateCreationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificateCreationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateCreationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

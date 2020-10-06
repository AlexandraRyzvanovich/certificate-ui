import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCertificateComponent } from './cart-certificate.component';

describe('CheckoutComponent', () => {
  let component: CartCertificateComponent;
  let fixture: ComponentFixture<CartCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartCertificateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialigInternalServerErrorComponent } from './dialig-internal-server-error.component';

describe('DialigInternalServerErrorComponent', () => {
  let component: DialigInternalServerErrorComponent;
  let fixture: ComponentFixture<DialigInternalServerErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialigInternalServerErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialigInternalServerErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

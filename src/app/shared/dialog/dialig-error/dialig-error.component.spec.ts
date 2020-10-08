import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialigErrorComponent } from './dialig-error.component';

describe('DialigErrorComponent', () => {
  let component: DialigErrorComponent;
  let fixture: ComponentFixture<DialigErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialigErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialigErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

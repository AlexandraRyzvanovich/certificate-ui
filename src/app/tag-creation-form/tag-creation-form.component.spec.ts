import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagCreationFormComponent } from './tag-creation-form.component';

describe('TagCreationFormComponent', () => {
  let component: TagCreationFormComponent;
  let fixture: ComponentFixture<TagCreationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagCreationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagCreationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

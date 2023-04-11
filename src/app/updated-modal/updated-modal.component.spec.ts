import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedModalComponent } from './updated-modal.component';

describe('UpdatedModalComponent', () => {
  let component: UpdatedModalComponent;
  let fixture: ComponentFixture<UpdatedModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

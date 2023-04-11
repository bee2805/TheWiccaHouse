import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CannotCraftComponent } from './cannot-craft.component';

describe('CannotCraftComponent', () => {
  let component: CannotCraftComponent;
  let fixture: ComponentFixture<CannotCraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CannotCraftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CannotCraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

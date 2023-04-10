import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotionCraftedModalComponent } from './potion-crafted-modal.component';

describe('PotionCraftedModalComponent', () => {
  let component: PotionCraftedModalComponent;
  let fixture: ComponentFixture<PotionCraftedModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotionCraftedModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PotionCraftedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

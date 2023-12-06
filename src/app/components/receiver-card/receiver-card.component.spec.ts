import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverCardComponent } from './receiver-card.component';

describe('ReceiverCardComponent', () => {
  let component: ReceiverCardComponent;
  let fixture: ComponentFixture<ReceiverCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiverCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiverCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

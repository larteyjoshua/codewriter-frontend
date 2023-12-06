import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenderCardComponent } from './sender-card.component';

describe('SenderCardComponent', () => {
  let component: SenderCardComponent;
  let fixture: ComponentFixture<SenderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenderCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

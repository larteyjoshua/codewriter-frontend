import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaudeCodeGeneratorComponent } from './claude-code-generator.component';

describe('ClaudeCodeGeneratorComponent', () => {
  let component: ClaudeCodeGeneratorComponent;
  let fixture: ComponentFixture<ClaudeCodeGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaudeCodeGeneratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaudeCodeGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

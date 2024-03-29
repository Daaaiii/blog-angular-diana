import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPostActionsComponent } from './new-post-actions.component';

describe('NewPostActionsComponent', () => {
  let component: NewPostActionsComponent;
  let fixture: ComponentFixture<NewPostActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewPostActionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewPostActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

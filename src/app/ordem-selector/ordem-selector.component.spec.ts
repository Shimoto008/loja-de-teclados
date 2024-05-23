import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemSelectorComponent } from './ordem-selector.component';

describe('OrdemSelectorComponent', () => {
  let component: OrdemSelectorComponent;
  let fixture: ComponentFixture<OrdemSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrdemSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdemSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

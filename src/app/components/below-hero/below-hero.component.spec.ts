import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BelowHeroComponent } from './below-hero.component';

describe('BelowHeroComponent', () => {
  let component: BelowHeroComponent;
  let fixture: ComponentFixture<BelowHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BelowHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BelowHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

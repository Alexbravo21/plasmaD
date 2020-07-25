import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CintilloComponent } from './cintillo.component';

describe('CintilloComponent', () => {
  let component: CintilloComponent;
  let fixture: ComponentFixture<CintilloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CintilloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CintilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

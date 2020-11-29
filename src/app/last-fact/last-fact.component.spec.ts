import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastFactComponent } from './last-fact.component';

describe('LastFactComponent', () => {
  let component: LastFactComponent;
  let fixture: ComponentFixture<LastFactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastFactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastFactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

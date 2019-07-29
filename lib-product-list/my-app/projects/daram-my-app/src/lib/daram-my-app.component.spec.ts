import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaramMyAppComponent } from './daram-my-app.component';

describe('DaramMyAppComponent', () => {
  let component: DaramMyAppComponent;
  let fixture: ComponentFixture<DaramMyAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaramMyAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaramMyAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

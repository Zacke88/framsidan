import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodySplitComponent } from './body-split.component';

describe('BodySplitComponent', () => {
  let component: BodySplitComponent;
  let fixture: ComponentFixture<BodySplitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodySplitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodySplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

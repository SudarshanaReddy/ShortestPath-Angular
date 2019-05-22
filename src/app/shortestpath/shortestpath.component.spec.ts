import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortestpathComponent } from './shortestpath.component';

describe('ShortestpathComponent', () => {
  let component: ShortestpathComponent;
  let fixture: ComponentFixture<ShortestpathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortestpathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortestpathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsSurfaceComponent } from './mars-surface.component';

describe('MarsSurfaceComponent', () => {
  let component: MarsSurfaceComponent;
  let fixture: ComponentFixture<MarsSurfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarsSurfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarsSurfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

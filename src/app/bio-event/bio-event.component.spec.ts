import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioEventComponent } from './bio-event.component';

describe('BioEventComponent', () => {
  let component: BioEventComponent;
  let fixture: ComponentFixture<BioEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

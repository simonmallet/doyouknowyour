import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedMessageComponent } from './featured-message.component';

describe('FeaturedMessageComponent', () => {
  let component: FeaturedMessageComponent;
  let fixture: ComponentFixture<FeaturedMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

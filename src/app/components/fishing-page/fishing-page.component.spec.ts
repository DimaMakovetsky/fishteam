import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishingPageComponent } from './fishing-page.component';

describe('FishingPageComponent', () => {
  let component: FishingPageComponent;
  let fixture: ComponentFixture<FishingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FishingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FishingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

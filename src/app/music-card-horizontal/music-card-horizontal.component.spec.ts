import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicCardHorizontalComponent } from './music-card-horizontal.component';

describe('MusicCardHorizontalComponent', () => {
  let component: MusicCardHorizontalComponent;
  let fixture: ComponentFixture<MusicCardHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicCardHorizontalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicCardHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

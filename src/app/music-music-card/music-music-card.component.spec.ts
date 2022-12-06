import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicMusicCardComponent } from './music-music-card.component';

describe('MusicMusicCardComponent', () => {
  let component: MusicMusicCardComponent;
  let fixture: ComponentFixture<MusicMusicCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicMusicCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicMusicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

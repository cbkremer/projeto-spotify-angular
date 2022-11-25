import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistScreenComponent } from './playlist-screen.component';

describe('PlaylistScreenComponent', () => {
  let component: PlaylistScreenComponent;
  let fixture: ComponentFixture<PlaylistScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicScreenComponent } from './music-screen.component';

describe('MusicScreenComponent', () => {
  let component: MusicScreenComponent;
  let fixture: ComponentFixture<MusicScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

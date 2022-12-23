import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMusicScreenComponent } from './add-music-screen.component';

describe('AddMusicScreenComponent', () => {
  let component: AddMusicScreenComponent;
  let fixture: ComponentFixture<AddMusicScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMusicScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMusicScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

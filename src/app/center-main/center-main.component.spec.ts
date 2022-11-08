import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterMainComponent } from './center-main.component';

describe('CenterMainComponent', () => {
  let component: CenterMainComponent;
  let fixture: ComponentFixture<CenterMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenterMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

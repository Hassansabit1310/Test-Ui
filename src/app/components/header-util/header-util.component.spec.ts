import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUtilComponent } from './header-util.component';

describe('HeaderUtilComponent', () => {
  let component: HeaderUtilComponent;
  let fixture: ComponentFixture<HeaderUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderUtilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

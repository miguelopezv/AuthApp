import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectedLayoutComponent } from './protected-layout.component';

describe('HomeComponent', () => {
  let component: ProtectedLayoutComponent;
  let fixture: ComponentFixture<ProtectedLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProtectedLayoutComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectedLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

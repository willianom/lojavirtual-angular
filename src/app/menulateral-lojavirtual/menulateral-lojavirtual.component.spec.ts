import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenulateralLojavirtualComponent } from './menulateral-lojavirtual.component';

describe('MenulateralLojavirtualComponent', () => {
  let component: MenulateralLojavirtualComponent;
  let fixture: ComponentFixture<MenulateralLojavirtualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenulateralLojavirtualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenulateralLojavirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarranavegLojavirtualComponent } from './barranaveg-lojavirtual.component';

describe('BarranavegLojavirtualComponent', () => {
  let component: BarranavegLojavirtualComponent;
  let fixture: ComponentFixture<BarranavegLojavirtualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarranavegLojavirtualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarranavegLojavirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

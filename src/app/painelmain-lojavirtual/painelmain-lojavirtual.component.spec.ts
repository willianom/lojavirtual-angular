import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelmainLojavirtualComponent } from './painelmain-lojavirtual.component';

describe('PainelmainLojavirtualComponent', () => {
  let component: PainelmainLojavirtualComponent;
  let fixture: ComponentFixture<PainelmainLojavirtualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelmainLojavirtualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelmainLojavirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

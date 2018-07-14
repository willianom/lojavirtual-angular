import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprodutoComponent } from './addproduto.component';

describe('AddprodutoComponent', () => {
  let component: AddprodutoComponent;
  let fixture: ComponentFixture<AddprodutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddprodutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

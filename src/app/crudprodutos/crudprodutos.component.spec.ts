import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudprodutosComponent } from './crudprodutos.component';

describe('CrudprodutosComponent', () => {
  let component: CrudprodutosComponent;
  let fixture: ComponentFixture<CrudprodutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudprodutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudprodutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-painelmain-lojavirtual',
  templateUrl: './painelmain-lojavirtual.component.html',
  styleUrls: ['./painelmain-lojavirtual.component.css']
})
export class PainelmainLojavirtualComponent implements OnInit {

  @Input() titulo;
  @Input() col;
  @Input() tipo;

  constructor() { }

  ngOnInit() {
  }

}

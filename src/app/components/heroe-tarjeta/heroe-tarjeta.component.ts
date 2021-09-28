import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe: any = {};
  @Input() idx: number;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor() {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {}

  verHeroe() {
    this.heroeSeleccionado.emit( this.idx);
  }
}

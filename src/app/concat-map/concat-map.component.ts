import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';

import { Apunte } from '../shared/modelos/apunte.model';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css']
})
export class ConcatMapComponent implements OnInit {
  title = "Concat Map"
  apuntes = []

  constructor() { }

  ngOnInit(): void {
    const source = of(2000, 1000, 3000);
    const obsConcatMap = source.pipe(
      concatMap(v => of(`Valor: ${v}`).pipe(delay(v)))
    )
    obsConcatMap.subscribe(
      v => console.log(v)
    )
  }

  agregarApuntes(){
    let apunte = new Apunte()
    apunte.titulo = this.title
    apunte.cuerpo = "Con la función concatMap de RxJs junta observables en cierto orden. Lo singular de esto es que "
    apunte.cuerpo += "fuerza el orden de los observables independiente de su tiempo de llegada. Ver console log."
    this.apuntes.push(apunte)
  }
}

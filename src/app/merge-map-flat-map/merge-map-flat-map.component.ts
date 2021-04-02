import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { mergeMap, delay } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

import { Apunte } from '../shared/modelos/apunte.model';

@Component({
  selector: 'app-merge-map-flat-map',
  templateUrl: './merge-map-flat-map.component.html',
  styleUrls: ['./merge-map-flat-map.component.css']
})
export class MergeMapFlatMapComponent implements OnInit {
  title = "MergeMap / FlatMap"
  apuntes = []

  constructor() { }

  ngOnInit(): void {
    const source = of(2000, 1000, 3000);
    const obsMerge = source.pipe(
      mergeMap(v => of(`Valor: ${v}`).pipe(delay(v)))
    )
    obsMerge.subscribe(
      v => console.log(v)
    )

    const sour = of(
      ajax.getJSON('https://api.github.com/users/ctmil'),
      ajax.getJSON('https://api.github.com/users/ibuioli'),
    )
    const obsMer = sour.pipe(
      mergeMap(v => v)
    )
    obsMer.subscribe(
      v => console.log(v)
    )
  }

  agregarApuntes(){
    let apunte = new Apunte()
    apunte.titulo = "MergeMap"
    apunte.cuerpo = "Con la función merge map se pueden unir observables. Lo particular de mergeMap es que los resultados "
    apunte.cuerpo += "se obtienen en el orden que llegan y no en el que se mergean, como es en el caso de concatMap."
    this.apuntes.push(apunte)
    apunte.titulo = "FlatMap"
    apunte.cuerpo = ""
    this.apuntes.push(apunte)
  }
}

import { Component, OnInit } from '@angular/core';
import { pipe, of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Apunte } from '../shared/modelos/apunte.model';

@Component({
  selector: 'app-map-filter',
  templateUrl: './map-filter.component.html',
  styleUrls: ['./map-filter.component.css']
})
export class MapFilterComponent implements OnInit {

  title = "mapFilter"
  apuntes = []
  nums = of(1, 2, 3, 4, 5)
  filter = []
  map = []
  constructor() { }

  ngOnInit(): void {
    this.agregarApuntes()
    
    const alCuadrado = pipe(
      filter((n: number) => n % 2 === 0),
      map(n =>{
        this.filter.push(n)
        this.map.push(n*n)
        return n*n
      })
    )
    
    const cuadrado = alCuadrado(this.nums)

    cuadrado.subscribe( x => console.log(x))
  }

  agregarApuntes(){
    let apunte = new Apunte()
    apunte.titulo = "Pipe"
    apunte.cuerpo = "Pipe es utilizado para llamar una serie de funciones. Para ejecutar esto nos debemos subscribir a la pipe."
    this.apuntes.push(apunte)
    apunte = new Apunte()
    apunte.titulo = "of"
    apunte.cuerpo = "Emite el monto d euna variable de una secuencia de valores, luego emite una notificación de completitud"
    this.apuntes.push(apunte)
    apunte = new Apunte()
    apunte.titulo = "filter"
    apunte.cuerpo = "Filtra los valores de un of mediante una función, la cuál retorna un verdadero o falso"
    this.apuntes.push(apunte)
     apunte = new Apunte()
    apunte.titulo = "map"
    apunte.cuerpo = "La llamada a map se utiliza para aplicar una función a los elementos que pasaron el filtrado"
    this.apuntes.push(apunte)
  }

}

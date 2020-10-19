import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';

import { Apunte } from '../shared/modelos/apunte.model'; 

@Component({
  selector: 'app-interval-timer',
  templateUrl: './interval-timer.component.html',
  styleUrls: ['./interval-timer.component.css']
})
export class IntervalTimerComponent implements OnInit {
  title ="Interval-Timer"
  apuntes = []
  interval = {
    n: 1000,
    value: 0
  }
  timer = {
    n: 4000,
    trigger: "Aún no lanzado, esperando por los 10 segundos"
  }

  constructor() { }

  ngOnInit(): void {
    const contador = interval(this.interval.n)
    const time = timer(this.timer.n)
    contador.subscribe((n) => {
      console.log('cada ' + n + ' segundos')
      this.interval.value = n
    })
    time.subscribe(() => {
      this.timer.trigger = "Triggered"
      console.log('Triggered')
    })
    this.agregarApuntes()
  }

  agregarApuntes(){
    let apunte = new Apunte()
    apunte.titulo = "Interval"
    apunte.cuerpo = "Interval se utiliza para generar un llamado cada cierta cantidad de tiempo. Su utilización está en la declaración de una variable "
    apunte.cuerpo += "const inter = interval(n) donde n es la cantidad de microsegundos que defenine la cierta cantidad de tiempo. "
    this.apuntes.push(apunte)
    apunte = new Apunte()
    apunte.titulo = "Timer"
    apunte.cuerpo = "Timer se utiliza para generar un llamado al transcurrir un tiempo de subscripción. Su utilización está en la declaración de una variable"
    apunte.cuerpo += "const time = timer(m), donde m es la cantidad de microsegundos que define la cierta cantidad de tiempo. "
    this.apuntes.push(apunte)
    apunte = new Apunte()
    apunte.titulo = "Subscripción"
    apunte.cuerpo = "El concepto de subscripción es para manejar la ejecución de una función o de una variable. En este caso lo utilizamos para poder ver los"
    apunte.cuerpo += " resultados de la subscripción del interval y de timer. Pueden tener distintas respuestas a una subscripción, tales como éxito, error, entre otros."
    apunte.cuerpo += " La implementación de este caso es contador.subscribe((n) => { console.log('cada ' + n + ' segundos')}" 
    this.apuntes.push(apunte)
  }

}
 
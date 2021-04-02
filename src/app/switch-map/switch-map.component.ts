import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { interval, fromEvent, merge, empty } from 'rxjs'
import { switchMap, scan, takeWhile, startWith, mapTo } from 'rxjs/operators'

import { Apunte } from '../shared/modelos/apunte.model';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {

  title = "SwitchMap"
  apuntes = []
  logs = []

  @ViewChild('pause') pause: ElementRef
  @ViewChild('resume') resume: ElementRef
  @ViewChild('remaining') remaining: ElementRef

  constructor() { }

  ngOnInit(): void {
    fromEvent(document, 'click').pipe(switchMap(() => interval(1000))).subscribe((log) => this.logs.push(log))
    const pauseButton = document.getElementById('pause')
    const resumeButton = document.getElementById('resume')
    const remainingLabel = document.getElementById('remaining')

    const obsInterval = interval(1000).pipe(mapTo(-1))
    const pause = fromEvent(pauseButton, 'click').pipe(mapTo(false));
    const resume = fromEvent(resumeButton, 'click').pipe(mapTo(true));

    
    const timer = merge(pause, resume)
      .pipe(
        startWith(true),
        switchMap(val => (val ? obsInterval : empty())),
        scan((acc, curr) => ( curr ? curr + acc : acc), 10),
        takeWhile(v => v >= 0)
      )
      .subscribe((val: any) => {
        this.remaining.nativeElement.value = val
        remainingLabel.innerHTML = val
      })

      this.agregarApuntes()
  }

  agregarApuntes(){
    let apunte = new Apunte()
    apunte.titulo = "Switch Map"
    apunte.cuerpo = "Al suscribirse con Switch Map a un intervalo llamado por un evento de click"
    apunte.cuerpo += " puede interrumpir el evento llamándolo de nuevo en caso de que ya se haya llamado."
    this.apuntes.push(apunte)
    apunte = new Apunte()
    apunte.titulo = "¡Haz click en el html!"
    this.apuntes.push(apunte)
  }

}

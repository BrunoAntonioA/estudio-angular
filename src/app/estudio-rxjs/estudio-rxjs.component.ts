import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { interval, timer, fromEvent, pipe, of} from 'rxjs';
import { map, filter, tap} from 'rxjs/operators';

@Component({
  selector: 'app-estudio-rxjs',
  templateUrl: './estudio-rxjs.component.html',
  styleUrls: ['./estudio-rxjs.component.css']
})
export class EstudioRxjsComponent implements OnInit {

  constructor() { }

  title = "Estudio Rxjs"

  ngOnInit(): void {
  }

  ngAfterViewInit(){}
}

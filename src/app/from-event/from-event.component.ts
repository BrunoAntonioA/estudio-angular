import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit {
  title = "fromEvent"

  constructor() { }

  ngOnInit(): void {
  }

}

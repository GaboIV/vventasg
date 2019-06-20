import { Component, OnInit } from '@angular/core';

declare function init_plugins();

@Component({
  selector: 'app-paginas',
  templateUrl: './paginas.component.html',
  styleUrls: ['./paginas.component.css']
})
export class PaginasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}

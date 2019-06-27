import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

declare function init_plugins();

@Component({
  selector: 'app-paginas',
  templateUrl: './paginas.component.html',
  styleUrls: ['./paginas.component.css'],
  
})
export class PaginasComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit() {
    init_plugins();
    this.document.body.classList.remove('bodywall');
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

declare function init_plugins();

@Component({
  selector: 'app-paginas',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
  
})
export class PagesComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit() {
    init_plugins();
    this.document.body.classList.remove('bodywall');
  }

}

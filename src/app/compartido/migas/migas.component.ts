import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-migas',
  templateUrl: './migas.component.html',
  styleUrls: ['./migas.component.css']
})
export class MigasComponent implements OnInit {

  label: string = '';
  rutas: any = '';

  constructor(
    private router: Router,
    public title: Title,
    public meta: Meta
  ) {
    this.getDataRoute()
      .subscribe( data => {

        this.label = data.titulo;
        this.rutas = data.rutas;
        this.title.setTitle( this.label );

        let metaTag: MetaDefinition = {
          name: 'description',
          content: this.label
        };

        this.meta.updateTag(metaTag);

      });
  }

  getDataRoute() {
    return this.router.events.pipe(
      filter( evento => evento instanceof ActivationEnd  ),
      filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null ),
      map( (evento: ActivationEnd) => evento.snapshot.data )
    );
  }

  ngOnInit() {
  }

}

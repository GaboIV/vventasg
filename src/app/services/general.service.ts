import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { URL_IMAGE } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class GeneralesService {

  constructor(
    private http: HttpClient
  ) { }

  subirImagen( id: string, selectedFile: File, carpeta ) {
    const uploadData = new FormData();
    const url = URL_IMAGE + '?id=' + id + '&carpeta=' + carpeta;
    uploadData.append('imagen', selectedFile, selectedFile.name);
    return this.http.post( url, uploadData)
      .pipe(map ( (resp: any) => {
        const res = resp;
        return res;
      })
    );
  }
}

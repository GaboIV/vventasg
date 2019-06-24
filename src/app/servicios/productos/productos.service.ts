import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosService { 

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijk4NjQyM2UyNjhhZjk5ZmI3YmQ5NzM0NTg2MGRiNTJiMzRlMmJjOTY4M2U4NWIzODAxOTg2OWM3YzY3MTFjOGNjMWQ4M2VjMTRjNTFjMzM3In0.eyJhdWQiOiIxIiwianRpIjoiOTg2NDIzZTI2OGFmOTlmYjdiZDk3MzQ1ODYwZGI1MmIzNGUyYmM5NjgzZTg1YjM4MDE5ODY5YzdjNjcxMWM4Y2MxZDgzZWMxNGM1MWMzMzciLCJpYXQiOjE1NjE0MDQzOTUsIm5iZiI6MTU2MTQwNDM5NSwiZXhwIjoxNTkzMDI2Nzk1LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.rz78PCs3SxJdyL7u7_s54OkeqtEljdrccj-ICBsr6EoGaxjYJP8Zmgtm8Lq3cbMnffRefrahTnebOxcwk67u9ocyNNQdzsTuQAag5L7y5GqqSfshDpv77pzJLn1Y7_bUWHt2eFU61bMzW6Ew19jnJfX0tDd86jx8fkKk2VBvW6paUiDnhfRPPu7Mk62xh62BHME6zzJeR73CoWmo4ohWsJw3wBxZRaMop1pg5JCCc283bktucJ1bNLUPMjLHjpBmSpINlsXVpn3ofN_Rs-i_IZDrNrB1OTVtsHtAytTQfUVksD2DmLy71r-aTKtGQdUf3LjMvJn7QSAGI-0k82GS7p6e7PS0Vkc2j8KcEcFhNvXHSXyd2KqDGkJxQO574V8GWQN_UgrZSEcnuZRU1AF0O2L6bQv3BQN4leGoeLSDnVpzQHsNJdhibunE4EVOZsXehiVVsjyXbdK9hqgGXczJ4WybaVbLJ0TE2I7oagjEQWT7FHRTbBrXJRM9zIWKkprr7KWEI9Va7-FfgZTGsvlGZhduPVRWpB6I0hFDxzwJOUWdieXjcJzJiMePnfvM9dsBv80PkqubK_lEBWpTAWZRI-SIG8Ta9zVvDPKLP47JUVdMY07DCbHo72LM5Nn-2YVsukJjxO5scpvAXsj4h9XlojeEjKQZeC6LqYKB8iOUIsQ'
    })
  };

  constructor(
    public http: HttpClient
  ) { }

  cargarProductos(url: string): any {
    return this.http.get( url, this.httpOptions )
    .pipe(
      map( (resp: any) => {
        console.log( resp.data.data );
        return resp;
      })
    );
  }
}

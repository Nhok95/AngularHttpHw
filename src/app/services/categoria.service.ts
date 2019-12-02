import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  URL = 'http://10.250.5.29:8086/api/categorias'

  constructor(private http:HttpClient) { }

  // Implementación GET

  getCategorias():Observable<any>{
    return this.http.get(this.URL);
  }
}

/* 
crear clase camarero.ts
crear servicio camareroService (ng g s services/camareroService)
add to providers (app.module.ts)
inyectamos http client en el servicio
declaramos URL
crear metodo getCamarero (recibira un number, codigo camarero), devolvera un observable tipado camarero
*/
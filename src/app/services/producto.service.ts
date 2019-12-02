import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  URL = 'http://10.250.5.29:8086/api/productos'

  constructor(private http:HttpClient) { }

  createProduct(producto:Producto):Observable<Producto> {
    return this.http.post<Producto>(this.URL, producto);
  }
}

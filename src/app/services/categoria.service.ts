import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  URL = 'http://10.250.5.29:8086/api/categorias'

  constructor(private http:HttpClient) { }

  // Implementación GET

  getCategorias():Observable<any>{

    this.http.send()
    
    return null;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Camarero } from '../model/camarero';

@Injectable({
  providedIn: 'root'
})
export class CamareroService {

  URL = 'http://10.250.5.29:8086/api/camareros'

  constructor(private http:HttpClient) { }

  getAll():Observable<Camarero[]> {
    return this.http.get<Camarero[]>(this.URL);
  }

  getCamarero(codigo:number):Observable<Camarero> {
    return this.http.get<Camarero>(this.URL + "/" + codigo);
  }

  createCamarero(camarero:Camarero):Observable<Camarero> {
    return this.http.post<Camarero>(this.URL, camarero);
  }

}

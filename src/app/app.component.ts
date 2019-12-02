import { Component, OnInit } from '@angular/core';
import { CategoriaService } from './services/categoria.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  categorias:String[] = [];

  constructor(private categoriaSerivce: CategoriaService){}

  ngOnInit():void {
    this.categoriaSerivce.getCategorias().subscribe(datos => {
      console.log(datos);
      this.categorias = datos;
    })
  }
}

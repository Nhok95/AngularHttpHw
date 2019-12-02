import { Component, OnInit } from '@angular/core';
import { CategoriaService } from './services/categoria.service'
import { Camarero } from './model/camarero';
import { CamareroService } from './services/camarero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  categorias:String[] = undefined;

  camarero:Camarero = undefined;
  camareros:Camarero[] = undefined;

  constructor(private categoriaService: CategoriaService, 
    private camareroService: CamareroService){}

  ngOnInit():void {
    this.categoriaService.getCategorias().subscribe(datos => {
      this.categorias = datos;
    });

    this.camareroService.getCamarero(100).subscribe(datos => {
      this.camarero = datos;
    });

    this.camareros = [];
    this.camareroService.getAll().subscribe(datos => {
      for(let d of datos) {
        this.camareros.push(new Camarero(d.codigo, d.nombre));
      }
    });
/*
    this.camareroService.createCamarero(new Camarero(6, "Sexto Ortega")).subscribe(datos => {
      console.log(datos);
    });
*/
  }

  crearCamarero(){
    
    let randoCode = Math.floor(Math.random() * 50000) + 400;

    this.camareroService.createCamarero(new Camarero(randoCode, "Sexto Ortega")).subscribe(datos => {
      console.log(datos);
    });
  }

}

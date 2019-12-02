import { NgModule } from '@angular/core'

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';

// Services
import { CategoriaService } from './services/categoria.service';
import { CamareroService } from './services/camarero.service';
import { ProductoService } from  './services/producto.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CategoriaService,
    CamareroService,
    ProductoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

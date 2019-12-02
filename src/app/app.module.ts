import { NgModule } from '@angular/core'

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';

// Services
import { CategoriaService } from './services/categoria.service';
import { CamareroService } from './services/camarero.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CategoriaService,
    CamareroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

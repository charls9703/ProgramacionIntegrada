import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";


//rutas
import { AppRoutingModule } from './app-routing.module';


//componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './plantilla_header_footer/header/header.component';
import { FooterComponent } from './plantilla_header_footer/footer/footer.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductosComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }

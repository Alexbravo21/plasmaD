import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { BelowHeroComponent } from './components/below-hero/below-hero.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    BelowHeroComponent,
    ServiciosComponent,
    NosotrosComponent,
    ProyectosComponent,
    BlogComponent,
    ContactoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

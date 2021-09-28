import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Routes
import { APP_ROUTING } from './app.routes';

//Servicios

import { HeroesService } from './servicios/heroes.service';
//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroeFilterComponent } from './components/heroe-filter/heroe-filter.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    HeroeFilterComponent,
    HeroeTarjetaComponent
  ],
  imports: [BrowserModule, APP_ROUTING],
  providers: [HeroesService],
  bootstrap: [AppComponent],
})
export class AppModule {}

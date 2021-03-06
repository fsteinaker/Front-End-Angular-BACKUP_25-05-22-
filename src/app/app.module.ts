import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { FormacionComponent } from './componentes/formacion/formacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { HttpClientModule } from '@angular/common/http';

// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PerfilComponent,
    ExperienciaComponent,
    FormacionComponent,
    HabilidadesComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    // Animacion grafico circular habilidades.component.html
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 800,
    }),
    BrowserAnimationsModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
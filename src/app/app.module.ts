import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Importo las rutas */
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
/* Mis componentes */
import { ErrorComponent } from './error/error.component';
import { HelloComponent } from './hello/hello.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [AppComponent, ErrorComponent, HelloComponent, HomeComponent],
  imports: [BrowserModule,AppRoutingModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

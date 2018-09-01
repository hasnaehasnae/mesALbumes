import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AccueilComponent } from './accueil/accueil.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AccueilComponent,
    InscriptionComponent,
    ConnexionComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
         {
            path: 'accueil',
            component: AccueilComponent
         }
            ,{
            path: 'inscription',
            component: InscriptionComponent
         },
          {
            path: 'connexion',
            component: ConnexionComponent 
         }

      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

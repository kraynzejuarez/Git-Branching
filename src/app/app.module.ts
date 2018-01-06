/*Angular Imports*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*App Import*/
import { AppComponent } from './app.component';

/* Core Modules */
import { CoreModule }       from './core/core.module';

/* Routing Module*/
import { AppRoutingModule }   from './app-routing.module';


@NgModule({
    imports:      [ BrowserModule, CoreModule, AppRoutingModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
  ],
  
})
export class AppModule { }
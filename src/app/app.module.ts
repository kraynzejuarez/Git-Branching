/*Angular Imports*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*App Import*/
import { AppComponent } from './app.component';
import { TitleComponent } from './title.component';
import { UserService } from './user.service';
import { HighlightDirective } from './highlight.directive';

/* Routing Module*/
import { AppRoutingModule }   from './app-routing.module';


@NgModule({
    imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ AppComponent, HighlightDirective, TitleComponent ],
  providers:    [ UserService ],
  bootstrap:    [ AppComponent ],
  ],
  
})
export class AppModule { }
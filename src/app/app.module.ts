import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitleComponent } from './title.component';
import { UserService } from './user.service';
import { HighlightDirective } from './highlight.directive';
import { ContactModule }      from './contact/contact.module';

@NgModule({
    imports:      [ BrowserModule, ContactModule ],
  declarations: [ AppComponent, HighlightDirective, TitleComponent ],
  providers:    [ UserService ],
  bootstrap:    [ AppComponent ],
  ],
  imports: [
    BrowserModule, Formsodule

  ],
  providers: [ContactService, UserService],
  bootstrap: [AppComponent
  ], 
  
})
export class AppModule { }
import { DemoComponent } from './demo/demo.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LinkcomponentComponent } from './linkcomponent/linkcomponent.component';
import { MaincomponentComponent } from './maincomponent/maincomponent.component';
import { PromotioncomponentComponent } from './promotioncomponent/promotioncomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    LinkcomponentComponent,
    MaincomponentComponent,
    PromotioncomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

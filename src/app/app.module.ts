import { ModuleModuleTwo } from './Module2/module2.module';
import { ModuleModule } from './Module1/module-one/module1.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    ModuleModule,
    ModuleModuleTwo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

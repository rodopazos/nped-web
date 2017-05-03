// Angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// OPT Imports
import { IComponentServiceConfig } from './../components/opt/interfaces/interface.service.config';
import { ComponentServiceConfig } from '../components/opt/classes/class.service.config';

// This Module Imports
import { TabModule } from '../components/tab/tab.module';
import { AppComponent } from './app.component';

// Others Imports
import { SharedModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TabModule,
    SharedModule,
  ],
  providers: [
    { provide: IComponentServiceConfig, useClass: ComponentServiceConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

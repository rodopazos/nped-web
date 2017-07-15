// Angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// OPT Imports
import { IComponentServiceConfig } from '../services/opt/interfaces/config.interface.opt.service';
import { ComponentServiceConfig } from '../services/opt/classes/config.class.opt.service';

// This Module Imports
import { TabModule } from '../components/tab/tab.module';
import { AppComponent } from './app.component';
import { RoutingModule } from './app.routes';
import { LoginModule } from '../components/login/login.module';

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
    LoginModule,
    RoutingModule
  ],
  providers: [
    { provide: IComponentServiceConfig, useClass: ComponentServiceConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

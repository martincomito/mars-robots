import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RobotComponent } from './robot/robot.component';
import { MarsSurfaceComponent } from './mars-surface/mars-surface.component';


@NgModule({
  declarations: [
    AppComponent,
    RobotComponent,
    MarsSurfaceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

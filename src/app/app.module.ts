import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CDK_DRAG_CONFIG, DragDropModule} from '@angular/cdk/drag-drop';
import {DragAndDropDemoComponent} from './drag-drop/drag-drop-demo';

@NgModule({
  declarations: [
    AppComponent,
    DragAndDropDemoComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule
  ],
  providers: [
    {provide: CDK_DRAG_CONFIG, useValue: {
        dragStartThreshold: 0,
        pointerDirectionChangeThreshold: 5
      }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

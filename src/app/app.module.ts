import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppRootComponent } from './app-root/app-root.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { AppBodyComponent } from './app-body/app-body.component';
import { TaskHeaderComponent } from './task-header/task-header.component';
import { TaskInputDailogComponent } from './task-input-dailog/task-input-dailog.component'
import { TaskInputDialogService } from './services/task-input-dialog.service';
import { TaskManagerService } from './services/task-mangaer.service';
import { TaskCardComponent } from './task-card/task-card.component';

@NgModule({
  declarations: [
    AppRootComponent,
    AppBarComponent,
    AppBodyComponent,
    TaskHeaderComponent,
    TaskInputDailogComponent,
    TaskCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TaskInputDialogService,TaskManagerService],
  bootstrap: [AppRootComponent,AppBarComponent,AppBodyComponent,TaskHeaderComponent],
  exports:[TaskInputDailogComponent,TaskCardComponent]
  
})
export class AppModule { }

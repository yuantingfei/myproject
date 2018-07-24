import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// 路由
import { MyRoutesModule } from './my-routes/my-routes.module';
// 通用的模块部分
import { SharedModule } from '@shared/shared.module';
import { LayoutComponent } from './pages/layout/layout.component';
@NgModule({
  declarations: [
    LayoutComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule.forRoot(),
    MyRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

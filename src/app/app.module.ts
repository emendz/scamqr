import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/form/form.component';
import { HeaderComponent } from './components/header/header.component';
import { ScanQrComponent } from './components/scan-qr/scan-qr.component';

@NgModule({
  declarations: [
    AppComponent,
    ScanQrComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    ZXingScannerModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ScanQrComponent } from './components/scan-qr/scan-qr.component';

const routes: Routes = [
  { path: '', redirectTo: '/scan', pathMatch: 'full' },
  { path: 'scan', component: ScanQrComponent },
  { path: 'form/:codigo', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

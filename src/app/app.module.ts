import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header/header.component';
import { loginComponent } from './components/pages/login/login.component';
import { AdminForumComponent } from './components/pages/admin-forum/admin-forum.component';
import { StudentForumComponent } from './components/pages/student-forum/student-forum.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanelAdminComponent } from './components/pages/panel-admin/panel-admin.component';
import { NavBarAdminComponent } from './components/nav-bar-admin/nav-bar-admin.component';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { GenerarReporteComponent } from './components/pages/generar-reporte/generar-reporte.component';
import { AdminHomeComponent } from './components/pages/admin-home/admin-home.component';
import { StudentValidateComponent } from './components/pages/student-validate/student-validate.component';
import { StudentBenefitComponent } from './components/pages/student-benefit/student-benefit.component';
import { HttpClientModule } from '@angular/common/http';
import { TablaPersonaComponent } from './components/tabla-persona/tabla-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    loginComponent,
    AdminForumComponent,
    StudentForumComponent,
    PanelAdminComponent,
    NavBarAdminComponent,
    HeaderAdminComponent,
    GenerarReporteComponent,
    AdminHomeComponent,
    StudentValidateComponent,
    StudentBenefitComponent,
    TablaPersonaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    CdkAccordionModule,
    MatIconModule,
    MatSliderModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

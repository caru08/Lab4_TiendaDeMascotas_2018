import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule,
  MatChipsModule, MatDatepickerModule, MatDialogModule,
  MatExpansionModule,  MatGridListModule, MatIconModule, MatInputModule,
  MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule,
  MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule,
  MatSliderModule, MatSlideToggleModule, MatSortModule,
  MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatStepperModule,
  MatSnackBarModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { RecaptchaModule } from 'ng-recaptcha';



//SERVICIOS
import { StaticData } from './classes/staticData';
import { MBPipe } from './classes/pipeMb.pipe';
import { DolarPipe } from './classes/pipeDolar.pipe';
import { ColorDirective } from './classes/directiveColor.directive';


import { ROUTES } from './app.routes';
import { LoginService } from './services/login.service';
import { SnackMessage } from './services/snackmessage.service';
import { BaseService } from './services/base.service';
import { MascotaService } from './services/mascota.service';
import { TurnoService } from './services/turno.service';
import { ServicioWebService } from './services/servicioWeb.service';
import { ServicioClienteService } from './services/servicioCliente.service';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//COMPONENTES COMUNES
import { CircleLoaderComponent } from './components/common/circle-loader.component';

//COMPONENTES PAGINAS
import { HomeComponent } from './components/home.component';
import { MenuNavBarComponent } from './components/menu-nav-bar.component';
import { LoginUserComponent } from './components/login/login-user.component';
import { RegistrarseUserComponent } from './components/login/registrarse-user.component';
import { HistorialViajesComponent } from './components/acciones-usuario/historial-pedidos.component';
import { MascotaFormularioComponent } from './components/acciones-usuario/mascota-formulario.component';
import { TurnoFormularioComponent } from './components/acciones-usuario/turno-formulario.component';
import { ListadoTurnosComponent } from './components/acciones-usuario/listado-turnos.component';
import { ListadoTurnosTodosComponent } from './components/acciones-usuario/listado-turnos-todos.component';
import { ServicioWebFormularioComponent } from './components/empresa/servicioWeb-formulario.component';
import { ServicioWebListadoComponent } from './components/empresa/servicioWeb-listado.component';
import { ListadoClientesComponent } from './components/empresa/listado-clientes.component';


ServicioWebListadoComponent
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuNavBarComponent,
    CircleLoaderComponent,
    LoginUserComponent,
    RegistrarseUserComponent,
    HistorialViajesComponent,
    MascotaFormularioComponent,
    TurnoFormularioComponent,
    ListadoTurnosComponent,
    ListadoTurnosTodosComponent,
    ServicioWebFormularioComponent,
    ServicioWebListadoComponent,
    MBPipe,
    DolarPipe,
    ListadoClientesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSnackBarModule,
    RouterModule.forRoot(ROUTES, {
      useHash: true,
      preloadingStrategy: PreloadAllModules,
      enableTracing: true  // <-- debugging purposes only
    }),
    RecaptchaModule.forRoot()
  ],
  providers: [
    LoginService,
    SnackMessage,
    BaseService,
    MascotaService,
    TurnoService,
    ServicioWebService,
    ServicioClienteService,
    StaticData
  ],
  bootstrap: [AppComponent],
  entryComponents:[
  ]
})
export class AppModule { }

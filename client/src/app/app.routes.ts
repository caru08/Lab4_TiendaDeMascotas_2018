import { Routes } from '@angular/router';
import { AppComponent} from './app.component';
import { HomeComponent} from './components/home.component';
import { LoginUserComponent } from './components/login/login-user.component';
import { RegistrarseUserComponent } from './components/login/registrarse-user.component';
import { MascotaFormularioComponent } from './components/acciones-usuario/mascota-formulario.component';
import { TurnoFormularioComponent } from './components/acciones-usuario/turno-formulario.component';
import { ListadoTurnosComponent } from './components/acciones-usuario/listado-turnos.component';


export const ROUTES: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: AppComponent },
  { path: 'home', component: HomeComponent,
    children:[
      { path:'mascota-formulario', component: MascotaFormularioComponent },
      { path:'turnos-formulario', component: TurnoFormularioComponent },
      { path:'mis-turnos', component: ListadoTurnosComponent }
    ]
  },
  { path: 'login', component: LoginUserComponent },
  { path: 'registrarse', component: RegistrarseUserComponent }

];

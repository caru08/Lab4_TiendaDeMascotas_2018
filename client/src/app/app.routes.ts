import { Routes } from '@angular/router';
import { AppComponent} from './app.component';
import { HomeComponent} from './components/home.component';
import { LoginUserComponent } from './components/login/login-user.component';
import { RegistrarseUserComponent } from './components/login/registrarse-user.component';
import { MascotaFormularioComponent } from './components/acciones-usuario/mascota-formulario.component';
import { TurnoFormularioComponent } from './components/acciones-usuario/turno-formulario.component';
import { ListadoTurnosComponent } from './components/acciones-usuario/listado-turnos.component';
import { ListadoTurnosTodosComponent } from './components/acciones-usuario/listado-turnos-todos.component';
import { ServicioWebFormularioComponent } from './components/empresa/servicioWeb-formulario.component';
import { ServicioWebListadoComponent } from './components/empresa/servicioWeb-listado.component';
import { ListadoClientesComponent } from './components/empresa/listado-clientes.component';


export const ROUTES: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: AppComponent },
  { path: 'home', component: HomeComponent,
    children:[
      { path:'servicioWeb-formulario', component: ServicioWebFormularioComponent },
      { path:'servicioWeb-listado', component: ServicioWebListadoComponent },
      { path:'listado-clientes', component: ListadoClientesComponent },
      { path:'alta-clientes', component: RegistrarseUserComponent },
      /*{ path:'turnos-formulario', component: TurnoFormularioComponent },
      { path:'mis-turnos', component: ListadoTurnosComponent },
      { path:'listado-turnos', component: ListadoTurnosTodosComponent }*/
    ]
  },
  { path: 'login', component: LoginUserComponent }
  //{ path: 'registrarse', component: RegistrarseUserComponent }

];

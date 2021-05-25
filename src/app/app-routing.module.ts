import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './componentes/carro/formulario/formulario.component';
import { ConsultasComponent } from './componentes/carro/consultas/consultas.component';
import { RegistroComponent } from './componentes/desplazamiento/registro/registro.component';
import { ConsultasDesplazamientoComponent } from './componentes/desplazamiento/consultas-desplazamiento/consultas-desplazamiento.component';

const routes: Routes = [
  { path: 'registro-carro', component: FormularioComponent },
  { path: 'consultar-carros', component: ConsultasComponent },
  { path: 'registro-desplazamiento', component: RegistroComponent },
  { path: 'consultar-desplazamiento', component: ConsultasDesplazamientoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

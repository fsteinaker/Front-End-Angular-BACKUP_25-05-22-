import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';

const routes: Routes = [
  {path: 'portfolio',component:PortfolioComponent},
  {path: '',redirectTo:'login',pathMatch:'full'},
  { path: 'admin', loadChildren: () => import('./componentes/admin/admin.module').then(m => m.AdminModule) },
  { path: 'login', loadChildren: () => import('./componentes/auth/login/login.module').then(m => m.LoginModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

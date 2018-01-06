import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactModule }    from './contact/contact.module';

const routes: Routes = [
  { path: '', redirectTo: 'contact', pathMatch: 'full'},
  { path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule' },
  { path: 'heroes', loadChildren: 'app/hero/hero.module#HeroModule' },
  { path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
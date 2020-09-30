import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from 'src/app/components/twitter/search/search.component'
import { SearchResultComponent } from './components/twitter/search-result/search-result.component';
import { AuthGuard } from './services/auth-guard';


const routes: Routes = [
  { path: 'twitter/search', component: SearchComponent, canActivate:[AuthGuard] },
  { path: 'twitter/search/result', component: SearchResultComponent, canActivate:[AuthGuard] },
  { path: '', redirectTo:'twitter/search', pathMatch: 'full' },
  { path: '**', redirectTo:'twitter/search', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

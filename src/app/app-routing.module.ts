import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from 'src/app/components/twitter/search/search.component'
import { LoginComponent } from './components/login/login.component';
import { SearchResultComponent } from './components/twitter/search-result/search-result.component';


const routes: Routes = [
  { path: 'twitter/search', component: SearchComponent },
  { path: 'twitter/search/result', component: SearchResultComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'poke-info/:name',
    loadChildren: () => import('./pages/poke-info/poke-info.module').then( m => m.PokeInfoPageModule)
  },
  {
    path: 'Erro-404',
    loadChildren: () => import('./pages/er404/er404.module').then( m => m.Er404PageModule)
  },
  {
    path: '**',
    redirectTo: 'Erro-404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

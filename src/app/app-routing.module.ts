import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
  { path: 'intro', loadChildren: './intro/intro.module#IntroPageModule' },  
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },  
  { path: 'feed', loadChildren: './feed/feed.module#FeedPageModule' }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

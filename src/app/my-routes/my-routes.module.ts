import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './routes';

@NgModule({
  imports: [
  	// 使用 # 类型路由 userHash: true
    RouterModule.forRoot(routes, {useHash: true}),
    // RouterModule.forRoot(routes),
  ],
  declarations: [
  ],
  exports: [ RouterModule ]
})
export class MyRoutesModule {
  routes = []
}

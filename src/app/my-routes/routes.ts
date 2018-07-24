import { LayoutComponent } from './../pages/layout/layout.component';
export const routes = [

  {
    path: '',
    component: LayoutComponent
  },
  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home/status', pathMatch: 'full' },
      { path: 'home/status', loadChildren: '../pages/home/status/status.module#StatusModule' },
      { path: 'event/map', loadChildren: '../pages/event/event.module#EventModule' },
      { path: 'home/index', loadChildren: '../pages/home/index/index.module#IndexModule' },
    ]
  }
]

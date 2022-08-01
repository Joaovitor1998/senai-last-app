import { HasAdminRoleGuard } from './shared/guards/has-admin-role.guard';
import { NotLoggedInGuard } from './shared/guards/not-logged-in.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedInGuard } from './shared/guards/is-logged-in.guard';

const routes: Routes = [
  {
    path: "signup",
    loadChildren: () => import("./core/new-user/new-user.module").then( m => m.NewUserModule),
    canLoad: [NotLoggedInGuard]
  },
  {
    path: "admin",
    loadChildren: () => import("./admin/admin.module").then( m => m.AdminModule),
    canLoad: [HasAdminRoleGuard]
  },
  {
    path: "login",
    loadChildren: () => import("./authentication/authentication.module").then(m => m.AuthenticationModule),
    canLoad: [NotLoggedInGuard]
  },
  {
    path: "dashboard",
    loadChildren: () => import("./core/dashboard/dashboard.module").then(m => m.DashboardModule),
    canLoad: [IsLoggedInGuard]
  },
  {
    path: "",
    loadChildren: () => import("./core/home/home.module").then(m => m.HomeModule),
    canLoad: [IsLoggedInGuard]
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

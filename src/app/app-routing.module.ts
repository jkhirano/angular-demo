import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { NotFoundComponent } from "./pages/notFound/notFound.component";
import { LoginComponent } from "./pages/login/login.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "404", component: NotFoundComponent },
  { path: "login", component: LoginComponent },
  { path: "**", redirectTo: "404", pathMatch: "full" } // order matters, ** needs to be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { RouterModule, Routes } from "@angular/router";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";

const ROUTES:Routes=[
{path:'navbar',component:NavbarComponent},
{path:'home',component:HomeComponent},
{path:'buscar',component:SearchComponent},

];
export const ROUTER_APP=RouterModule.forRoot(ROUTES);
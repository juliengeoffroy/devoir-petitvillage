import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ProductComponent } from "./product/product.component";
import { ContactComponent } from "./contact/contact.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "product/:id", component: ProductComponent },
  { path: "contact", component: ContactComponent },
  {
    path: "**",
    redirectTo: "",
  },
];

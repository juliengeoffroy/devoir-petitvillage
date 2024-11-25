import { HeaderComponent } from "../header/header.component";
import { Component, OnInit, LOCALE_ID } from "@angular/core";
import { ProductsService } from "../products.service";
import { ActivatedRoute } from "@angular/router";
import { CommonModule, registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/fr";
registerLocaleData(localeFr);

interface Product {
  id: number;
  name: string;
  desc: string;
  price: number;
  picture: string;
}

@Component({
  selector: "app-product",
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: "./product.component.html",
  styleUrl: "./product.component.css",
  providers: [{ provide: LOCALE_ID, useValue: "fr-FR" }],
})
export class ProductComponent implements OnInit {
  product?: Product;

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const productId = Number(params["id"]);
      if (productId) {
        this.product = this.productsService.getProduct(productId);
      } else {
        console.error("Product ID not found in route parameters.");
      }
    });
  }
}

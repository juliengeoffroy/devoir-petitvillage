import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "./products.service";
@Pipe({
  name: "sortByPrice",
  standalone: true,
})
export class SortByPricePipe implements PipeTransform {
  transform(value: Product[], order: "asc" | "desc" = "asc"): Product[] {
    return value.sort((a, b) => {
      if (order === "asc") {
        return a.price - b.price;
      } else if (order === "desc") {
        return b.price - a.price;
      }
      return 0;
    });
  }
}

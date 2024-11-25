import { Injectable } from "@angular/core";

export interface Product {
  id: number;
  name: string;
  desc: string;
  price: number;
  picture: string;
}

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  products: Product[] = [

    {
      id: 1,
      name: "Figurine Astérix",
      desc: "Figurine en plastique d'Astérix, fait main, le personnage principal de la série. Le représente souvent dans sa pose emblématique, avec son casque ailé et sa ceinture, d'un cote son épée et de l'autre sa fiole de potion magique.",
      price: 25,
      picture: "../assets/img/Asterix.jpg",

    },
    {
      id: 2,
      name: "Figurine Obélix",
      desc: "Figurine en plastique d'Obélix, fait main, le meilleur ami d'Astérix. Souvent représenté tenant un menhir ou un sanglier.",
      price: 25,
      picture: "../assets/img/Obelix.jpg",
    },
    {
      id: 3,
      name: "Figurine Idefix",
      desc: "Figurine en plastique d'Idefix, fait main, le meilleur compagnion d'Obélix. Souvent représenté tenant un os dans la bouche.",
      price: 20,
      picture: "../assets/img/Idefix.webp",
    },
    {
      id: 4,
      name: "Figurine Panoramix",
      desc: "Figurine en plastique de Panoramix, fait main, le Druide. Le représente souvent fabriquant des possion magique.",
      price: 20,
      picture: "../assets/img/Panoramix.webp",
    },
    {
      id: 5,
      name: "Figurine Falbala",
      desc: "Figurine en plastique de Falbala, fait main,.",
      price: 20,
      picture: "../assets/img/Falbala.webp",
    },
    {
      id: 6,
      name: "Figurine Abraracourcix",
      desc: "Figurine en plastique d'Abraracourcix, fait main, Le chef de la tribus gauloise. Souvent représenté sur un bouclier ou une main levéé.",
      price: 20,
      picture: "../assets/img/Abraracourcix.jpg",
    },
    {
      id: 7,
      name: "Figurine Assurancetourix",
      desc: "Figurine en plastique d'Assurancetourix, fait main, le musicien de la tribus. Souvent représenté avec un instrument en main.",
      price: 15,
      picture: "../assets/img/Assurancetourix.jpg",
    },
    {
      id: 8,
      name: "Figurine César",
      desc: "Figurine en plastique de César, fait main, le chef des Romain. Représenté avec sa couronne.",
      price: 15,
      picture: "../assets/img/César.avif",
    },
    {
      id: 9,
      name: "Figurine Centurion",
      desc: "Figurine en plastique de Centurion, fait main, le bras droit de César. Souvent représenté avec son épée et son gros ventre.",
      price: 12,
      picture: "../assets/img/Centurion.webp",
    },
    {
      id: 10,
      name: "Figurine Romain",
      desc: "Figurines en plastique de Romain, fait main, les jouer d'Asterix et Obelix. Representé avec leur armure et leur lance",
      price: 12,
      picture: "../assets/img/Romain.jpg",
    },
    {
      id: 11,
      name: "Set de Figurine d'Asterix et ces Compagnions",
      desc: "Figurine en plastique, fait main, D'Asterix et ces Compagnions.",
      price: 150,
      picture: "../assets/img/Set figurine.webp",
    },
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product | undefined {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new Error(`Product with ID ${id} not found`);
    }
    return product;
  }
}

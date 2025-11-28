import { ProductsType } from "@/types";
import Link from "next/link";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import Filter from "./Filter";

// Updated product set: handcrafted items + some non-handmade apparel
const products: ProductsType = [
  {
    id: 101,
    name: "Handmade Woven Tote Bag",
    shortDescription: "Handcrafted woven tote made from natural fibers.",
    description:
      "A roomy, handwoven tote perfect for everyday carry. Crafted by local artisans using sustainable materials.",
    price: 45.0,
    sizes: ["one-size"],
    colors: ["beige", "brown"],
    images: {
      beige: "https://plus.unsplash.com/premium_photo-1689247409718-48408527fe97?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      brown: "https://plus.unsplash.com/premium_photo-1689247409718-48408527fe97?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: 102,
    name: "Handmade Leather Crossbody",
    shortDescription: "Small leather crossbody bag, hand-stitched.",
    description:
      "Premium leather crossbody with hand-stitched detailing. Ideal for hands-free outings and markets.",
    price: 79.0,
    sizes: ["one-size"],
    colors: ["tan", "black"],
    images: {
      tan: "https://media.istockphoto.com/id/2162844290/photo/womens-handmade-leather-bag-in-a-store.jpg?s=2048x2048&w=is&k=20&c=Yzg19JkqBmHAZiYXwrR5zu3j2LXD_o28IBhe1Cw1ibk=",
      black: "https://media.istockphoto.com/id/2162844290/photo/womens-handmade-leather-bag-in-a-store.jpg?s=2048x2048&w=is&k=20&c=Yzg19JkqBmHAZiYXwrR5zu3j2LXD_o28IBhe1Cw1ibk=",
    },
  },
  {
    id: 103,
    name: "Handmade Beaded Keychain",
    shortDescription: "Colorful beaded keychain made by hand.",
    description:
      "A fun, handcrafted keychain with glass and wooden beads — perfect as a small gift or accent for your keys.",
    price: 8.99,
    sizes: ["one-size"],
    colors: ["orange"],
    images: {
      orange: "https://media.istockphoto.com/id/2155451504/photo/diy-flower-shaped-beaded-keychain-is-very-beautiful.jpg?s=2048x2048&w=is&k=20&c=XNMIS8B23KfADTYuDkWT05rK15SkH9vdXcCmKG9-ybo=",
    },
  },
  {
    id: 104,
    name: "Macrame Plant Hanger",
    shortDescription: "Hand-knotted macrame hanger for indoor plants.",
    description:
      "Bring a boho touch to your home with this hand-knotted macrame plant hanger. Made with durable cotton cord.",
    price: 25.0,
    sizes: ["one-size"],
    colors: ["natural"],
    images: {
      natural: "https://media.istockphoto.com/id/1388742446/photo/homemade-plant-hangers-in-different-colors-against-grey-wall.jpg?s=2048x2048&w=is&k=20&c=E4CXBdjbUI36XIYInZts2G99j8ROc_a9NCUOathkxMY=",
    },
  },
  {
    id: 105,
    name: "Handmade Floral Dress",
    shortDescription: "Lightweight handmade dress with floral print.",
    description:
      "A breezy, handmade dress featuring a delicate floral print. Perfect for markets and summer outings.",
    price: 65.0,
    sizes: ["s", "m", "l"],
    colors: ["pink", "white"],
    images: {
      pink: "https://www.shutterstock.com/shutterstock/photos/2316338485/display_1500/stock-photo-ghost-mannequin-dress-without-human-model-for-female-ladies-isolated-on-white-background-flower-2316338485.jpg",
      white: "https://www.shutterstock.com/shutterstock/photos/2316338485/display_1500/stock-photo-ghost-mannequin-dress-without-human-model-for-female-ladies-isolated-on-white-background-flower-2316338485.jpg",
    },
  },
  {
    id: 106,
    name: "Handmade Beaded Bracelet",
    shortDescription: "Adjustable beaded bracelet, handmade.",
    description:
      "Lovely beaded bracelet handcrafted by local makers. Adjustable to fit most wrists.",
    price: 14.5,
    sizes: ["one-size"],
    colors: ["gold"],
    images: {
      gold: "https://www.shutterstock.com/shutterstock/photos/2334792377/display_1500/stock-photo-kids-handmade-beaded-jewelry-necklaces-and-bracelets-made-from-multicolored-beads-and-pearls-diy-2334792377.jpg",
    },
  },
  {
    id: 107,
    name: "Classic Cotton T-Shirt",
    shortDescription: "Comfortable, non-handmade cotton tee.",
    description:
      "A soft, classic cotton t-shirt produced with standard manufacturing — available in multiple colors.",
    price: 19.99,
    sizes: ["s", "m", "l", "xl"],
    colors: ["white", "black", "gray"],
    images: {
      white: "https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      black: "https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gray: "https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: 108,
    name: "Summer Printed Dress",
    shortDescription: "Non-handmade printed summer dress.",
    description:
      "A ready-to-wear printed dress with a flattering silhouette. Machine-made with durable fabric.",
    price: 34.99,
    sizes: ["s", "m", "l"],
    colors: ["blue", "red"],
    images: {
      blue: "https://images.unsplash.com/photo-1762154057377-cc9d3dd6900c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      red: "https://images.unsplash.com/photo-1762154057377-cc9d3dd6900c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
];

const ProductList = ({
  category,
  params,
}: {
  category: string;
  params: "homepage" | "products";
}) => {
  return (
    <div className="w-full">
      <Categories />
      {params === "products" && <Filter />}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Link
        href={category ? `/products/?category=${category}` : "/products"}
        className="flex justify-end mt-4 underline text-sm text-gray-500"
      >
        View all products
      </Link>
    </div>
  );
};

export default ProductList;

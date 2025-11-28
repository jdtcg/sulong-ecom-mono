"use client";

import { ProductType } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import useCartStore from "@/stores/cartStore";
import { toast } from "react-toastify";

export default function ProductCard({ product }: { product: ProductType }) {
  const [productTypes, setProductTypes] = useState({
    size: product.sizes[0],
    color: product.colors[0],
  });

  const { addToCart } = useCartStore();

  const handleProductTypeChange = ({
    type,
    value,
  }: {
    type: "size" | "color";
    value: string;
  }) => {
    setProductTypes((prev) => ({ ...prev, [type]: value }));
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: 1,
      selectedSize: productTypes.size,
      selectedColor: productTypes.color,
    })
    toast.success("Product added to cart!")
  };

  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      {/* IMAGE */}
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-2/3">
          <Image
            src={product.images?.[productTypes.color] || ""}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover hover:scale-105 transition-all duration-300"
          />
        </div>
      </Link>
      {/* PRODUCT DETAIL */}
      <div className="flex flex-col gap-4 p-4">
        <h1 className="font-medium">{product.name}</h1>
        <p className="text-sm text-gray-500">{product.shortDescription}</p>
        {/* PRODUCT TYPES */}
        <div className="flex items-center gap-4 text-xs">
          {/* SIZES */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Sizes:</span>
            <select
              name="size"
              id="size"
              className="ring ring-gray-300 rounded-md px-2 py-1"
              onChange={(e) =>
                handleProductTypeChange({ type: "size", value: e.target.value })
              }
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          {/* COLORS */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Colors</span>
            <div className="flex items-cente gap-2">
              {product.colors.map((color) => (
                <div
                  key={color}
                  className={`cursor-pointer w-5 h-5 rounded-full border-2 border-gray-300 ${
                    color === productTypes.color ? "ring-1 ring-gray-500" : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() =>
                    handleProductTypeChange({ type: "color", value: color })
                  }
                />
              ))}
            </div>
          </div>
        </div>
        {/* PRICE AND ADD TO CART */}
        <div className="flex items-center justify-between">
          <p className="font-medium">${product.price.toFixed(2)}</p>
          <button
            onClick={handleAddToCart}
            className="ring-1 ring-gray-200 shadow-lg rounded-md px-2 py-1 text-sm cursor-pointer hover:text-white hover:bg-black transition-all duration-300 flex items-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

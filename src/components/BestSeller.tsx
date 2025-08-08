import { useState } from "react";
import { categoriesName, products } from "../utils/constants";
import ProductsSlider from "./ProductsSlider";

const BestSeller = () => {
  const [activeOption, setActiveOption] = useState({
    id: 0,
    category: "chair",
  });
  const filteredProducts = products.filter(
    (product) => product.category === activeOption.category
  );

  return (
    <section className="bg-gray-100 py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center lg:w-auto w-full lg:text-5xl text-3xl  font-bold mr-2">
          Best Selling Product
        </h1>

        <div className="bg-gray-200 rounded-4xl px-4 py-1 max-w-sm my-8 mx-auto flex items-center justify-between">
          {categoriesName.map((categoryName, index) => {
            return (
              <div
                key={index}
                className={`cursor-pointer ${
                  activeOption.category === categoryName.category
                    ? "bg-white font-medium px-8 py-2 rounded-full"
                    : "transition-all duration-300 ease-in-out"
                }`}
                onClick={() =>
                  setActiveOption({
                    id: categoryName.id,
                    category: categoryName.category,
                  })
                }
              >
                <span className="capitalize">{categoryName.category}</span>
              </div>
            );
          })}
        </div>

        <ProductsSlider sliderContent={filteredProducts} />

        <h3 className="text-primary text-center">View All →</h3>
      </div>
    </section>
  );
};

export default BestSeller;

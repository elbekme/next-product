"use client";

import ProductCard from "@/components/card/ProductCard";
import ProductsRow from "@/components/shares/ProductsRow";
import request from "@/server";
import CategoryType from "@/types/category";
import ProductType from "@/types/product";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

const Products = () => {
  const router = useRouter();
  const search = useSearchParams();
  const [ssearch, setSearch] = useState('');
  const [products, setProducts] = useState([] as ProductType[]);
  const [itemsPerPage, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([] as CategoryType[]);
  const [category, setCategory] = useState(search.get("category") || "");
  const [currentPage, setCurrentPage] = useState(1);
  const pageTotal = 10 ;

  const getProducts = async () => {
    try {
      setLoading(true);
      const {
        data: { total, products },
      } = await request.get<{ total: number; products: ProductType[] }>(
        `product?page=${currentPage}&search=${ssearch}`,
        { params: { category: category || undefined } }
      );
      const { data } = await request.get("category");
      setCategories(data);

      setProducts(products);
      setTotal(total);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getProducts();
  }, [category,currentPage]);

  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setCategory(value);
    if (value === "") {
      router.push(`products`);
    } else {
      router.push(`products?category=${value}`);
    }
  };

  const handleInp = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    getProducts();
  }
  const totalPages = Math.ceil(itemsPerPage / pageTotal);

  return (
    <section>
      <h1 className="text-center my-3">Products {itemsPerPage}</h1>
      <div className="text-center">
        <input className="search mx-auto" type="text" placeholder="Searching..." onChange={handleInp}/>
      </div>
      <div className="text-center">
        <select className="text-center select" value={category} onChange={handleCategory}>
          <option value="">All</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
        </select>
      </div>
      <ProductsRow loading={loading} products={products} />

      {totalPages > 1 && (
        <div className="user__pagination">
          <button
            className="user__pagination-button"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>
          <span className="user__pagination-current">{currentPage}</span>
          <button
            className="user__pagination-button"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
};

export default Products;

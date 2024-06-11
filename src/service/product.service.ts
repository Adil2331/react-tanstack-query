import axios from "axios";
import { ICreateProduct, ProductsArray } from "../types/products.type";

class ProductService {
  private URL = "https://dummyjson.com/products";
  getData = async ({
    skip,
    selectValue,
  }: {
    skip: number;
    selectValue: string;
  }) => {
    return axios.get<ProductsArray>(
      `${this.URL}?limit=5&skip=${skip}&sortBy=${
        selectValue === "ascPrice" || selectValue === "descPrice"
          ? "price"
          : selectValue
      }&order=${
        selectValue === "ascPrice"
          ? "asc"
          : selectValue === "descPrice"
          ? "desc"
          : ""
      }`
    );
  };
  create = async (data: ICreateProduct) => {
    return axios.post(`${this.URL}/add`, data);
  };
}

export const productService = new ProductService();

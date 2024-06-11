import { useMutation } from "@tanstack/react-query";
import { ICreateProduct } from "../types/products.type";
import { productService } from "../service/product.service";

export function useCreateProduct(
  data: ICreateProduct,
  setCreateProducts: React.Dispatch<React.SetStateAction<ICreateProduct>>
) {
  const { mutate } = useMutation({
    mutationKey: ["addProduct", data],
    mutationFn: (data: ICreateProduct) => productService.create(data),
    onSuccess() {
      setCreateProducts({ title: "" });
      alert("Product created!");
    },
  });
  return { mutate };
}

import { useQuery } from "@tanstack/react-query";
import { productService } from "../service/product.service";

export function useProducts({
  skip,
  selectValue,
}: {
  skip: number;
  selectValue: string;
}) {
  const { data, isLoading, refetch, isSuccess } = useQuery({
    queryKey: ["Products", skip, selectValue],
    queryFn: () => productService.getData({ skip, selectValue }),
    select: (data) => data?.data,
  });

  return { data, isLoading, refetch, isSuccess };
}

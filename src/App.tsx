import "./App.css";
import { ICreateProduct, IProduct } from "./types/products.type";
import { SyntheticEvent, useEffect, useState } from "react";
import { useProducts } from "./hooks/useProducts";
import MyLoader from "./components/MyLoader";
import { useCreateProduct } from "./hooks/useCreateProduct";

function App() {
  const [skip, setSkip] = useState(0);
  const [selectValue, setSelectValue] = useState("");
  const [createProducts, setCreateProducts] = useState<ICreateProduct>({
    title: "",
  });

  const { refetch, isLoading, isSuccess, data } = useProducts({
    skip,
    selectValue,
  });

  const { mutate } = useCreateProduct(createProducts, setCreateProducts);

  const rightClick = () => {
    setSkip(skip >= 5 ? skip - 5 : 0);
  };

  const leftClick = () => {
    setSkip(skip + 5);
  };
  const submitHundler = (e: SyntheticEvent) => {
    e.preventDefault();

    mutate(createProducts);
  };

  useEffect(() => {
    refetch();
  }, [skip, isSuccess, refetch]);

  useEffect(() => {
    setSkip(0);
  }, [selectValue]);

  return (
    <>
      <div>
        <h2>DummyJSON</h2>
        <select
          className="input-box"
          value={selectValue}
          onChange={(e) => setSelectValue(e.target.value)}
        >
          <option value="">По умолчанию</option>
          <option value="title">По названию</option>
          <option value="ascPrice">Сначало дешевые</option>
          <option value="descPrice">Сначало дороже</option>
          <option value="rating">Высокий рейтинг</option>
        </select>
      </div>
      <div className="box-container">
        {isLoading ? (
          <div className="loader-container">
            <MyLoader />
          </div>
        ) : data?.products.length ? (
          data.products.map((products: IProduct) => (
            <div key={products.id}>
              <h4>{products.title}</h4>
              <p>{`Category: ${products.category}`}</p>
              <h5>{products.description}</h5>
              <p>{`Price: ${products.price}$`}</p>
              <p>{`Discount: ${products.discountPercentage}%`}</p>
              <p>{`Rating: ${products.rating}`}</p>
            </div>
          ))
        ) : (
          "Not Found"
        )}
      </div>
      <div
        style={{
          display: "flex",
          gap: 10,
          justifyContent: "center",
          marginTop: 100,
        }}
      >
        <button onClick={rightClick}>{"<"}</button>
        <button onClick={leftClick}>{">"}</button>
      </div>
      <div>
        <form onSubmit={submitHundler} className="form-container">
          <input
            className="input-box"
            type="text"
            onChange={(e) => {
              setCreateProducts((prev) => ({ ...prev, title: e.target.value }));
            }}
            placeholder="Enter name"
          />
          <button>Create</button>
        </form>
      </div>
    </>
  );
}

export default App;

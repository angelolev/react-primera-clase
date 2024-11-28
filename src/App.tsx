import { useContext } from "react";
import ProductCard from "./components/ProductCard";
import { API_URL } from "./utils";
import { ShoppingCartContext } from "./context";
import { useFetch } from "./hooks/useFetch";
import { IProduct } from "./types/product";

function App() {
  const URL = `${API_URL}/products?offset=0&limit=10`;
  const { data, loading, error } = useFetch<IProduct[]>(URL);

  const context = useContext(ShoppingCartContext);

  if (loading) return <p>Cargando...</p>;

  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div>Items en el carrito: {context.count}</div>
      <div>
        {data?.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </>
  );
}

export default App;

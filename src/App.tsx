import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import { IProduct } from "./types/product";
import { API_URL } from "./utils";

function App() {
  const [productsList, setProductsList] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response = await fetch(`${API_URL}/products?offset=0&limit=10`);

      if (!response.ok) {
        throw new Error("algo fallo");
      }

      const data = await response.json();

      setProductsList(data);
      setError(null);
    } catch (err) {
      console.log(err);
      setError(err.message);
      setProductsList([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <p>Cargando...</p>;

  if (error) return <p>Error: {error}</p>;

  return productsList.map((product) => (
    <ProductCard key={product.id} {...product} />
  ));
}

export default App;

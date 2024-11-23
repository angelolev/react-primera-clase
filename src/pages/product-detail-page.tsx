import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IProduct } from "../types/product";
import { API_URL } from "../utils";
import { ShoppingCartContext } from "../context";

export default function ProductDetailPage() {
  const { id } = useParams();

  const [product, setProduct] = useState<IProduct>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);

  const context = useContext(ShoppingCartContext);

  const fetchProduct = async () => {
    try {
      setLoading(true);

      const response = await fetch(`${API_URL}/products/${id}`);

      if (!response.ok) {
        throw new Error("algo fallo");
      }

      const data = await response.json();

      setProduct(data);
      setError(null);
    } catch (err) {
      console.log(err);
      setError(err.message);
      setProduct({});
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if (loading) return <p>Cargando...</p>;

  if (error) return <p>Error: {error}</p>;

  const handleClick = () => {
    context.setCount(context.count + 1);
  };

  return (
    <div>
      <button onClick={handleClick} className="underline text-blue-500">
        Agregar al carrito
      </button>
      <h1>{product.title}</h1>
      <p>Cantidad de elementos en el carrito: {context.count}</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
}

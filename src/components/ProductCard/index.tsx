import { IProduct } from "../../types/product";

function ProductCard({ images, title, price }: IProduct) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={images[0]} alt="Producto" className="rounded-xl max-w-80" />
      </div>
      <div className="product-info mt-2">
        <h3 className="font-bold">{title}</h3>
        <p className="font-semibold">${price}</p>
      </div>
    </div>
  );
}

export default ProductCard;

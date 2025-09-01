import "./ProductGrid.css";
import { GRID_IMAGES } from "../constants/productData";

const ProductGrid = () => {
  return (
    <div className="product-grid gap-2">
      <div className="grid-item item-1">
        <img src={GRID_IMAGES[0]} alt="Manuka honey jar with wooden spoon" />
      </div>

      <div className="grid-item item-2">
        <img src={GRID_IMAGES[1]} alt="Hand holding two Manuka honey jars" />
      </div>

      <div className="grid-item item-3">
        <img src={GRID_IMAGES[2]} alt="Man with glasses looking down" />
      </div>

      <div className="grid-item item-4">
        <img src={GRID_IMAGES[3]} alt="Pouring honey on food preparation" />
      </div>

      <div className="grid-item item-5">
        <img src={GRID_IMAGES[4]} alt="Single Manuka honey jar with lemon" />
      </div>

      <div className="grid-item item-6">
        <img src={GRID_IMAGES[5]} alt="Person holding Manuka honey jar" />
      </div>

      <div className="grid-item item-7">
        <img src={GRID_IMAGES[6]} alt="Natural honeycomb" />
      </div>
    </div>
  );
};

export default ProductGrid;

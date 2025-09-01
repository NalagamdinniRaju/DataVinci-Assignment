import ASSETS from "./assets";

export const PRODUCT_IMAGES = [
  ASSETS.manukaMain,
  ASSETS.manuka2,
  ASSETS.manuka3,
  ASSETS.manuka4,
  ASSETS.manuka5,
  ASSETS.manuka6,
  ASSETS.manuka7,
];

export const SIZE_OPTIONS = [
  { id: 0, size: "125g", price: 4.4, selected: true },
  { id: 1, size: "250g", price: 8.8 },
  { id: 2, size: "500g", price: 17.6 },
  { id: 3, size: "1kg", price: 35.2 },
];

export const BUNDLE_ITEMS = [
  { name: "UMF 20+", size: "250g", image: ASSETS.cart1 },
  { name: "UMF 24+", size: "250g", image: ASSETS.manukaMain },
  { name: "Wooden Spoon", size: "", image: ASSETS.spoon },
];

export const CERTIFICATION_LOGOS = [
  ASSETS.cert1,
  ASSETS.cert2,
  ASSETS.cert3,
  ASSETS.cert4,
  ASSETS.cert5,
  ASSETS.cert6,
];

export const GRID_IMAGES = [
  ASSETS.grid1,
  ASSETS.grid2,
  ASSETS.grid3,
  ASSETS.grid4,
  ASSETS.grid5,
  ASSETS.grid6,
  ASSETS.grid7,
];

export default {
  PRODUCT_IMAGES,
  SIZE_OPTIONS,
  BUNDLE_ITEMS,
  CERTIFICATION_LOGOS,
  GRID_IMAGES,
};

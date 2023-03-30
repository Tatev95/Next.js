import { useRouter } from "next/router";

function ProductDetail() {
  const router = useRouter();
  const productId = router.query.prodoctId;
  return <h1>Details about Product {productId}</h1>;
}

export default ProductDetail;

//Dynamic routes

//     /product/2,  /product/3,  /product/10000  eli es ejn kbace

// es chexav chitem
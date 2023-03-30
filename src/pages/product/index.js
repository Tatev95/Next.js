import Link from "next/link";

function ProductList({ProductId = 100}) {
  return (
    <>
      <Link href="/">Home</Link>
      <h2>
        <Link href='/product/1'>Product 1</Link>
      </h2>
      <h2>
        <Link href='/product/2'>Product 2</Link>
      </h2>
      <h2>
        <Link href='/product/3' >Product 3</Link>
      </h2>
      {/* <h2>
        <Link href={`/product/${productId}`}>Product 3</Link>
      </h2> */}
    </>
  );
}
export default ProductList;

// replace====replace current history state instead
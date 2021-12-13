
import Link from "next/link";

export default function ProductList({ productId = 100}) {
    return (
        <>
            <Link href="/"><a>Go to Home</a></Link>
            <h2><Link href="/products/1"><a>Product 1</a></Link></h2>
            <h2><Link href="/products/2"><a>Product 2</a></Link></h2>
            <h2><Link href="/products/3" replace><a>Product 3</a></Link></h2>  

            <h2><Link href={`/products/${productId}`}><a>Product 100</a></Link></h2>       
        </>
    )
}
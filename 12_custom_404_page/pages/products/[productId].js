
import { useRouter } from  "next/router";

export default function ProductDetails() {
    const router = useRouter(); // router => an object !
    // console.log("router = " , router);
    const productId = router.query.productId;
    return (
        <>
            <h1>Details about product</h1>
            <p>productId = {productId}</p>
        </>
    
    )
}
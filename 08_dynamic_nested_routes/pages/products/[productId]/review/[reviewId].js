
import { useRouter } from "next/router";

export default function ReviewDetails() {
    const router = useRouter(); // router => an object !
    console.log("router = ", router);
    const { productId, reviewId } = router.query;
    return (
        <>
            <h2>Review about product {productId}</h2>
            <p> This is the review {reviewId}</p>
        </>

    )
}
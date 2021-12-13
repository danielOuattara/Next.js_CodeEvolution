import Link from "next/link";
import { useRouter} from "next/router";

export default function Home() {

  const router = useRouter();

  const handleClick = () => {
    console.log("Place your Order");
    // router.push("/products");
    router.replace("/products");
  }
  return (
    <div>
      <h1>Home page</h1>
      <Link href="/blog"><a>Go to Blog</a></Link> <br />
      <Link href="/products"><a>Go to Product</a></Link>
      <button onClick={handleClick}> Place Order</button>
    </div>
  );
}

// page based routing
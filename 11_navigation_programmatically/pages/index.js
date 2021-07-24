import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <Link href="/blog"><a>Go to Blog</a></Link> <br />
      <Link href="/products"><a>Go to Product</a></Link>
    </div>
  );
}

// page based routing
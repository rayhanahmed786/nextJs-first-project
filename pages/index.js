import Link from "next/link";
import Layout from "../components/Layout";

const Index = () => (
<Layout>

    <h1>Home</h1>
    <Link href="/about">
       <a>Go to about</a>
       </Link>

     Welcome to the page</Layout>
);
export default Index;
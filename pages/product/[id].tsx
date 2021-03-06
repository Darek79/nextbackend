import Head from "next/head";
import {useRouter} from "next/router";

export default function Product1() {
  const router = useRouter();
  const {id} = router.query;
  return (
    <section>
      <Head>
        <title>Product1</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className="text-dark">{`Product / ${id}`}</p>
    </section>
  );
}

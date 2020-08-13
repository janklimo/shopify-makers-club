import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <section className={`${styles.hero} pt-32`}>
        <div className="pl-40">
          <h1 className="text-6xl font-bold text-gray-700 mb-6">Shopify Makers Club</h1>
          <p className="font-light text-2xl text-gray-600 mb-20 w-1/3">
            An exclusive community of professionals building and growing apps on the Shopify
            platform.
          </p>
          <a
            href="#"
            className="uppercase text-white bg-brand-light font-bold py-6 px-10 rounded-full hover:bg-brand-dark"
          >
            Join Now
          </a>
        </div>
      </section>
    </>
  );
}

import Head from "next/head";
import { useState, MouseEvent } from "react";
import { useTransition } from "react-spring";

import MembershipForm from "../components/MembershipForm";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const transitions = useTransition(isModalOpen, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <>
      <Head>
        <title>Shopify Makers Club</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <section className="py-24 px-4 bg-white md:hidden">
        <img src="/banner-mobile.svg" alt="Shipify Makers Club" className="w-full mb-8" />
        <h1 className="text-4xl font-bold text-gray-700 mb-6 text-center">Shopify Makers Club</h1>
        <p className="font-light text-xl text-center text-gray-600 mb-12">
          An exclusive community of professionals building and growing apps on the Shopify platform.
        </p>
        <div className="text-center">
          <a
            href="#"
            onClick={openModal}
            className="uppercase text-white bg-brand-light font-bold py-6 px-10 rounded-full hover:bg-brand-dark"
          >
            Join Now
          </a>
        </div>
      </section>
      <section className={`${styles.hero} pt-32 hidden md:block`}>
        <div className="pl-20 lg:pl-32 xl:pl-40">
          <h1 className="text-6xl font-bold text-gray-700 mb-6">Shopify Makers Club</h1>
          <p className="font-light text-2xl text-gray-600 mb-20 w-1/3">
            An exclusive community of professionals building and growing apps on the Shopify
            platform.
          </p>
          <a
            href="#"
            onClick={openModal}
            className="uppercase text-white bg-brand-light font-bold py-6 px-10 rounded-full hover:bg-brand-dark"
          >
            Join Now
          </a>
        </div>
      </section>
      {transitions.map(
        ({ item, key, props: style }) =>
          item && (
            <MembershipForm style={style} key={key} closeModal={() => setIsModalOpen(false)} />
          )
      )}
    </>
  );
}

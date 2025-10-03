import "@/styles/globals.css";
import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  let router = useRouter();

  return (
    <>
      <NextSeo
        title={"Tilk - Multi-Platform Developer"}
        description={"Tilk's personal portfolio - 17 year old multi-platform learning developer from Germany"}
        canonical={`https://tilk.tech${router.asPath.split("?")[0] === "/" ? "" : router.asPath.split("?")[0]}`}
        themeColor={"#111111"}
        openGraph={{
          url: `https://tilk.tech${router.asPath.split("?")[0] === "/" ? "" : router.asPath.split("?")[0]}`,
          title: "Tilk - Multi-Platform Developer",
          description: "Tilk's personal portfolio - 17 year old multi-platform learning developer from Germany",
          images: [
            {
              url: "/pfp.png",
              alt: "Tilk",
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

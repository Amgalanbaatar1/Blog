import { Footer } from "@/components/FooterItems/Footer";
import { Header } from "@/components/HeaderItems/Header";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function () {
  const [details, setDetails] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (router.query.Username && router.query.slug) {
      fetch(`https://dev.to/api/articles/${router.query.Username}/${router.query.slug}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setDetails(data);
        });
    }
  }, [router.query]);

  if (details === undefined) return null;

  return (
    <div className="container mx-auto border">
      <Head>
        <meta property="og:title " content="Луу жилийн СУУДЛЫН ЗАСАЛ ба ЗҮГ МӨР ГАРГАХ"></meta>
        <meta property="og:image " content="https://mgl.gogo.mn/newsn/thumbnail/1000/images/c/2024/01/314897-22012024-1705908601-1779861170-%D0%9B%D1%83%D1%83_%D0%B6%D0%B8%D0%BB.jpg"></meta>
        <meta property="og:description " content=" Цагаан сарын шинийн нэгний өглөө мөр гаргах зан үйл нь байгаль орчноо танин мэдэх, дасан зохицож, хайрлан амьдрах ухаан юм."></meta>
      </Head>
      <Header />
      <h1 className="text-3xl text-center font-extrabold p-5 ">{details.title}</h1>
      <div className="prose mx-auto " dangerouslySetInnerHTML={{ __html: details.body_html }}></div>
      <Footer />
    </div>
  );
}

import { Footer } from "@/components/FooterItems/Footer";
import { Header } from "@/components/HeaderItems/Header";
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
      <Header />
      <h1 className="text-3xl text-center font-extrabold p-5 ">{details.title}</h1>
      <div className="prose mx-auto " dangerouslySetInnerHTML={{ __html: details.body_html }}></div>
      <Footer />
    </div>
  );
}

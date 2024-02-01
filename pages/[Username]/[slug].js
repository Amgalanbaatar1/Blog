import { Footer } from "@/components/FooterItems/Footer";
import { Header } from "@/components/HeaderItems/Header";
import { Router } from "next/router";
import { useEffect, useState } from "react";

export default function () {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles/francescoxx/functions-in-rust-a-good-introduction-5a23")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDetails(data);
      });
  }, []);

  console.log(Router.query);

  if (details === undefined) return null;

  return (
    <div className="container mx-auto border">
      <Header />
      <div className="prose mx-auto " dangerouslySetInnerHTML={{ __html: details.body_html }}></div>
      <Footer />
    </div>
  );
}

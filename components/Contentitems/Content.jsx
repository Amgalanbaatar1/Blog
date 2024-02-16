import Link from "next/link";
import { useEffect, useState } from "react";

// import { clickBtn } from "./ClickBtn";
export function Content() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch(`https://dev.to/api/articles?username=j471n&per_page=1`)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log({ articles });

  return (
    <div className=" container mx-auto  border pb-36 xl:px-[250px] relative max-md:hidden">
      {articles.map((article) => (
        <BlogNews key={article.id} article={article} />
      ))}
    </div>
  );
}

export function BlogNews({ article }) {
  return (
    <a href={article.path}>
      <img src={article.cover_image} alt="Content image" style={{ borderRadius: 12 }} className="hover:border-[#1d4ed8] border-2 " />
      {/* <clickBtn /> */}
      <div className=" w-[30%] h-[45%] bg-[#fff] rounded-xl p-10 absolute top-[143px] left-[766.25px] max-2xl:hidden hover:border-[#1d4ed8] border-2 ">
        <div>
          <button className="bg-[#1d4ed8] rounded-md py-1 px-2.5 mb-4 text-black">{article.tag_list[0]}</button>
          <h1 className="text-4xl mb-6 font-medium">{article.title}</h1>
          <p className="text-[#97989F] font-normal mt-[-22px]">{article.readable_publish_date}</p>
        </div>
      </div>
    </a>
  );
}

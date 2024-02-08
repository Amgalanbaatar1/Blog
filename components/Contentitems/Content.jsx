import { useEffect, useState } from "react";

// import { clickBtn } from "./ClickBtn";
export function Content() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch(`https://dev.to/api/articles?username=francescoxx&per_page=1`)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);

  console.log(articles);

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
    <div>
      <img src={article.cover_image} alt="Content image" style={{ borderRadius: 12 }} />
      {/* <clickBtn /> */}
      <div className="border w-[30%] h-[35%] bg-[#fff] rounded-xl p-10 absolute top-[204px] left-[268.25px] max-2xl:hidden  ">
        <div>
          <button className="bg-[#1d4ed8] rounded-md py-1 px-2.5 mb-4 text-black">{article.tag_list[0]}</button>
          <h1 className="text-4xl mb-6 font-medium">{article.title}</h1>
          <p className="text-[#97989F] font-normal mt-[20px]">{article.readable_publish_date}</p>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";

export function TrendingTitle() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch(`https://dev.to/api/articles?username=ymc9&per_page=4`)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);

  console.log(articles);

  return (
    <div className=" container mx-auto  border 2xl:px-[250px]   ">
      <h1 className="text-2xl  not-italic font-bold p-8 ">Trending</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 container mx-auto   ">
        {articles.map((article) => (
          <TrendCards key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}

export function TrendCards({ article }) {
  return (
    <a href={article.path} className="relative mt-[30px] mx-auto mb-[100px]   ">
      <img src={article.cover_image} alt="Trending image" className="w-72 h-80 object-cover rounded-lg aspect-vidio hover:border-[#1d4ed8] border-2 " />
      <div className="absolute top-150 left-0 right-0 bottom-0 p-6 ">
        <span className="bg-[#1d4ed8] rounded-md py-1 px-2.5 mb-4 text-white ">{article.tag_list[0]}</span>
        <p className="text-black font-extrabold hover:bg-neutral-300 rounded   text-bold">{article.title}</p>
      </div>
    </a>
  );
}

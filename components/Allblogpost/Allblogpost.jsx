import { useEffect, useState } from "react";

export function AllBlogHeader() {
  const [articles, setArticles] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    fetch("https://dev.to/api/articles?username=francescoxx&per_page=9&page=1")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setArticles(data);
      });
  }, []);

  function SeeMore() {
    fetch(`https://dev.to/api/articles?username=francescoxx&per_page=9&page=${currentPage + 1}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setArticles([...articles, ...data]);
        setCurrentPage(currentPage + 1);
      });
  }

  return (
    <div className="container mx-auto border xl:px-[250px] mt-[100px] px-24">
      <h1 className="text-2xl font-bold mb-[32px]">All Blog Post</h1>
      <div className="flex list-none gap-4 font-serif text-[#495057] mb-[32px] ">
        <li className="text-[#D4A373]">All</li>
        <li>Design</li>
        <li>Travel</li>
        <li>Fashion</li>
        <li>Technology</li>
        <li>Branding</li>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {articles.map((article) => (
          <BlogCard key={article.id} article={article} />
        ))}
      </div>
      <button className="border flex mx-auto my-[35px] rounded-md p-2 text-gray-500 hover:bg-slate-300 hover:text-blue-600" onClick={SeeMore}>
        Load more
      </button>
    </div>
  );
}

export function BlogCard({ article }) {
  return (
    <a href={article.path} className="border p-5 rounded">
      <img src={article.cover_image} alt="CardIMage" className="rounded mb-[16px] aspect-video object-cover" />
      <div className="p-2">
        <span className="bg-[#1d4ed8] rounded-md py-1 px-2.5 mb-4 text-white inline-block">{article.tag_list[0]}</span>
        <div className="font-semibold text-2xl">{article.title}</div>
        <div className="text-[#97989F] font-normal text-base ">{article.readable_publish_date}</div>
      </div>
    </a>
  );
}

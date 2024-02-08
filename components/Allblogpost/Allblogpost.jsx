import { useEffect, useState } from "react";
import { FilterArticles } from "./FilterArticles";
import { BlogCard } from "./BlogCard";

export function AllBlogHeader({ size }) {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetch(`https://dev.to/api/articles?username=francescoxx&per_page=${size}&page=${currentPage + 1}`)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [currentPage]);

  function seeMore() {
    fetch(`https://dev.to/api/articles?username=francescoxx&per_page=${size}&page=${currentPage + 1}`)
      .then((response) => response.json())
      .then((data) => {
        setArticles([...articles, ...data]);
        setCurrentPage(currentPage + 1);
      });
  }

  return (
    <div className="container mx-auto border xl:px-[250px]  px-24">
      <h1 className="text-2xl font-bold mb-[32px]">All Blog Post</h1>
      <FilterArticles />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {articles.map((article) => (
          <BlogCard key={article.id} article={article} />
        ))}
      </div>
      <button className="border flex mx-auto my-[35px] rounded-md p-2 text-gray-500 hover:bg-slate-300 hover:text-blue-600 hover:border-[#1d4ed8]" onClick={seeMore}>
        Load more
      </button>
    </div>
  );
}

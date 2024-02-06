import { useEffect, useState } from "react";

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
      <div className="flex list-none gap-4 font-serif text-[#495057] mb-[32px] max-sm:hidden ">
        <li className="text-[#D4A373]">All</li>
        <li>Beginers</li>
        <li>Programm</li>
        <li>Webdev</li>
        <li>React</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {articles.map((article) => (
          <BlogCard key={article.id} article={article} />
        ))}
      </div>
      <button className="border flex mx-auto my-[35px] rounded-md p-2 text-gray-500 hover:bg-slate-300 hover:text-blue-600" onClick={seeMore}>
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
        <div className="flex gap-2 flex-wrap">
          {article.tag_list.map((tag) => (
            <span key={tag} className="bg-[#1d4ed8] gap-3 rounded-md py-1 px-2.5  text-white inline-block">
              {tag}
            </span>
          ))}
        </div>

        <div className="font-semibold text-2xl">{article.title}</div>
        <div className="text-[#97989F] font-normal text-base ">{article.readable_publish_date}</div>
      </div>
    </a>
  );
}

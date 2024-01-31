import { useEffect, useState } from "react";
import { resolve } from "styled-jsx/css";

// const articles = [
//   {
//     id: 1,
//     title: "The Impact of Technology on the Workplace: How Technology is Changing",
//     date: "August 20, 2022",
//     category: "Technology",
//     image: "https://images.unsplash.com/photo-1511300636408-a63a89df3482?",
//   },
//   {
//     id: 2,
//     title: "The Impact of Technology on the Workplace: How Technology is Changing",
//     date: "August 20, 2022",
//     category: "Technology",
//     image: "https://images.unsplash.com/photo-1511300636408-a63a89df3482?",
//   },
//   {
//     id: 3,
//     title: "The Impact of Technology on the Workplace: How Technology is Changing",
//     date: "August 20, 2022",
//     category: "Technology",
//     image: "https://images.unsplash.com/photo-1511300636408-a63a89df3482?",
//   },
//   {
//     id: 4,
//     title: "The Impact of Technology on the Workplace: How Technology is Changing",
//     date: "August 20, 2022",
//     category: "Technology",
//     image: "https://images.unsplash.com/photo-1511300636408-a63a89df3482?",
//   },
// ];

export function AllBlogHeader() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("https://dev.to/api/articles?username=francescoxx")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setArticles(data);
      });
  }, []);

  console.log({ articles });

  return (
    <div className="container mx-auto border xl:px-[250px] mt-[100px]">
      <h1 className="text-2xl font-bold mb-[32px]">All Blog Post</h1>
      <div className="flex list-none gap-4 font-serif text-[#495057] mb-[32px] ">
        <li className="text-[#D4A373]">All</li>
        <li>Design</li>
        <li>Travel</li>
        <li>Fashion</li>
        <li>Technology</li>
        <li>Branding</li>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {articles.map((article) => (
          <BlogCard key={article.id} article={article} />
        ))}
      </div>
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

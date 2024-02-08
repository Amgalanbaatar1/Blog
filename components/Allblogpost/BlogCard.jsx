export function BlogCard({ article }) {
  return (
    <a href={article.path} className="p-5 rounded hover:bg-[#F6F6F7] hover:border-[#1d4ed8] border-2 ">
      <img src={article.cover_image} alt="CardIMage" className="rounded mb-[16px] aspect-video object-cover " />
      <div className="p-2">
        <div className="flex gap-2 flex-wrap">
          <span className="bg-[#1d4ed8] gap-3 rounded-md py-1 px-2.5  text-white inline-block">{article.tag_list[0]}</span>
        </div>

        <div className="font-semibold text-2xl">{article.title}</div>
        <div className="text-[#97989F] font-normal text-base ">{article.readable_publish_date}</div>
      </div>
    </a>
  );
}

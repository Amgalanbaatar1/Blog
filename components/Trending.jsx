const articles = [
  {
    id: 1,
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    image: "https://images.unsplash.com/photo-1561816544-21ecbffa09a3",
    category: "Technology",
  },
  { id: 2, title: "The Impact of Technology on the Workplace: How Technology is Changing", image: "https://images.unsplash.com/photo-1561816544-21ecbffa09a3", category: "Technology" },
  { id: 3, title: "The Impact of Technology on the Workplace: How Technology is Changing", image: "https://images.unsplash.com/photo-1561816544-21ecbffa09a3", category: "Technology" },
  { id: 4, title: "The Impact of Technology on the Workplace: How Technology is Changing", image: "https://images.unsplash.com/photo-1561816544-21ecbffa09a3", category: "Technology" },
];

export function TrendingTitle() {
  return (
    <div className=" container mx-auto  border 2xl:px-[250px]    ">
      <h1 className="text-2xl  not-italic font-bold ">Trending</h1>
      <div className="flex gap-4 max-2xl:flex-wrap items-center justify-center ">
        {articles.map((article) => (
          <TrendCards key={articles.id} article={article} />
        ))}
      </div>
    </div>
  );
}

export function TrendCards({ article }) {
  return (
    <div className="relative mt-[30px]  ">
      <img src={article.image} alt="Trending image" className="w-72 h-80 object-cover rounded-lg " />
      <div className="absolute top-150 left-0 right-0 bottom-0 p-6 ">
        <span className="bg-[#1d4ed8] rounded-md py-1 px-2.5 mb-4 text-white inline-block">{article.category}</span>
        <p className="text-white  text-lg">{article.title}</p>
      </div>
    </div>
  );
}

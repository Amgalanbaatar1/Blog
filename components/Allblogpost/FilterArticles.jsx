import { useEffect, useState } from "react";

export function FilterArticles({ articleSet }) {
  const [category, setCategory] = useState();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`https://dev.to/api/articles?username=francescoxx&per`)
      .then((response) => response.json())
      .then((data) => {
        setCategory(data);
        setArticles(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [category]);

  const changeCategory = async (item) => {
    if (!item) {
      articleSet(articles);
      return;
    }

    const response = await fetch(`https://dev.to/api/articles?username=francescoxx&per&tag=${item}`);

    const dataJson = await response.json();
    articleSet(dataJson);
  };

  return (
    <div className="flex list-none gap-4 font-serif text-[#495057] mb-[32px] max-sm:hidden ">
      <button className="text-[#D4A373]" onClick={() => changeCategory()}>
        All
      </button>
      <button onClick={() => changeCategory("beginers")}>Beginers</button>
      <button onClick={() => changeCategory("Programm")}>Programm</button>
      <button onClick={() => changeCategory("Webdev")}>Webdev</button>
      <button onClick={() => changeCategory("React")}>React</button>
      <button onClick={() => changeCategory("JavaScript")}>JavaScript</button>
    </div>
  );
}

import { Header } from "@/components/HeaderItems/Header";
import { Content } from "@/components/Contentitems/Content";
import { TrendCards, TrendingTitle } from "@/components/Trending";
import { AllBlogHeader } from "@/components/Allblogpost/Allblogpost";

export default function Home() {
  return (
    <div>
      <Header />
      <Content />
      <TrendingTitle />
      <AllBlogHeader />
    </div>
  );
}

import { Header } from "@/components/HeaderItems/Header";
import { Content } from "@/components/Contentitems/Content";
import { TrendingTitle } from "@/components/Trending";
import { AllBlogHeader } from "@/components/Allblogpost/Allblogpost";
import { Footer } from "@/components/FooterItems/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Content />
      <TrendingTitle />
      <AllBlogHeader size={9} />
      <Footer />
    </div>
  );
}

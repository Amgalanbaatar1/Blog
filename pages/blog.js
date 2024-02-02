import { AllBlogHeader } from "@/components/Allblogpost/Allblogpost";
import { Footer } from "@/components/FooterItems/Footer";
import { Header } from "@/components/HeaderItems/Header";

export default function blog() {
  return (
    <div>
      <Header />
      <AllBlogHeader size={12} />
      <Footer />
    </div>
  );
}

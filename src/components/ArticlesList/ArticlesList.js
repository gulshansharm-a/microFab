// import Blogs_Heading from './BlogsComponents/Blogs_Heading'
import SingleBlog from "../Blogs/BlogsComponents/SingleBlog";
import Blogs_Heading from "../Blogs/BlogsComponents/Blogs_Heading";
import BlogsCardScroll from "../Blogs/BlogsComponents/BlogsCardScroll";
import Footer from "../Common/Footer/Footer";

export default function Blogs() {
  return (
    <div className="font-['ClashDisplay'] flex flex-col md:mt-[80px] mt-[40px]">
      <Blogs_Heading />
      <Footer />
    </div>
  );
}

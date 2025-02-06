import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";
import Image from "next/image";
import { FaPencilAlt } from "react-icons/fa";
import RightBlog from "../rightBlog/rightBlog";
import Breadcrumb from "../../BreadCrumb";

const blogPostData = [
  {
    id: 1,
    Image: "/bp1.png",
    title: "Mauris at orci non vulputate diam tincidunt nec.",
    href: "/singlepost",
    des: "this is a test blog post for testing lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    footer: "Read More ",
  },
  {
    id: 2,
    Image: "/bp2.png",
    title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
    des: "this is a test blog post for testing lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    footer: "Read More ",
  },
  {
    id: 3,
    Image: "/bp3.png",
    title: "Sit nam congue feugiat nisl, mauris amet nisi. ",
    des: "this is a test blog post for testing lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    footer: "Read More ",
  },
];

const BlogPage = () => {
  return (
    <>
      <Breadcrumb
        mainHeading="Blog Page"
        miniHeadings={["Home", "pages", "Blog Page"]}
      />

      <div className="lg:flex mt-11">
        <div className="max-w-[1200px] mx-auto w-[60%]">
          <div>
            {blogPostData.map((item, index) => {
              return (
                <div key={index}>
                  <div>
                    <div>
                      <Image
                        height={300}
                        width={500}
                        src={item.Image} // Use `item.Image` instead of `item.i`
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-6 mt-7">
                      {/* Red Pencil Icon with Text */}
                      <div className="flex items-center gap-2">
                        {/* Pencil Icon */}
                        <div className="w-6 h-6 flex items-center justify-center bg-none text-red-500">
                          <FaPencilAlt size={24} />
                        </div>
                        {/* Text */}
                        <h6 className="bg-red-200 px-6 rounded-sm text-black font-medium">
                          Surf Auxion
                        </h6>
                      </div>

                      {/* Yellow Calendar Icon with Text */}
                      <div className="flex items-center gap-2">
                        {/* Calendar Icon */}
                        <div className="w-6 h-6 flex items-center justify-center bg-none text-yellow-500">
                          <FaRegCalendarAlt size={24} />
                        </div>
                        {/* Text */}
                        <h6 className="bg-yellow-200 px-6 rounded-sm text-black font-medium">
                          Aug 09 2020
                        </h6>
                      </div>
                    </div>

                    <div className="mt-11">
                      <a
                        className="font-semibold text-[#151875] dark:text-white font-josefin text-[30px]"
                        href={item.href || "#"} // Handle optional `href`
                      >
                        {item.title}
                      </a>
                      <p className="text-gray-500 lg:w-[78%] mt-5">{item.des}</p>
                      <div className="flex items-center gap-2">
                        <h6 className="font-semibold text-[#151875] dark:text-[#494fff] mt-7 mb-6">
                          <Link href={`/singleblog/${item.id}`}>
                            {item.footer}
                          </Link>
                        </h6>
                        <span className="h-2 w-2 rounded-full bg-[#920f0f]"></span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-center py-5 lg:ml-72">
            <h4 className="bg-pink-600 px-3 rounded-sm text-black font-lato">1</h4>
            <h4 className="border-2 px-3 rounded-sm text-black font-lato mx-10">
              2
            </h4>
            <h4 className="border-2 px-3 rounded-sm text-black font-lato">3</h4>
            <h4 className="border-2 px-3 rounded-sm text-black font-lato mx-10">
              4
            </h4>
          </div>
        </div>
        <div>
          <RightBlog />
        </div>
      </div>
    </>
  );
};

export default BlogPage;
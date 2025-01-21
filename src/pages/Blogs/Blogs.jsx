import React from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Blogs = () => {
  const axiosPublic = useAxiosPublic();
  const { data: blogs = [] } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allBlogs");
      return res.data;
    },
  });
  return (
    <div>
      <h1 className=" animate__animated animate__fadeInLeft text-3xl md:text-4xl text-center lg:text-5xl font-bold my-4">
        Career Growth Blogs
      </h1>
      <p className="text-lg text-center">
        Discover key strategies and tips to accelerate your career development.
      </p>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <div key={blog._id} className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={blog.picture} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{blog.title}</h2>
              <p>Public Date {blog.publishDate}</p>
              <p>{blog.description}</p>
              <div className="card-actions">
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;

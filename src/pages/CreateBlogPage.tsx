import React from "react";
import Header from "../components/Header";
import { useForm } from "react-hook-form";

const CreateBlogPage = () => {
  const { handleSubmit, register, reset } = useForm();

  const onSubmit = (values) => {
    if (localStorage) {
      const data = localStorage.getItem("blogs");

      // change to obj

      const oldBlogs = JSON.parse(data);
      if (oldBlogs === null) {
        localStorage.setItem("blogs", JSON.stringify([values]));
      } else {
        localStorage.setItem("blogs", JSON.stringify([...oldBlogs, values]));
      }
    }
    reset();
  };
  return (
    <div>
      <Header />
      <div className="bg-gray-300 p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-[50%] mx-auto grid gap-6 mb-6 md:grid-cols-1">
            <div>
              <label className="block text-black mb-2.5 text-sm font-medium text-heading">
                Blog Title
              </label>
              <input
                {...register("title")}
                type="text"
                id="title"
                name="title"
                className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                placeholder="John"
                required
              />
            </div>

            <div>
              <label className="block text-black mb-2.5 text-sm font-medium text-heading">
                Blog Description
              </label>
              <textarea
                {...register("description")}
                id="description"
                name="description"
                className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                placeholder="....."
                required
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-600 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlogPage;

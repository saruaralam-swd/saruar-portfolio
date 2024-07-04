import React from "react";
import { useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ProjectDetails = () => {
  const project = useLoaderData();
  const { title, des, features, github, images, live, techs } = project;
  console.log(images);

  return (
    <div className="py-10 p-5 bg-slate-100 rounded-md">
      <h2 className="text-4xl font-semibold text-indigo-500 mb-2">{title}</h2>
      <div className="my-2">
        <a
          href={live}
          target="_blank"
          className="text-xl font-semibold underline mr-2 hover:text-indigo-700 duration-100"
          rel="noreferrer"
        >
          Live Preview
        </a>
        |
        <a
          href={github}
          target="_blank"
          className="text-xl font-semibold underline ml-2 hover:text-indigo-700 duration-100"
          rel="noreferrer"
        >
          Github
        </a>
      </div>
      <p className="mb-2">{des}</p>
      <p className="font-semibold mb-2">Features</p>
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
      <p className="my-2">
        <span className="font-semibold">Technology: </span> {techs}
      </p>

      <div className="divider"></div>
      <p className="font-semibold text-center">Some Images</p>
      <div className="md:px-10">
        {images.map((img, index) => (
          <div key={index} className="mt-5 border border-indigo-500 rounded-md">
            <h2 className=" bg-slate-500 text-white w-[70px] h-[20px] m-2 flex justify-center items-center rounded-xl">
              img {index + 1}
            </h2>
            <PhotoProvider>
              <PhotoView src={`${img}`}>
                <img
                  src={`${img}`}
                  className="rounded-md cursor-pointer"
                  alt={`${img}`}
                />
              </PhotoView>
            </PhotoProvider>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;

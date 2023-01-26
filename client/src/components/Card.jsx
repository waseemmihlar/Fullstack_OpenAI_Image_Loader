import React from "react";
import { downloadImage } from "../utils";
import { download } from "../assets";

const Card = ({ _id, prompt, image, name }) => {
  return (
    <div className="rounded-xl group card relative shadow-card hover:shadow-cardhover card ">
      <img
        className="w-full h-auto rounded-xl object-cover"
        src={image}
        alt={prompt}
      />
      <div className="group-hover:flex flex-col rounded-md bg-[#5c5c5c] absolute bottom-0 left-0 right-0 p-4 m-2 hidden max-h-[96%]">
        <p className="text-white overflow-y-auto text-sm">{prompt}</p>
        <div className="flex justify-between gap-2 mt-5">
          <div className="flex items-center gap-2">
            <div
              className="bg-green-700 text-white text-xs rounded-full 
            flex justify-center items-center w-7 h-7"
            >
              {name[0]}
            </div>
            <p className="text-sm text-white">{name}</p>
          </div>
          <button
            type="button"
            className="outline-none border-none bg-transparent"
            onClick={() => {
              downloadImage(_id, image);
            }}
          >
            <img
              src={download}
              alt="download"
              className="h-6 w-6 invert object-contain"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

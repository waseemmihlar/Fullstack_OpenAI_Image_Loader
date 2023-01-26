import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { preview } from "../assets";
import { getrandomPrompt } from "../utils";
import { FormField, Loader } from "../components";

const CreatePost = () => {
  const navigete = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    image: "",
  });

  const [generateImages, setGenerateImages] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.prompt && form.image) {
      try {
        setLoading(true);
        const response = await fetch(
          "https://ai-image-server.onrender.com/api/v1/post",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          }
        );

        await response.json();
        navigete("/");
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    } else {
      alert(
        "Please enter a prompt and generate an Image and share Image with others"
      );
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSurpriseMe = () => {
    const supriseText = getrandomPrompt(form.promt);
    setForm({ ...form, prompt: supriseText });
  };

  const handleGenerateImg = async () => {
    if (form.prompt) {
      try {
        setGenerateImages(true);
        const response = await fetch("http://localhost:5000/api/v1/dalle", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: form.prompt }),
        });

        const data = await response.json();

        setForm({ ...form, image: `data:image/jpeg;base64,${data.image}` });
      } catch (error) {
        alert("error");
      } finally {
        setGenerateImages(false);
      }
    } else {
      alert("please enter a promt");
    }
  };

  return (
    <section className="max-w-6xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[32px] text-[#222328]">Create</h1>
        <p className="max-w-[500px] text-[16px] mt-2 text-[#666e75]">
          Create imaginative and visually stunning images through Image Ai and
          share them with the comunity
        </p>
      </div>
      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your name"
            name="name"
            type="text"
            value={form.name}
            handleChange={handleChange}
            placeholder="Jack sparrow"
          />
          <FormField
            labelName="Prompts"
            name="prompt"
            type="text"
            value={form.prompt}
            handleChange={handleChange}
            isSupriseMe
            placeholder="a painting of a fox in the style of Starry Night"
            handleSurpriseMe={handleSurpriseMe}
          />

          <div
            className="relative bg-gray-50 border border-gray-300 h-64 w-64 p-2.5
          text-gray-900 rounded-lg focus:border-blue-500 focus:ring-blue-300 flex justify-center items-center"
          >
            {form.image ? (
              <img
                src={form.image}
                alt={form.prompt}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={preview}
                alt="Preview"
                className="w-9/12 h-9/12 object-contain opacity-40"
              />
            )}

            {generateImages && (
              <div
                className="absolute z-0 flex justify-center items-center
              bg-[rgba(0,0,0,0.3)] inset-0 rounded-lg"
              >
                <Loader />
              </div>
            )}
          </div>
        </div>
        <div className="mt-5 flex gap-5">
          <button
            type="button"
            onClick={handleGenerateImg}
            className="py-2.5 px-5 w-full  bg-green-700 text-white font-medium
       rounded-md text-sm text-center sm:w-auto"
          >
            {generateImages ? "Generating..." : "generate"}
          </button>
        </div>
        <div className="mt-10">
          <p className="text-[#666e75] text-[14px] ">
            Once you have created the image you want, you can share it with
            others in the comunity
          </p>
          <button
            type="submit"
            className="mt-3 py-2.5 px-5 w-full  bg-blue-600 text-white font-medium
          rounded-md text-sm text-center sm:w-auto"
          >
            {loading ? "Sharing..." : "Share with Community"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;

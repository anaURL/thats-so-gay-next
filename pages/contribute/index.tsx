import React, { useState } from "react";

export default function AddMicroagression() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (title && content) {
      try {
        let response = await fetch(
          "/api/addMicroagression",
          {
            method: "POST",
            body: JSON.stringify({
              title,
              content,
            }),
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
            },
          }
        );
        response = await response.json();
        setTitle("");
        setContent("");
        setError("");
        setMessage("Microagression added successfully");
      } catch (errorMessage: any) {
        setError(error.toString());
      }
    } else {
      return setError("All fields are required");
    }
  };

  return (
    <>
      {/* <div className="min-h-screen">
  <div className="flex flex-col items-center justify-center h-screen">
    <form onSubmit={handleSubmit} className="w-full max-w-md p-6 bg-gray-100 rounded-lg shadow-xl">
      {error ? <div className="alert-error">{error}</div> : null}
      {message ? <div className="alert-message">{message}</div> : null}
      <div className="form-group">
        <label className="block font-medium text-gray-700">Title</label>
        <input
          type="text"
          placeholder="Title of the Microagression"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="w-full px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-lime focus:border-lime sm:text-sm"
        />
      </div>
      <div className="form-group">
        <label className="block font-medium text-gray-700">Content</label>
        <textarea
          name="content"
          placeholder="Content of the microagression"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-3 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-lime focus:border-lime sm:text-sm"
          rows={8}
        />
      </div>
      <div className="form-group">
        <button type="submit" className="w-full px-4 py-2 text-lg font-medium text-white bg-lime rounded-lg">
          Add new microaggression
        </button>
      </div>
    </form>
  </div>
</div> */}
 <div className="text-center md:px-12 my-6 min-h-screen ">
      <h1 className="md:mt-2 lg:text-7xl md:text-7xl text-4xl font-black sm:leading-8 md:tracking-tight md:px-8 text-lime"> Add your microaggression</h1>
      <h3 className="text-2xl py-5 font-light md:mt-8 text-white text-center" >  Microaggressions are the everyday slights, insults, put-downs, and invalidations that queer communities experience in their day-to-day interactions. Microaggressions take many forms. We want to make sure every experience is heard. If you have one to share, feel free to add a new microaggression entry.",
 </h3>

      <div className="flex justify-center bg-purple py-20">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-4xl p-8 mx-8 bg-white rounded-lg shadow-xl"
        >
          {error ? <div className="text-red-500">{error}</div> : null}
          {message ? <div className="text-green-500">{message}</div> : null}
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block text-gray-700 font-bold mb-2"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="Title of the Microaggression"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-lime-500 focus:border-lime-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="content"
              className="block text-gray-700 font-bold mb-2"
            >
              Content 
            </label>
            <textarea
              id="content"
              name="content"
              placeholder="Content of the microaggression"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-lime-500 focus:border-lime-500"
              rows={6}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-purple text-white font-bold rounded-lg hover:bg-lime-500 focus:outline-none focus:ring focus:ring-lime-500 focus:ring-offset-2"
            >
              Add new microaggression
            </button>
          </div>
        </form>
      </div>
      </div>  
    </>
  );
}

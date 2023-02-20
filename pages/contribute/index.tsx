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
          let response = await fetch("thats-so-gay-next-kd9tnm32c-anaurl.vercel.app/api/addMicroagression", {
            method: "POST",
            body: JSON.stringify({
              title,
              content,
            }),
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
            },
          });
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
          <form onSubmit={handleSubmit} className="form">
            {error ? <div className="alert-error">{error}</div> : null}
            {message ? <div className="alert-message">{message}</div> : null}
            <div className="form-group">
              <label>Title</label>
              <input
                type= "text"
                placeholder= "Title of the Microagression"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            <div className="form-group">
              <label>Content</label>
              <textarea
                name= "content"
                placeholder= "Content of the microagression"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                cols={20}
                rows={8}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="rounded border-2 p-2 text-lime">
                Add new microagression
              </button>
            </div>
          </form>
        </>
      );
  }
import React, { useState, useEffect } from "react";

export default function Shop() {
  const [foxImage, setFoxImage] = useState("");
  const changeFox = () => {
    fetch("https://randomfox.ca/floof")
      .then((response) => response.json())
      .then((data) => {
        setFoxImage(data.image);
      });
  };

  useEffect(() => {
    changeFox();
  }, []);

  return (
    <>
      <h1>Fox Image</h1>
      <img className="w-[-350] h-[-200]" src={foxImage} />
      <button onClick={changeFox} className="bg-slate-800 text-white p-3 mt-3">
        next fox
      </button>
    </>
  );
}

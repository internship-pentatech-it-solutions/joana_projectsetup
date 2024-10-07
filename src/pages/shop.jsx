import React from "react";
import shoe from "../assets/shoe.jpg";

export default function Shop() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center p-7">AVAILABLE ITEMS</h1>
      <div className="flex flex-row gap-14 justify-center">
        <article className="border rounded-2xl w-fit ">
          <img className=" rounded-xl p-8" src={shoe} />
          <div className="text-center">
            <p>item description</p>
            <p>price</p>
          </div>
        </article>

        <article className="border rounded-2xl w-fit ">
          <img className=" rounded-xl p-8" src={shoe} />
          <div className="text-center">
            <p>item description</p>
            <p>price</p>
          </div>
        </article>

        <article className="border rounded-2xl w-fit ">
          <img className=" rounded-xl p-8" src={shoe} />
          <div className="text-center">
            <p>item description</p>
            <p>price</p>
          </div>
        </article>
      </div>
    </div>
  );
}

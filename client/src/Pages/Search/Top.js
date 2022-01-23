import React, { useState } from "react";
import { Drawer } from "@material-ui/core";
import Filters from "../Search/Filters";
import { AiOutlineClose } from "react-icons/ai";

function Top() {
  const [filt, setFilt] = useState(false);

  return (
    <>
      <div className="topmob">300 Results for "Web Development"</div>
      <div className="top1">
        <h1>300 Results for "Web Development"</h1>
        <button onClick={() => setFilt((s) => !s)} className="filtmob">
          Filters
        </button>
        <select>
          <option value="sort" hidden>
            Sort By
          </option>
          <option value="price">Price</option>
          <option value="ratings">Ratings</option>
          <option value="time">What's New</option>
        </select>

        <Drawer
          anchor="right"
          open={filt}
          onClose={() => {
            setFilt(false);
          }}
        >
          <Filters />
        </Drawer>
      </div>
    </>
  );
}

export default Top;

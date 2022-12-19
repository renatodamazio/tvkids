import React, { useState } from "react";
import Image from "../Images/index.tsx";
import Input from "../Input/index.tsx";
import debounce from "lodash.debounce";

function SearchResults({ setPage, setVideoId }) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const getYTResults = debounce(async (value) => {
    setResults([]);
    setLoading(true);

    await fetch(`http://localhost:3001?q=${value}`)
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
        setResults(resp);
      })
      .finally(() => setLoading(false));
  }, 350);

  const playVideo = (id) => {
    setVideoId(id);
    setPage(1);
  };

  return (
    <div className="d-flex flex-col w-full">
      <Input onInput={getYTResults} />
      <ul className="w-full rounded-md border-gray-100 overflow-hidden">
        {results?.map((result) => {
          return (
            <li
              onClick={() => playVideo(result.id)}
              key={result.id}
              className="p-4 border w-full text-md cursor-pointer flex items-center hover:bg-pink-300 transition-colors duration-500 hover:text-white"
            >
              <Image
                src={`https://i.ytimg.com/vi/${result.id}/hqdefault.jpg`}
                size="w-20 h-20 min-w-20 min-h-20"
                className="rounded-full border-2"
              />{" "}
              &nbsp;&nbsp; {result.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SearchResults;

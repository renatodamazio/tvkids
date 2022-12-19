import React, { useState } from "react";
import "./index.css";
import SearchResults from "./components/searchResults/index.tsx";
import Video from "./components/Video/Index.tsx";
import ToolBar from "./components/toolbar";
import Historic from "./components/historic";

function App() {
  const [page, setPage] = useState(0);
  const [videoId, setVideoId] = useState(null);

  const pageClass = `absolute w-full left-0 flex`;
  return (
    <div className="container mx-auto border-2 h-full max-w-lg flex flex-col rounded-md bg-white">

      <div className="h-full w-full overflow-auto relative">
        <div className={`${pageClass} ${page === 0 ? "block" : "hidden"}`}>
          <SearchResults setVideoId={setVideoId} setPage={setPage}/>
        </div>
        <div className={`${pageClass} ${page === 1 ? "block" : "hidden"}`}>
          <Video videoId={videoId} />
        </div>
        <div className={`${pageClass} ${page === 2 ? "block" : "hidden"}`}>
          <Historic />
        </div>
      </div>
      <ToolBar setPage={setPage} page={page}/>
    </div>
  );
}

export default App;

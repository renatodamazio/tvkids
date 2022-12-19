import React, { useRef, useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import {
  AiFillPlayCircle,
  AiOutlinePauseCircle,
  AiFillCaretLeft,
  AiFillCaretRight,
} from "react-icons/ai";

import { ImLoop2 } from "react-icons/im";

function Video({ videoId }) {
  const defaultButtonClass = `p-4 rounded-md font-bold m-4 active:bg-slate-500 text-2xl text-white`;
  const [indexKey, setIndexKey] = useState(0);
  const player = useRef(null);
  const [status, setStatus] = useState(1);
  const [loop, setLoop] = useState(false);

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    player.current = event;
    event.target.playVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "380",
    width: "100%",
    playerVars: {
      autoplay: 1,
      controls: 0,
    },
  };

  const endVideo = () => {
    if (loop) {
      setIndexKey((prev) => (prev += 1));
    }
  };

  const playVideo = () => {
    if (status !== 1) {
      player.current.target.playVideo();
    } else {
      player.current.target.pauseVideo();
    }
    
  };

  return (
    <div className="p-4 w-full">
      <div className="relative border-2">
        <div className="absolute top-0 left-0 flex items-center justify-center bg-black bg-opacity-30 bg-transparent w-full h-full">
          <button
            onClick={() => setLoop((prev) => !prev)}
            className={`${defaultButtonClass}`}
          >
            <ImLoop2 className={`text-6xl ${loop ? 'text-pink-500' : "text-white"}`} />
          </button>

          <button className={`${defaultButtonClass}`}>
            <AiFillCaretLeft className="text-6xl" />
          </button>

          <button
            onClick={() => playVideo()}
            className={`${defaultButtonClass}`}
          >
            {status !== 1 ? (
              <AiFillPlayCircle className="text-6xl" />
            ) : (
              <AiOutlinePauseCircle className="text-6xl" />
            )}
          </button>

          <button className={`${defaultButtonClass}`}>
            <AiFillCaretRight className="text-6xl" />
          </button>
        </div>
        <YouTube
          key={indexKey}
          videoId={videoId}
          className="flex flex-col"
          opts={opts}
          onReady={onPlayerReady}
          onEnd={endVideo}
          onStateChange={(e) => setStatus(e.data)}
        />
      </div>
    </div>
  );
}

export default Video;

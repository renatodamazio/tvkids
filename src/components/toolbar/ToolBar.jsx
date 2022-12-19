import React, {useEffect, useState} from "react";

function ToolBar({ setPage, page }) {
  const buttonStyle = `p-5 bg-gray-50 w-full cursor-pointer hover:bg-pink-500 transition-all duration-500 font-bold hover:text-white`;
  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive(page)
  }, [page])

  const items = [
    {
      title: "Pesquisar",
    },
    {
      title: "Video",
    },
    {
      title: "Histórico",
    },
  ];

  const setMenu = (index) => {
    setActive(index);
    setPage(index)
  }

  return (
    <div className="h-20 flex">
      {items.map((button, index) => {
        return (
          <button key={index} onClick={() => setMenu(index)} className={`${buttonStyle} ${active === index ? "bg-pink-500 text-white" : ""}`}>
            {button.title}
          </button>
        );
      })}
    </div>
  );
}

export default ToolBar;

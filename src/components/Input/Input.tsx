import React from "react";

function Input({ onInput }) {
  return (
    <div>
      <input
        type="search"
        name="search"
        onInput={(e) => onInput(e.target.value)}
        className="w-full h-8 border-2 border-pink-500 p-8 rounded-lg focus:border-pink-100 transition-colors duration-700"
        placeholder="Procurar por um vídeo"
      />
    </div>
  );
}

export default Input;

import React from "react";

export default function Header(): JSX.Element {
  return (
    <header className="grid h-[10vh] items-center bg-black">
      <div className="mx-auto w-11/12">
        <p className="text-3xl font-extrabold text-white lg:text-5xl">Movies</p>
      </div>
    </header>
  );
}

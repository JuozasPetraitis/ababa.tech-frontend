import React from "react";

export default function Footer() {
  return (
    <footer className="3xl:text-lg flex h-[5vh] cursor-default items-center justify-center bg-black text-xs font-medium uppercase text-white">
      <p>Copyright ©{new Date().getFullYear()} All rights reserved.</p>
    </footer>
  );
}

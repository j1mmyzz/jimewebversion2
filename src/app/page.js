import React from "react";
import "./typewriterStyle/typing.css";
import { Social } from "./components/socials";
export default function Home() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-fit flex flex-col items-left px-4 md:px-[18vw]">
        <span className="font-bold text-[40px]  md:text-8xl text-white ml-6">
          Hi! I'm Jimmy.
        </span>

        <p className="text-white text-left text-xl pl-6 md:text-4xl">
          I'm an aspiring SWE @ BTHS, interested in Web Dev and Competitive
          Programming!{" "}
        </p>
        <br />

        <Social />
      </div>
    </div>
  );
}

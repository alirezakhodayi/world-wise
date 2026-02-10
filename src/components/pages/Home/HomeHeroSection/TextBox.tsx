import { GradientTitle } from "@/components/template/ui";

function TextBox() {
  return (
    <>
      <GradientTitle>
        You travel the world.
        <br />
        WorldWise keeps track of your adventures.
      </GradientTitle>
      <h2 className="text-lg md:text-xl lg:text-2xl text-zinc-300 max-w-5xl">
        A world map that tracks your footsteps into every city you can think of.
        Never forget your wonderful experiences, and show your friends how you
        have wandered the world.
      </h2>
    </>
  );
}

export { TextBox };

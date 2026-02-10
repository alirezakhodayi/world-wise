import { Navbar } from "@/components/template/layout/Navbar";
import { GradientTitle } from "@/components/template/ui";

export default function ProductPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto w-full min-h-[calc(100vh-8rem)] mt-6">
        <section className="px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
          <img
            className="w-full rounded-lg shadow-2xl"
            src="img-1.jpg"
            alt="person with dog overlooking mountain with sunset"
          />
          <div>
            <GradientTitle>About WorldWide.</GradientTitle>
            <p className="text-lg md:text-xl lg:text-2xl text-zinc-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
              dicta illum vero culpa cum quaerat architecto sapiente eius non
              soluta, molestiae nihil laborum, placeat debitis, laboriosam at
              fuga perspiciatis?
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-zinc-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              doloribus libero sunt expedita ratione iusto, magni, id sapiente
              sequi officiis et.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

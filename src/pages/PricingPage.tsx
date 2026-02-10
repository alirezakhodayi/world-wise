// Uses the same styles as Product

import { Navbar } from "@/components/template/layout/Navbar";
import { GradientTitle } from "@/components/template/ui";

export default function Product() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto w-full">
        <section className="px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
          <div>
            <GradientTitle>
              Simple pricing.
              <br />
              Just $9/month.
            </GradientTitle>
            <p className="text-lg md:text-xl lg:text-2xl text-zinc-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              vel labore mollitia iusto. Recusandae quos provident, laboriosam
              fugit voluptatem iste.
            </p>
          </div>
          <img
            className="max-h-[80%] rounded-lg shadow-2xl"
            src="img-2.jpg"
            alt="overview of a large city with skyscrapers"
          />
        </section>
      </main>
    </>
  );
}

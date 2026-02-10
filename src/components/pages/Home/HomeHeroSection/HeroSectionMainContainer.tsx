interface IProps {
  children: React.ReactNode;
}

function HeroSectionMainContainer({ children }: IProps) {
  return (
    <main className="w-full hero-section-background bg-cover bg-center min-h-[90vh] py-18 px-20">
      <section className=" flex flex-col container mx-auto h-[85%] items-center justify-center gap-4 text-center">
        {children}
      </section>
    </main>
  );
}

export { HeroSectionMainContainer };

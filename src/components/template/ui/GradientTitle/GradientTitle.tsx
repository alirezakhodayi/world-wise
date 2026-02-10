interface IProps {
  children: React.ReactNode;
}
function GradientTitle({ children }: IProps) {
  return (
    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl bg-linear-to-br from-amber-400 to-primary bg-clip-text font-bold text-transparent my-4">
      {children}
    </h1>
  );
}

export { GradientTitle };

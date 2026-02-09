interface IProps {
  children: React.ReactNode;
}

function NavbarContainer({ children }: IProps) {
  return (
    <header className="border-b border-primary border-opacity-30 bg-base-300 shadow-lg w-full">
      <div className="container mx-auto w-full flex items-center justify-between">
        {children}
      </div>
    </header>
  );
}

export { NavbarContainer };

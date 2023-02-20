import Navbar from "../Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen relative bg-slate-900 text-white">
      <Navbar />
      <main className="flex-1 flex flex-col p-4">{children}</main>
    </div>
  );
}
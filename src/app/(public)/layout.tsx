export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mt-[50px] md:mt-[100px] bg-white">{children}</main>
  );
}

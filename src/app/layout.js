import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Jin Francis Cabia Portfolio",
  description: "Portfolio showcasing Jin Francis Cabia's Projects and his Contact Information",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased
        bg-[#3C3D37] flex font-sans 

        
        `}
      >
        <main className="flex-1 p-5  min-h-screen sm:ml-0 lg:ml-44">{children}</main>
      </body>
    </html>
  );
}

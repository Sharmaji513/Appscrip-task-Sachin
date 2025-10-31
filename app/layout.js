import "./globals.css";
import Footer from "./components/Footer";
import Logo from "../public/Logo-1.png";
import Search from "../public/search-normal.png";
import Heart from "../public/heart.png";
import Arrow from "../public/arrow-left.png";
import ShoppingBag from "../public/shopping-bag.png";
import Image from "next/image";

export const metadata = {
  title: "Discover Our Products - Appscrip PLP",
  description: "Product listing page matching provided design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="top-bar">
          <div className="inner">
            <div>⚑ Lorem ipsum dolor</div>
            <div>⚑ Lorem ipsum dolor</div>
            <div>⚑ Lorem ipsum dolor</div>
          </div>
        </div>

        <header className="header">
          <div className="inner container">
            <div className="logo">
              <Image src={Logo} alt="Logo" />
            </div>

            <div className="logo">LOGO</div>

            <div className="header-right">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginLeft: 8,
                }}
              >
                <Image src={Search} alt="Search" />

                <Image src={ShoppingBag} alt="Logo" />

                <Image src={Heart} alt="Logo" />

                <div style={{ fontSize: 13, color: "#666" }}>ENG</div>
                <Image src={Arrow} alt="Logo" />
              </div>
            </div>
          </div>
        </header>

        <nav className="nav">
          <a>SHOP</a>
          <a>SKILLS</a>
          <a>STORIES</a>
          <a>ABOUT</a>
          <a>CONTACT US</a>
        </nav>

        <main className="container">{children}</main>

        <Footer />
      </body>
    </html>
  );
}

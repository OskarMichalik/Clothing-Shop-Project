import Footer from "./components/Footer";
import Nav from "./components/nav-header/Nav";
import "./globals.css";
import CategoriesContextProvider from "./store/CategoriesContext";

export const metadata = {
  title: "Shop",
  description: "A dummy shop project",
  author: 'Oskar Michalik',
  charset: 'UTF-8',
  keywords: 'Clothing Shop, Clothes',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CategoriesContextProvider>
          <div id="modal"></div>
          <Nav />
          <div className="children">
            {children}
          </div>
          <Footer />
        </CategoriesContextProvider>
      </body>
    </html>
  );
}

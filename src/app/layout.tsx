import "../styles/globals.css";
import Banner from "../components/Banner";
import "../styles/globals.css";
import "../styles/banner.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Banner />
        {children}
      </body>
    </html>
  );
}

export const metadata = {
  title: "Matias Bronner",
  description: "Personal website",
};

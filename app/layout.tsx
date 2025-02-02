/* eslint-disable react-refresh/only-export-components */
import { Metadata } from "next";
// import Header from "./_components/Header/Header";
import { SettingsProvider } from "./_context/SettingsContext";
import "./global.scss";
import StoreProvider from "./storeProvider";

export const metadata: Metadata = {
  title: "Flexbox Labs",
  description: "A visual tool for experimenting with flexbox layouts",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="ee2b19c4-5be9-4260-9445-836b3a16acdc"
        ></script>
      </head>
      <body>
        <SettingsProvider>
          <StoreProvider>{children}</StoreProvider>
        </SettingsProvider>
      </body>
    </html>
  );
}

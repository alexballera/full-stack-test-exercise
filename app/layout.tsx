import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import { Provider } from "react-redux";
import { UserProvider } from "./context/UserContext";
import "./globals.css";
import store from "./store/store";
import { AppTheme } from "./theme";
// ** MUI Imports

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Fullstack Test",
  description: "Fullstack Test App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className}`}
      >
        <Provider store={store}>
          <UserProvider>
            <AppTheme>
              {children}
            </AppTheme>
          </UserProvider>
        </Provider>
      </body>
    </html>
  );
}
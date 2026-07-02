import I18nProvider from "@/i18n/I18nProvider";
import "./globals.css";

export const metadata = {
  title: "Shiny Boutique",
  description: "Where style meets shine.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}

import "./globals.css";

export const metadata = {
  title: "Magic Clay",
  description: "It is an ecommerce web application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        {children}
      </body>
    </html>
  );
}

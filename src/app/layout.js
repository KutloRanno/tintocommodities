import '../style.css';

export const metadata = {
  title: 'Tinto Commodities',
  description: 'Quality food products for a stronger Botswana. Discover locally sourced produce from Tinto Commodities.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

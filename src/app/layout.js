import "@/assets/css/global.scss";

export const metadata = {
  title: 'Check Game ID',
  description: 'Check Game ID Easily',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

import './globals.css'




export default function RootLayout({ children }) {
  return (
   <html >
    <body suppressHydrationWarning={true}>
    <div id="header"></div>
   
   {children}
    </body>
   
   </html>
  )
}

import Navigation from "../components/navigation"

export const metadata = {
  title: {
    template : '%s | Next Movies',
    default : 'Next Movies'
  },
  description: 'the best movies on the best framework',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <Navigation/>

        {children}
      </body>
    </html>
  )
}

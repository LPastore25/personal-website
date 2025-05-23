import './globals.css'
import ChakraProviders from '../components/ChakraProviders'

export const metadata = {
  title: 'My 3D Chakra App',
  description: 'Built with Next.js, Chakra UI, and Three.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ChakraProviders>{children}</ChakraProviders>
      </body>
    </html>
  )
}

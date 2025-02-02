import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '@/tailwind.css'

const font = Poppins({
	subsets: ['latin'],
	weight: ['600', '700', '800', '500', '400'],
})

export const metadata: Metadata = {
	title: 'Player-sys86',
	description: '3D old tv-simulation player',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={font.className}>{children}</body>
		</html>
	)
}

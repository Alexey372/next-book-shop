import type { Metadata } from "next"
import "./globals.sass"

export const metadata: Metadata = {
	title: "IT book.ru",
	description: "Generated by create next app",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}

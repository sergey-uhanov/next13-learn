import Link from 'next/link'

export default function AboutLayout({
	children
}: {
	children: React.ReactNode
	}) {
	return <div>
		<h1>About us layout</h1>
		<ul>
			<li><Link href='/about/contacts'>Contacts</Link></li>
			<li><Link href='/about/team'>Team</Link></li>
		</ul>
		{children}
	</div>
}
import Link from 'next/link'

const TheHeader = () => {
	return (
		<header className='container'>
			<Link href="/">home</Link>
			<Link href="/blog">Blog</Link>
			<Link href="/about">About</Link>
		</header>
	)
}
export {TheHeader}
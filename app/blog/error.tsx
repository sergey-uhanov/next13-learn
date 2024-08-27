'use client'
export default function ErrorWrapper({ error }: { error: Error }) {
	return <h1>OOOOPS... { error.message}</h1>
}
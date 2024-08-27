import { Metadata } from 'next';

async function getData(id: string) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
		next: {
			revalidate:60
		}
	})
	  return response.json()
}



type Props = {
	params: {
		id: string
	}
}

export async function generateMetadata({ params: { id } }: Props):Promise<Metadata> {
	return {
		title: id
	}
}

export default async function Blog({ params }: Props) {
	const { id } = params;
	
	const post = await getData(id)
	console.log(post)
	return (
		<>
			<h1>{post.title}</h1>
			<p>
				{post.body}
			</p>
		</>
	)
}

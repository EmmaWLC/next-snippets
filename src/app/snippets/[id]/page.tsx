import { db } from '@/db';
import { notFound } from 'next/navigation';

interface SnippetShowPageProps {
    params: {
        id: string;
    }
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
    console.log(props);
    const snippet = await db.snippet.findFirst({
        where: { id: parseInt(props.params.id)}
    })
    console.log(snippet);

    if(!snippet){
        return notFound();
    }
    return <div>Show a snippet</div>
}
import { db } from '@/db';
import { notFound } from 'next/navigation';

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
  // 延遲 2 秒再往下走，用來顯示 loading 頁面
  await new Promise((r) => setTimeout(r, 2000));
  console.log(props);
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) },
  });
  console.log(snippet);

  if (!snippet) {
    return notFound();
  }
  return <div>Show a snippet</div>;
}

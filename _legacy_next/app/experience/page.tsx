import { getMarkdownContent } from '@/lib/markdown';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Experience | Gauransh Kumar',
};

export default async function ExperiencePage() {
    const post = await getMarkdownContent('experience');

    if (!post) {
        return (
            <div className="container mx-auto px-4 py-12 text-center">
                <h1 className="text-3xl font-bold">Content Not Found</h1>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8">{post.title || 'Experience'}</h1>
            <div
                className="prose prose-invert prose-lg max-w-none prose-table:border-collapse prose-th:text-left prose-td:py-3 prose-td:px-4 prose-th:py-3 prose-th:px-4 prose-tr:border-b prose-tr:border-white/10"
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
        </div>
    );
}

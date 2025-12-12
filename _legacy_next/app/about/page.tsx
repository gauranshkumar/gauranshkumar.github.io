import { getMarkdownContent } from '@/lib/markdown';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About | Gauransh Kumar',
};

export default async function AboutPage() {
    const post = await getMarkdownContent('about');

    if (!post) {
        return (
            <div className="container mx-auto px-4 py-12 text-center">
                <h1 className="text-3xl font-bold">Content Not Found</h1>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-12 max-w-3xl">
            <h1 className="text-4xl font-bold mb-8">{post.title || 'About Me'}</h1>
            <div
                className="prose prose-invert prose-lg max-w-none hover:prose-a:text-blue-400 prose-a:transition-colors"
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
        </div>
    );
}

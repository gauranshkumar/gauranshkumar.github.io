import { getMarkdownContent } from '@/lib/markdown';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Projects | Gauransh Kumar',
};

export default async function ProjectsPage() {
    const post = await getMarkdownContent('projects');

    if (!post) {
        return (
            <div className="container mx-auto px-4 py-12 text-center">
                <h1 className="text-3xl font-bold">Content Not Found</h1>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-12 max-w-3xl">
            <h1 className="text-4xl font-bold mb-8">{post.title || 'Projects'}</h1>
            <div
                className="prose prose-invert prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
            {/* If content is empty, maybe show a "Coming Soon" or similar if desirable, 
          but simpler to just render what is there (which is nothing + frontmatter title). */}
            {!post.contentHtml && (
                <p className="text-muted-foreground italic mt-8">
                    Detailed project list to be added.
                </p>
            )}
        </div>
    );
}

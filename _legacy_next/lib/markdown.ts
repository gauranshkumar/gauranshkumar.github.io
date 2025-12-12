import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export interface PostData {
    title?: string;
    [key: string]: any;
    contentHtml: string;
}

export async function getMarkdownContent(fileName: string): Promise<PostData | null> {
  const fullPath = path.join(contentDirectory, `${fileName}.md`);
  
  if (!fs.existsSync(fullPath)) {
      return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    ...data,
    contentHtml,
  };
}

export function getAllContentFiles() {
    return fs.readdirSync(contentDirectory).filter(file => file.endsWith('.md'));
}

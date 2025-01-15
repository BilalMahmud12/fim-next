import { remark } from 'remark';
import html from 'remark-html';

export async function convertMarkdownToHtml(markdown: string): Promise<string> {
    const processedContent = await remark().use(html).process(markdown);
    return processedContent.toString();
}
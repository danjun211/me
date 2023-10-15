import { Client } from '@notionhq/client';

class Notion {
  client = new Client({ auth: process.env.NOTION_API_KEY });

  getPage(pageId: string) {
    return this.client.pages.retrieve({ page_id: pageId });
  }
}

export const notion = new Notion();

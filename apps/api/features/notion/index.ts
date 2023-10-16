import { Client } from '@notionhq/client';

class Notion {
  #client: Client | null = null;

  init() {
    this.#client = new Client({ auth: process.env.NOTION_API_KEY });
  }

  get client() {
    if (this.#client === null) {
      this.init();
    }

    return this.#client as Client;
  }

  getPage(pageId: string) {
    return this.client.pages.retrieve({ page_id: pageId });
  }
}

export const notion = new Notion();

export interface Page {
  url: string;
  id: string;
}

export interface Section {
  type: string;
  text?: string;
  img?: string;
  author?: string;
}

export interface SinglePageDto {
  url: string;
  id: string;
  sections: Section[];
}

export type SinglePage = SinglePageDto;

export type PagesDto = Page[];

export interface NewsletterDto {
  message: string;
}

import axios from 'axios';
import { PagesApiEndpoint } from './endpoints';
import { NewsletterDto, Page, PagesDto, SinglePage, SinglePageDto } from './model.dto';
import { NewsletterPayload } from '~/model/types';

const ADCHITECTS_API_BASE_URL = 'https://adchitects-cms.herokuapp.com';
const ADCHITECTS_AUTH_USERNAME = 'adchitects';
const ADCHITECTS_AUTH_PASSWORD = 'jsrulezzz';

// CREATE AXIOS INSTANCE
export const apiClient = axios.create({
  baseURL: ADCHITECTS_API_BASE_URL,
  auth: {
    username: ADCHITECTS_AUTH_USERNAME,
    password: ADCHITECTS_AUTH_PASSWORD,
  },
});

// FETCH PAGES
export async function fetchPages(): Promise<Page[]> {
  const response = await apiClient.get<PagesDto>(`${PagesApiEndpoint.Pages}`);
  return response.data;
}

// FETCH SIMPLE PAGE
export async function fetchSinglePage(id: string): Promise<SinglePage> {
  const response = await apiClient.get<SinglePageDto>(`${PagesApiEndpoint.SinglePage}/${id}`);
  return response.data;
}

// SUBSCRIBE TO NEWSLETTER
export async function subscribeToNewsletter(data: NewsletterPayload): Promise<NewsletterDto> {
  const response = await apiClient.post<NewsletterDto>(`${PagesApiEndpoint.Newsletter}`, data);
  return response.data;
}

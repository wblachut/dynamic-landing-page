import { UseMutationResult } from 'react-query';
import { NewsletterDto } from '~/api/model.dto';

export interface NewsletterPayload {
  email: string;
}

export type ErrorType = {
  response: {
    data: {
      status?: number;
      message?: string;
    };
  };
};

export type SubscribeMutation = UseMutationResult<
  NewsletterDto,
  unknown,
  NewsletterPayload,
  unknown
>;

export enum ResponseType {
  ERROR = 'error',
  SUCCESS = 'success',
}

export const enum SectionType {
  HERO = 'hero',
  TESTIMONIAL = 'testimonial',
  NEWSLETTER = 'newsletter',
  // ...
}

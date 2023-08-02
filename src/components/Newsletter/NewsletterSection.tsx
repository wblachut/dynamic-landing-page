import { useState } from 'react';
import { SubscribeMutation } from '~/model/types';
import { newsletterStyle } from './newsletter.styles';
import { NewsletterSubscribeInfo } from './NewsletterSubscribeInfo/NewsletterSubscribeInfo';

interface NewsletterSectionProps {
  subscribeMutation: SubscribeMutation;
}

export const NewsletterSection = ({ subscribeMutation }: NewsletterSectionProps) => {
  const [email, setEmail] = useState<string>('');
  const isResolved = subscribeMutation.status !== 'idle';

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    subscribeMutation.mutate({ email });
  };

  return (
    <section style={newsletterStyle.section}>
      <h2 style={newsletterStyle.h2}>Sign up for Newsletter</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type='email'
            placeholder='Type your email'
            value={email}
            style={newsletterStyle.input}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button disabled={false} style={newsletterStyle.button} type='submit'>
            Submit
          </button>
        </form>
      </div>
      {isResolved && <NewsletterSubscribeInfo subscribeMutation={subscribeMutation} />}
    </section>
  );
};

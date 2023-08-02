import { globalStyles } from '~/global/styles';
import { ErrorType, ResponseType, SubscribeMutation } from '~/model/types';

export const NewsletterSubscribeInfo = ({
  subscribeMutation,
}: {
  subscribeMutation: SubscribeMutation;
}) => {
  const { data, isError, error } = subscribeMutation;
  const type = isError ? ResponseType.ERROR : ResponseType.SUCCESS;
  const message = isError ? (error as ErrorType).response.data.message : data?.message;
  const fontColor = globalStyles.color[`${type}Color`];

  return <div style={{ color: fontColor, marginTop: '1rem' }}>{message}</div>;
};

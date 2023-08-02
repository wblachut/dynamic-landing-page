import { globalStyles } from '~/global/styles';
import { ErrorType, ResponseType, SubscribeMutation } from '~/model/types';

export const NewsletterSubscribeInfo = ({
  subscribeMutation,
}: {
  subscribeMutation: SubscribeMutation;
}) => {
  // TODO add server error message handling (for )
  const { data, isError, error } = subscribeMutation;
  const type = isError ? ResponseType.ERROR : ResponseType.SUCCESS;
  const message = isError ? (error as ErrorType).response.data.message : data?.message;
  const fontColor = globalStyles.color[`${type}Color`];

  console.log(fontColor);

  return <div style={{ color: fontColor, marginTop: '1rem' }}>{message}</div>;
};

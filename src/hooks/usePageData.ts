import { useState, useEffect } from 'react';
import { fetchSinglePage } from '~/api/apiClient';
import { SinglePage } from '~/api/model.dto';

export const usePageData = (pageId: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [pageData, setPageData] = useState<SinglePage | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPageData = async () => {
      setIsLoading(true);
      try {
        const singlePageData = await fetchSinglePage(pageId);

        setPageData(singlePageData);
        setIsLoading(false);
      } catch (error) {
        setError(error as Error);
        setIsLoading(false);
      }
    };

    fetchPageData();
  }, [pageId]);

  return { pageData, isLoading, isError: !!error };
};

import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchPages, subscribeToNewsletter } from './api/apiClient';
import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Page } from './api/model.dto';
import Layout from './components/layout/Layout';
import { LogoLoader } from './common/LogoLoader/LogoLoader';
import { ErrorFallback } from './error/ErrorFallback';
import { PageView } from './view/PageView';

export const BASE_URL = '/dynamic-landing-page';

const App = () => {
  const { isLoading, isError, error, data: pagesData } = useQuery(['pages'], fetchPages);
  const subscribeMutation = useMutation(subscribeToNewsletter);

  function getDynamicRoutes(): RouteObject[] {
    return (
      pagesData?.map((page: Page) => ({
        path: page.url,
        element: <PageView pageId={page.id} subscribeMutation={subscribeMutation} />,
      })) ?? []
    );
  }

  const router = createBrowserRouter(
    [
      {
        path: '',
        element: <Layout pagesData={pagesData ?? []} />,
        children: getDynamicRoutes(),
      },
    ],
    { basename: import.meta.env.DEV ? '/' : '/react-vite-gh-pages/' },
  );

  if (isLoading) return <LogoLoader />;
  if (isError) return <ErrorFallback error={error as Error} />;

  return <RouterProvider router={router} fallbackElement={<LogoLoader />} />;
};

export default App;

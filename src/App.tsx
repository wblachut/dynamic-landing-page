import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchPages, subscribeToNewsletter } from './api/apiClient';
import PageView from './components/View/PageView';
import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Page } from './api/model.dto';
import Layout from './Header/Layout';

const App = () => {
  const { isLoading, isError, data: pagesData } = useQuery(['pages'], fetchPages);
  // TODO: Fix Queries inside RouterProvider (for now they were treated as ones from outside provider and generated errors)
  // "raw" solution would be to use dynamic queries and pass the result to elements (bad performance)
  const subscribeMutation = useMutation(subscribeToNewsletter);

  function getDynamicRoutes(): RouteObject[] {
    return (
      pagesData?.map((page: Page) => ({
        path: page.url,
        element: <PageView pageId={page.id} subscribeMutation={subscribeMutation} />,
      })) ?? []
    );
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout pagesData={pagesData ?? []} />,
      children: getDynamicRoutes(),
    },
  ]);

  if (isLoading) return <span>Loading...</span>;
  if (isError) return <span>Error...</span>;

  return <RouterProvider router={router} fallbackElement={<span>Loading...</span>} />;
};

export default App;

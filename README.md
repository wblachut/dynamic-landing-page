# Fog Of War Simulator

#### Table of Contents

- [About](#about)
- [Running the App](#running-the-app)
- [Project Setup](#project-setup)
- [Structure](#structure)
- [Development](#development)
- [Todos](#todos)
- [Acknowledgments](#acknowledgments)

## About

This Project in a dynamic landing page application. All of the pages content and navigation is rendered based on data from api calls.

## Running the App

To run the app follow the steps:

1. Clone github repository to your project folder with:
   `git clone https://github.com/akena-engineering/wojciech-blachut.git`
2. Move to project catalog and type command bellow in the terminal to install packages:
   `yarn`
3. To Start the app (Vite.js dev server):
   `yarn run dev`
   app should be listening on:
4. To build the App use
   `yarn build`

## Project Setup

This project uses `React` with `Vite.js` as the building tool and `React Router` as routing tool. The main package manager used is `yarn`. Project styling is achieved mostly through JS styles. The project design was provided in a ready mockup. Project is written in TypeScript to add type checking for backend data. Project uses `axios` and `tanStack Query(react-query)` for fetching data. No testing was done to this project due to strict timelines.

## Structure

Simplified Project Structure

```
	project-root
	├── README.md
	├── package.json
	├── yarn.lock
	├── .gitignore
	├── eslint & prettier, ts config
	├── index.html
	├── vite.config.ts
	└── src
		├── api
		├── assets
		├── hooks
		├── mocks
		├── error
		├── global // global css styles and variables
		├── model // custom types and enums
		├── components
	  	│   ├── common // layout and loader files
	  	│   ├── header
	  	│   ├── view // main page component
	  	│   └── section // eg. /Hero:
	 			  		     	├── HeroSection.tsx
	 			 	 			└── hero.style.tsx
		├── App.tsx
		├── index.css // css baseline
		└── main.tsx
```

## Development

**Acceptance Criteria:**

1. Implement data fetching
2. Implement homepage design
2. Implement navigation
3. Implement page functionality

Project was developed as a recruitment task. TypeScript was used over Javascript to provide type checking for api data, normally in case of simple landing pages with only UI there is no need of TS. Setup with `vite.js` was done because of it's superiority over CRA. It uses much faster than the Webpack, esbuild bundler. To see pros of vite simply start dev server, which takes moments to run. For routing [React-Router v6](https://reactrouter.com/en/main) was used as one of the best routing tool available. Providing `navigation` and `routing` for elements that are rendered **base on api calls** was quite tricky. Using `useQuery` and `useMutation` from [TanStack Query](https://tanstack.com/query/latest), inside components nested in `createBrowserRouter()` `children` prop caused `queryClient` errors. Such components are treated as ones outside of `<QueryClientProvider />` and have no access to `queryClient` (look at [main.tsx](src\main.tsx)). To handle this issue simple axios fetch was used inside custom fetch hook [`usePageData()`](src\hooks\usePageData.ts). Additionally gh-pages does not support Single Page Applications with routing. After some research making this app working was achieved by providing base url to [vite.config.js](vite.config.ts) (conditionally, only for non-dev environment) and router setup inside [`App.tsx`](src\App.tsx). All fetch functions and `AxiosInstance` setup can be found in [apiClient](src\api\apiClient.ts). Upon getting all pages data in `<App/>` component, their ids are passed to `<PageView/>` component. Current page id is used to fetch content available for this page. Content data is mapped to sections with `getComponentBySectionType()`. Current way of passing `subscribeMutation` should be refactored (TanStack Query was used for training purpose, resigning from it could be beneficial).




## Todos

- [x] Fix HTML Semantics
- [x] Fix query client errors
- [x] Add custom fonts
- [x] Add readme.md
- [ ] Add Image loader
- [ ] Separate logic from component files
- [ ] Find a way to use Newsletter's useMutation inside Newsletter Section, and not pas it as prop to PageView.
- [ ] Find how to make tanStack queries nested in routerProvider children
- [ ] Optimize mapping function in PageView component
- [ ] Deploy project to an environment supporting SPA routing (eg. Vercel)(?)

## Acknowledgments

- **Adchitects** - for the recruitment task related to this project, and providing mock, api and assets
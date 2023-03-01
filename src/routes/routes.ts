import { lazy, LazyExoticComponent } from 'react';

type JSXComponent = () => JSX.Element

interface Route {
	to: string,
	path: string,
	Component: LazyExoticComponent<() => JSX.Element> | JSXComponent,
	name: string,
};


// Para crear LazyLoad
const Lazy1 = lazy(() => import(/* WebpackChunkName: "LazyPage" */ '../01-Lazylaod/pages/LazyPage'));
const Lazy2 = lazy(() => import(/* WebpackChunkName: "LazyPage2" */'../01-Lazylaod/pages/LazyPage2'));
const Lazy3 = lazy(() => import(/* WebpackChunkName: "LazyPage3" */'../01-Lazylaod/pages/LazyPage3'));

export const routes: Route[] = [
	{
		to: '/lazy1',
		path: 'lazy1',
		Component: Lazy1,
		name: 'Lazy-1'
	},
	{
		to: '/lazy2',
		path: 'lazy2',
		Component: Lazy2,
		name: 'Lazy-2'
	},
	{
		to: '/lazy3',
		path: 'lazy3',
		Component: Lazy3, //Este podria ser el nombre del componente ezample LazyPage3
		name: 'Lazy-3'
	},
];
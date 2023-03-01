import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../01-Lazylaod/pages/NoLazy';

type JSXComponent = () => JSX.Element

interface Route {
	to: string,
	path: string,
	Component: LazyExoticComponent<() => JSX.Element> | JSXComponent,
	name: string,
};


// Para crear LazyLoad
const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-Lazylaod/layout/LazyLayout'));

export const routes: Route[] = [
	{
		// Para navegar entre rutas con lazyLoad 
		to: '/lazyload',
		path: 'lazyload/*',
		Component: LazyLayout,
		name: 'LazyLayout - Dash'
	},
	{
		to: '/no-lazy',
		path: 'no-lazy',
		Component: NoLazy,
		name: 'No-Lazy'
	},

];
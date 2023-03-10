import { NavLink, Route, Routes, Navigate } from 'react-router-dom';
import { LazyPage, LazyPage2, LazyPage3 } from '../pages/index';

const LazyLayout = () => (
	<div>
		<h1>LazyLayout Page </h1>

		{/* Rutas Hijas iran aqui */}

		<ul>
			<li>
				<NavLink to="lazy1">Lazy 1</NavLink>
			</li>
			<li>
				<NavLink to="lazy2">Lazy 2</NavLink>
			</li>
			<li>
				<NavLink to="lazy3">Lazy 3</NavLink>
			</li>
		</ul>

		<Routes>
			<Route path="lazy1" element={<LazyPage />} />
			<Route path="lazy2" element={<LazyPage2 />} />
			<Route path="lazy3" element={<LazyPage3 />} />

			{/* <Route path="*" element={<div>Not Found</div>} /> */}
			<Route path="*" element={<Navigate to='lazy1' replace />} />

		</Routes>
	</div>
)

export default LazyLayout;
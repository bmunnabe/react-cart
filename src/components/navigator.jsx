import React from 'react';

export default function Navigator(props) {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="navbar-header">
				<a className="navbar-brand" href="#">
					Munna Babu
				</a>
			</div>
			<ul className="nav justify-content-end">
				<li className="nav-item">
					<a className="nav-link active" href="#">
						Active
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						Link
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
						Disabled
					</a>
				</li>
			</ul>
		</nav>
	);
}

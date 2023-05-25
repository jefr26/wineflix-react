import UserAvatar from "./UserAvatar"

const Navigation = () => {
	return (
		<nav className="navigation">
			<section className="primary-navigation">
				<h1>WineFlix</h1>
				<ul className="navigation-links">
					<li className="active">
						<a href="https://developer.mozilla.org">Home</a>
					</li>
					<li>
						<a href="https://developer.mozilla.org">Whites</a>
					</li>
					<li>
						<a href="https://developer.mozilla.org">Reds</a>
					</li>
					<li>
						<a href="https://developer.mozilla.org">Blends</a>
					</li>
				</ul>
			</section>
			<section className="secondary-navigation">
				<UserAvatar />
			</section>
		</nav>
	)
}

export default Navigation

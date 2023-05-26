import MainMenu from "../menu/MainMenu"
import UserAvatar from "./UserAvatar"

const Navigation = () => {
	return (
		<nav className="navigation">
			<section className="primary-navigation">
				<h1>WineFlix</h1>
				<MainMenu />
			</section>
			<section className="secondary-navigation">
				<UserAvatar />
			</section>
		</nav>
	)
}

export default Navigation

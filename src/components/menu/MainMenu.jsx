import { mainMenu } from "../../misc/data"
import MenuItem from "./MenuItem"

function MainMenu() {
	return (
		<ul className="navigation-links">
			{mainMenu.map(menuItem => (
				<MenuItem key={menuItem.id} item={menuItem} />
			))}
		</ul>
	)
}

export default MainMenu

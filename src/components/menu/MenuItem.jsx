const MenuItem = ({ item }) => {
	return (
		<li className={item.active ? 'active' : ''}>
			<a href={ item.url } title={ item.title }>{ item.title }</a>
		</li>
	)
}

export default MenuItem

const Image = ({src, alt, className = null, isNew = false}) => {
	return (
		<>
			<img src={src} alt={alt} className={className} />
			{isNew && <span className="new-badge">New!</span>}
		</>
	)
}

export default Image

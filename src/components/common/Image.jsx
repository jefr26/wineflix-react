const Image = ({src, alt, className = null}) => {
	return (
		<img src={src} alt={alt} className={className} />
	)
}

export default Image

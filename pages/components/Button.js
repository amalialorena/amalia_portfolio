function Button({ isLink, text }) {
    return(
        isLink ? 
        <a href="#">{text}</a> : 
        <button className="button">{text}</button>
    )
}

export default Button;
function Button({className, functionClick, children}) {
    return (
        <>
            <button onClick={functionClick} className={className}>
                {children}
            </button>
        </>
    )
}

export default Button
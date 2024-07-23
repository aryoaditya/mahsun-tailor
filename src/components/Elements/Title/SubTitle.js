function SubTitle (props) {
    const {children} = props;
    return (
        <h1 className="text-primary text-lg font-bold italic text-center">{children}</h1>
    )
}

export default SubTitle;
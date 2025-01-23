const CopyRight = () => {
    const currentYear = new Date().getFullYear();

    return (
        <p className="text-center text-darkPurple">
            Copyright &copy; {currentYear} Calvor
            <br />
            All Rights Reserved
        </p>
    )
}

export default CopyRight;
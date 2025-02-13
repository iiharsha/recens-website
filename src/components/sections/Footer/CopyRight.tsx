const CopyRight = () => {
    const currentYear = new Date().getFullYear()

    return <p className="text-sm text-secondary">&copy; {currentYear} Calvor. All Rights Reserved.</p>
}

export default CopyRight

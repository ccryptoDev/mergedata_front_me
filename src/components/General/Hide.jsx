const Hide = ({ children }) => {
    const user = JSON.parse(localStorage.getItem('permissionsMergeData'));

    if (!user?.email?.includes('@innovateod.com')) return false;

    return (
        <>{children}</>
    )
}

export default Hide
function PercentageBar ({ color, percentageStyle = '' }) {
    const style = `${color} h-3 rounded-full`;
    return (
        <div className='w-20 rounded-full h-3 bg-dark-accent-00'>
            <div style={{ background: 'linear-gradient(#FFF, #FFF) no-repeat center/3px 100%' }}>
                <div
                    className={style}
                    style={{ width: percentageStyle }}
                ></div>
            </div>
        </div>
    )
}

export default PercentageBar;

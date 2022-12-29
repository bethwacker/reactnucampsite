

const Partner = ({ partner }) => {
    const { image, name, description } = partner;
    if (partner) {
        return (
            <>
                <img
                    width='150px'
                    src={image}
                    alt={name}
                />
                <div className='m-4'>
                    <h5 className='fw-bold'>{name}</h5>
                    {description}
                </div>
            </>
        )
    }
    return null;
}


export default Partner;

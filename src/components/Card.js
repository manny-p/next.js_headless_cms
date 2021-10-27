const Card = () => {


    const div = {
        background: 'white',
        fontSize: '2rem',
        paddingLeft: '3rem'
    }


    const cards = new Array(10)
        .fill(1)
        .map((_, i) => ({
            id: Date.now() + i,
            title: `Card ${i + 1}`
        }))

    return (
        <>
            {cards.map(card => {
                    return (
                        <div style={div} key={card.id}>
                            <h1>{card.title}</h1>
                        </div>
                    )
                }
            )}

        </>
    )
}

export default Card
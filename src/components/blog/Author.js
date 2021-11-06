import {Box, Flex, Image} from '@chakra-ui/react'
// import emoji from 'node-emoji'
let emoji = require('node-emoji')


const Author = () => {

    const wave = emoji.get('wave')
    const world = emoji.get('earth_americas')

    const style = {
        color: 'white'
    }

    return (
        <>
            <Flex style={style}
                  pt={'.5rem'}
                  pl={'5rem'}
                  bg={'rgb(38,38,38)'}
            >
                <Image
                    borderRadius="full"
                    boxSize="75px"
                    src="https://avatars.githubusercontent.com/u/48877252?v=4"
                    alt="Manny Parra"
                />
                <Box paddingLeft=".5rem">
                    {/*<h5 className="">Manny Parra</h5>*/}
                    <p className="welcome-text">
                        {wave}{' '}{world}
                    </p>
                </Box>
            </Flex>
        </>
    )
}

export default Author;
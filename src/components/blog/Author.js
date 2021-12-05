import {Box, Flex, Image} from '@chakra-ui/react'

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
              pt=".5rem"
              pl="2rem"
              pb=".5rem"
              bg="#0e0e0e"
              align="center"
        >
          <Image
              borderRadius="full"
              boxSize="75px"
              src="https://avatars.githubusercontent.com/u/48877252?v=4"
              alt="Manny Parra"
          />
          <Box paddingLeft="1rem">
            <p>
              hello, world {wave} {world}
            </p>
          </Box>
        </Flex>
      </>
  )
}

export default Author
import styles from '@/styles/BlogPostCard.module.scss'

import Image from 'next/image'
import emoji from 'node-emoji'
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar, Flex,
    // useColorModeValue,
} from '@chakra-ui/react';

const blogPostCard = ({title, subtitle}) => {

    const writingHand = emoji.get('writing_hand')
    const hourglass = emoji.get('hourglass_flowing_sand')

    return (
        <>
            <Box className={styles.boxBorderWrap}
                 m={5}
            >
                <Box className={styles.box}
                     rounded={'md'}
                >
                    <Flex
                        mt={6}
                        mb={-8}
                        mx={2}

                        flexDirection="column"
                    >

                        <Box
                            h={'210px'}
                            bg={'gray.100'}
                            mt={-6}
                            mx={-6}
                            mb={6}
                            pos={'relative'}
                            borderRadius={'1rem 1rem 0 0'}
                        >
                            <Image
                                src={
                                    'https://images.unsplash.com/photo-1564865878688-9a244444042a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80'
                                }
                                layout={'fill'}
                            />
                        </Box>
                        <Box
                            bg={'gray.100'}
                            mt={-6}
                            mx={-6}
                            mb={6}
                            pos={'relative'}
                            borderRadius={'0 0 1rem 1rem'}
                        >

                            <Stack
                                p={4}
                            >
                                <Text
                                    color={'purple.600'}
                                    textTransform={'uppercase'}
                                    fontWeight={800}
                                    fontSize={'sm'}
                                    letterSpacing={1.1}>
                                    {title}
                                </Text>
                                <Text
                                    color={'black'}
                                    fontWeight={400}
                                    fontSize={'xs'}
                                    letterSpacing={1.1}>
                                    {subtitle}
                                </Text>
                                <Heading
                                    color="black"
                                    fontSize={'2xl'}
                                    fontFamily={'body'}>
                                    <p>
                                        work in progress {writingHand}
                                    </p>
                                    <br/>
                                    <p>
                                        stay tuned...{hourglass}
                                    </p>
                                </Heading>
                                <Text color={'gray.500'}>
                                    {/*Lorem ipsum dolor sit amet*/}
                                </Text>
                            </Stack>
                            <Stack
                                p={2}
                                pb={4}
                                mt={6}
                                direction={'row'}
                                spacing={4}
                                align={'center'}
                            >
                                <Avatar
                                    src={'https://reactjs.org/logo-og.png'}
                                    alt={'Author'}
                                />
                                <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                    <Text fontWeight={600}>Manny Parra</Text>
                                    <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
                                </Stack>
                            </Stack>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </>
    )
}

export default blogPostCard

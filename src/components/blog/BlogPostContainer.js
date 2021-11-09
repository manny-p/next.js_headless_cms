import {Flex} from '@chakra-ui/react';

const BlogPostContainer = ({children}) => {
    return (
        <>
            <Flex
                mt={5}
                mb={5}
                justifyContent={'center'}
                flexWrap={'wrap'}
            >
                {children}
            </Flex>
        </>
    )
}

export default BlogPostContainer
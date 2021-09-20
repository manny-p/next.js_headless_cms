import {Flex} from '@chakra-ui/react'
import styles from '@/styles/Footer.module.css'

export default function Footer() {

    return (
        <footer>
            <Flex bg="red" p={4} className={styles.footer}>
                Footer
            </Flex>
        </footer>
    )
}
import {Flex} from '@chakra-ui/react'
import styles from '@/styles/Navbar.module.css'

export default function Navbar() {

    return (
        <navbar>
            <Flex bg="red" p={4} className={styles.navbar}>
                Navbar
            </Flex>
        </navbar>

    )
}
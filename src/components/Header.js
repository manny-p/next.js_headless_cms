import {Flex} from '@chakra-ui/react'
import styles from '@/styles/Header.module.css'
import {useAppContext} from '../context/state'

export default function Header() {

    const {bgBoxRef} = useAppContext()
    const {hiRef} = useAppContext()
    const {wordsRef} = useAppContext()
    const {cursorRef} = useAppContext()

    return (
        <header>
            <Flex m={1} className={styles.header}>
                <h1 className={styles.h1}>
                    <span ref={bgBoxRef} className={styles.bgBox}/>
                    <span ref={hiRef} className={styles.hi}>Hi, I'm</span>
                    <span ref={wordsRef} className={styles.words}/>
                    <span ref={cursorRef} className={styles.cursor}>_</span>
                </h1>
            </Flex>
        </header>
    )
}
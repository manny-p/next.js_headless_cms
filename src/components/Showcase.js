import {Box, Flex} from '@chakra-ui/react'
import styles from '@/styles/Showcase.module.css'
import {useAppContext} from '../context/state'

export default function Showcase() {

    const {bgBoxRef} = useAppContext()
    const {hiRef} = useAppContext()
    const {wordsRef} = useAppContext()
    const {cursorRef} = useAppContext()

    return (
        <div className={styles.showcaseWrapper}>
            <span ref={bgBoxRef} className={`${styles.bgBox}`}/>
            <span ref={hiRef} className={`${styles.hi}`}>Hi, I'm</span>
            <span ref={wordsRef} className={`${styles.words}`}/>
            <span ref={cursorRef} className={`${styles.cursor}`}>_</span>
        </div>
    )

}
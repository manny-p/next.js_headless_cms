import styles from '@/styles/Showcase.module.css'
import {AppContext} from '../context/state'
import {useContext} from 'react';

export default function Showcase() {

    const {bgBoxRef} = useContext(AppContext)
    const {hiRef} = useContext(AppContext)
    const {wordsRef} = useContext(AppContext)
    const {cursorRef} = useContext(AppContext)

    return (
        <div className={styles.showcaseWrapper}>
            <span ref={bgBoxRef} className={styles.bgBox}/>
            <span ref={hiRef} className={styles.hi}>Hi, I'm</span>
            <span ref={wordsRef} className={styles.words}/>
            <span ref={cursorRef} className={styles.cursor}>_</span>
        </div>
    )

}
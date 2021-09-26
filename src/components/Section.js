import styles from '@/styles/Section.module.css'
import Blob from '@/components/Blob';

export default function Section() {

    return (
        <section className={styles.spacer}>
            <div className={styles.layer1}>

            </div>
            <div className={styles.layer2}>

            </div>
            <Blob/>
            <div className={styles.layer3}>

            </div>
        </section>
    )
}
import styles from '@/styles/Section.module.css'
import Blob from '@/components/Blob';

export default function Section() {

    return (
        <section>
            <div className={`${styles.spacer} ${styles.layer1}`}>
                &nbsp;
            </div>
            <div className={`${styles.spacer} ${styles.layer2}`}>
                &nbsp;
            </div>
            <Blob/>
            <div className={`${styles.spacer} ${styles.layer3}`}>
                &nbsp;

            </div>
        </section>
    )
}
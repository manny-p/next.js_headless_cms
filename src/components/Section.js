import styles from '@/styles/Section.module.css'

export default function Section() {

    return (
        <section className={`${styles.sectionWrapper}`}>
            <div className={`${styles.spacer} ${styles.layer1}`}/>
            <div className={`${styles.spacer} ${styles.layer2}`}/>
        </section>
    )
}
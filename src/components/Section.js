import styles from '@/styles/Section.module.scss'
import Blob from '@/components/Blob';
import Image from 'next/image'
import layer1 from '../svg/layer1.svg'
import layer2 from '../svg/layer2.svg'
import layer3 from '../svg/layer3.svg';
import layer4 from '../svg/layer4.svg';


export default function Section() {

    return (
        <section className={styles.sectionWrapper}>
            <div>
                <Image
                    src={layer1}
                    alt={'layout'}
                />
            </div>
            <div>
                <Image
                    src={layer2}
                    alt={'layout'}
                />
            </div>
            <Blob/>
            <div>
                <Image
                    src={layer3}
                    alt={'layout'}
                />
            </div>
            <div>
                <Image
                    src={layer4}
                    alt={'layout'}
                />
            </div>
            <div/>
        </section>
    )
}

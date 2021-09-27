import styles from '@/styles/Footer.module.css'
import Image from 'next/image';
import layer3 from '../svg/layer3.svg';

export default function Footer() {

    return (
        <footer className={styles.footer}>
            <p>Copyright &copy; Manny Parra 2021</p>
        </footer>
    )
}


import styles from '@/styles/Header.module.css'
import Link from 'next/link'

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <Link href='/'>
                    <a/>
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li>

                        </li>
                        <li>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
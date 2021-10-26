import styles from '@/styles/Header.module.scss'
import Link from 'next/Link'

export default function Header() {
    // noinspection JSUnresolvedVariable,HtmlUnknownTarget
    return (
        <>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <div className={styles.navGridLeft}>
                        <Link href="/">
                            <a>
                                <ul className={styles.logo}>
                                    <li>
                                        <span id={styles.m}>M</span>
                                        anny

                                    </li>
                                    <li>
                                        <span id={styles.p}>P</span>
                                        arra
                                    </li>

                                </ul>
                            </a>
                        </Link>
                    </div>
                    <div className={styles.navGridRight}>
                        <ul>
                            <li>
                                <Link href="https://github.com/manny-p?tab=repositories">
                                <a>Github</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.linkedin.com/in/mannyparra/">
                                    <a>LinkedIn</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog">
                                    <a>Blog</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}
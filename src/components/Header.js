import styles from '@/styles/Header.module.scss'
import Link from 'next/link'
import {Button} from '@chakra-ui/react'
// import {useRouter} from 'next/router';

import {faCode} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function Header() {

    // const router = useRouter();

    return (
        <>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <div className={styles.navGridLeft}>
                        <ul>
                            <li>
                                <Link href="/">
                                    <FontAwesomeIcon icon={faCode} className={styles.logoClass} id={styles.logoId}/>
                                </Link>
                            </li>

                            <a target="_blank" href="https://github.com/manny-p" rel="noreferrer">
                                <li>
                                    Github
                                </li>
                            </a>

                            <a target="_blank" href="https://www.linkedin.com/in/mannyparra/" rel="noreferrer">
                                <li>
                                    LinkedIn
                                </li>
                            </a>

                        </ul>
                    </div>
                    <div className={styles.navGridRight}>
                        <ul>
                            <li>
                                <Link href="/blog">
                                    <Button
                                        className={styles.blogButton}
                                        bg="#18c7b1"
                                        color="black"
                                        size="sm"
                                        // bgGradient="linear(to-r, #18c7b1, #5b0ead)"
                                        _hover={{
                                            bg: 'white',
                                            color: '#5b0ead',
                                        }}
                                    >

                                        Blog
                                    </Button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

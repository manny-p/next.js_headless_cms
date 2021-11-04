import styles from '@/styles/Header.module.scss'
import Link from 'next/link'
import {Button} from '@chakra-ui/react';
import {faCode} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function Header() {
    // noinspection JSUnresolvedVariable,HtmlUnknownTarget
    return (
        <>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <div className={styles.navGridLeft}>
                        <ul>
                            <li>
                                <Link href="/">
                                    <FontAwesomeIcon icon={faCode} id={styles.logoID} className={styles.logoClass}/>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://github.com/manny-p">
                                    Github
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.linkedin.com/in/mannyparra/">
                                    LinkedIn
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.navGridRight}>
                        <ul>
                            <li>
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
                                    <Link href="/blog">
                                        Blog
                                    </Link>
                                </Button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

{/*<li>*/
}
{/*    <span id={styles.m}>M</span>*/
}

{/*anny*/
}

{/*</li>*/
}
{/*<li>*/
}
{/*<span id={styles.p}>P</span>*/
}
{/*arra*/
}
{/*</li>*/
}
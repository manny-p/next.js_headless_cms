import styles from '@/styles/Header.module.scss'
import Link from 'next/link'
import {Button} from '@chakra-ui/react'
import {faCode} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useRouter} from 'next/router'

export default function Header() {

  const {push} = useRouter()

  return (
      <>
        <header className={styles.header}>
          <nav className={styles.nav}>
            <div className={styles.navGridLeft}>
              <ul>
                <li>
                  <Link href="/" passHref>
                    <a>
                      <FontAwesomeIcon icon={faCode} className={styles.logoClass}/>
                    </a>
                  </Link>
                </li>
                <li>
                  <a target="_blank" href="https://github.com/manny-p" rel="noreferrer">
                    Github
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.linkedin.com/in/mannyparra/" rel="noreferrer">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.navGridRight}>
              <ul>
                <li>
                  <Button
                      onClick={() => push('/blog')}
                      className={styles.blogButton}
                      bg="#18c7b1"
                      color="black"
                      size="sm"
                      _hover={{
                        bg: '#5b0ead',
                        color: '#fff',
                      }}
                  >
                    Blog
                  </Button>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </>
  )
}

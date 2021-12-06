import styles from '@/styles/Section.module.scss'
import Blob from '@/components/Blob'
import Image from 'next/image'
import layer1 from '../svg/layer1.svg'
import layer2 from '../svg/layer2.svg'
import layer3 from '../svg/layer3.svg'
import layer4 from '../svg/layer4.svg'
import {Box} from '@chakra-ui/react'

const Section = () => {
  return (
      <section className={styles.sectionContainer}>
        <Box>
          <Image
              src={layer1}
              alt={'layout'}
          />
        </Box>
        <Box>
          <Image
              src={layer2}
              alt={'layout'}
          />
        </Box>
        <Blob/>
        <Box>
          <Image
              src={layer3}
              alt={'layout'}
          />
        </Box>
        <Box>
          <Image
              src={layer4}
              alt={'layout'}
          />
        </Box>
      </section>
  )
}

export default Section
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useEffect, useRef} from 'react';
import {Flex, Grid, GridItem} from '@chakra-ui/react'

const {gsap} = require('gsap/dist/gsap');
const {RoughEase} = require('gsap/dist/EasePack');
const {TextPlugin} = require('gsap/dist/TextPlugin');
gsap.registerPlugin(TextPlugin, RoughEase);

export default function HomePage() {

    let backgroundRef = useRef(null)
    let hiRef = useRef(null)
    let cursorRef = useRef(null)
    let wordsRef = useRef(null)
    const words = [' Manny', ' a Developer', ' a Creative', ' a Veteran', ' Manny']


    useEffect(() => {
        let boxTimeline = gsap.timeline()

        boxTimeline
            .to(backgroundRef.current, {
                duration: 1,
                width: '17vw',
                delay: 0.5,
                ease: 'power4.inOut',
                onComplete: () => wordsTimeline.play() && cursorTL.play()
            })
            .from(hiRef.current, {
                duration: 1,
                y: '7vw',
                ease: 'power3.out'
            })
            .to(backgroundRef.current, {
                duration: 1,
                height: '7vw',
                ease: 'elastic.out'
            })
            .to(backgroundRef.current, {
                duration: 2,
                autoAlpha: 0.5,
                yoyo: true,
                repeat: -1,
                ease: 'rough({ ' +
                    'template: none.out, ' +
                    'strength:  1, points: 20, ' +
                    'taper: \'none\', ' +
                    'randomize: true, ' +
                    'clamp: false' +
                    '})'
            })

        let cursorTL = gsap.timeline().pause()
        cursorTL.to(cursorRef.current, {
            opacity: 0,
            ease: 'power2.inOut',
            repeat: -1,
        })

        let wordsTimeline = gsap.timeline().pause()
        words.map(word => {
            let tl = gsap.timeline({
                repeat: -1,
                yoyo: true,
            })
            tl.to(wordsRef.current, {
                duration: 1,
                text: word,
                delay: 1,

            })
            wordsTimeline.add(tl)
        })

        wordsTimeline.set(wordsRef.current, {
            onComplete: () => wordsTimeline.kill()
        })

    }, [backgroundRef, hiRef, wordsRef, cursorRef])

    return (
        <>
            <Head>
                <title>Manny Parra</title>
                <link rel="icon" href={'/favicon.ico'}/>
            </Head>

            <Grid
                h="100vh"
                templateRows="repeat(1, 1fr)"
                templateColumns="repeat(5, 1fr)"
                // gap={1}
                // columnGap={.5}
            >
                {/*<GridItem rowSpan={2} colSpan={1} bg="black">*/}
                <GridItem colSpan={1} bg="black">
                    <aside>
                        test
                    </aside>
                </GridItem>
                <GridItem colSpan={4} bg="black">
                {/*<GridItem colSpan={4}>*/}
                    <header>
                        <h1>header</h1>
                        <Flex m={2}>
                            <h1 className={styles.header}>
                                <span ref={backgroundRef} className={styles.background}/>
                                {/* eslint-disable-next-line */}
                                <span ref={hiRef} className={styles.hi}>Hi, I'm</span>
                                <span ref={wordsRef} className={styles.words}/>
                                <span ref={cursorRef} className={styles.cursor}>_</span>
                            </h1>
                        </Flex>
                    </header>
                    <main className={styles.main}>
                        <h1>main</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet, sem eget luctus mollis, ex mauris porttitor massa, at ornare ex odio vitae orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium, nulla quis cursus commodo, velit nisl hendrerit nisi, nec varius odio mauris vitae dolor. Nam sed aliquam nunc. Phasellus venenatis fermentum ipsum non pharetra. Quisque a metus varius, convallis lacus sit amet, molestie nunc. Ut nec urna in ligula consequat vulputate. Integer est ligula, venenatis quis elementum eget, consectetur eget nisl. Sed sit amet augue at leo varius fermentum. Nullam faucibus, est nec molestie euismod, nibh ipsum pretium elit, quis maximus massa nisi id tellus.

                            Nunc quis magna orci. Morbi arcu arcu, ultrices a lobortis vel, vehicula at augue. Maecenas ipsum enim, dapibus sed tincidunt at, imperdiet quis nisl. Fusce eget eleifend velit, sed efficitur risus. Mauris aliquet, nisl et vulputate porttitor, arcu turpis ultricies nibh, sit amet efficitur tellus ex ac nunc. Ut a turpis enim. Vivamus congue lobortis mi, ac tincidunt sem dapibus nec. Pellentesque commodo sollicitudin fringilla. Nam tristique elit justo, at scelerisque sem semper a. Etiam quam lectus, consequat ut turpis sed, pretium lacinia purus. Ut ac tortor dapibus, condimentum elit et, sodales tellus. Proin ultrices metus vitae nulla ultrices, a rhoncus sem luctus. Duis nec arcu ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi libero, dictum quis aliquet nec, porttitor ut nisi.

                            Nullam tempus lectus ac porttitor varius. Vestibulum hendrerit enim a condimentum lobortis. Suspendisse pretium enim et enim commodo, sed eleifend augue tristique. Proin finibus auctor leo, nec ullamcorper nulla ornare a. Phasellus metus dui, posuere in nunc venenatis, mollis sodales nisi. Sed facilisis molestie feugiat. Donec nec sem libero. Aenean efficitur tristique tincidunt. Aliquam sit amet erat efficitur, vestibulum ligula at, porta nulla.

                            Praesent lobortis ipsum eu sem tristique, vel gravida velit volutpat. Praesent vitae feugiat mi, sit amet venenatis neque. Fusce malesuada auctor tincidunt. Cras tincidunt libero non ex tempor, ac varius felis aliquet. Pellentesque magna mi, dapibus in lacinia vel, tincidunt sit amet enim. Nulla vitae augue eget est mollis sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi ac accumsan turpis. Morbi cursus dignissim posuere.

                            Aliquam sed mollis lorem, sit amet volutpat risus. Nullam ut odio erat. Proin odio ante, interdum aliquet lectus nec, molestie interdum elit. Nunc ullamcorper vestibulum arcu, in placerat libero elementum vitae. Fusce scelerisque, magna at mollis lacinia, tellus arcu eleifend mi, sed scelerisque nulla ipsum sit amet neque. Duis congue condimentum auctor. Mauris cursus odio in libero hendrerit porttitor. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Donec in ante diam. Vestibulum eget nisl ac tellus vestibulum viverra.

                            Fusce accumsan, mi rhoncus malesuada posuere, felis augue ullamcorper nunc, ut auctor erat mauris in leo. Suspendisse posuere dapibus mollis. Curabitur vel mi a nisi ultricies eleifend ultricies non justo. Praesent varius elementum nisl nec imperdiet. In faucibus tincidunt congue. Fusce vel nunc cursus, facilisis felis id, faucibus sapien. Suspendisse mattis ante purus, quis congue.

                        </p>
                    </main>
                </GridItem>
            </Grid>
        </>
    )
}

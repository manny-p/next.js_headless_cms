import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useEffect, useRef} from 'react';
import {Flex, Grid, GridItem} from '@chakra-ui/react'

const {gsap} = require('gsap/dist/gsap');
const {RoughEase} = require('gsap/dist/EasePack');
const {TextPlugin} = require('gsap/dist/TextPlugin');
gsap.registerPlugin(TextPlugin, RoughEase);

export default function HomePage() {

    let bgRef = useRef(null)
    let hiRef = useRef(null)
    let cursorRef = useRef(null)
    let wordsRef = useRef(null)
    const words = [' Manny', ' a Developer', ' a Creative', ' a Veteran', ' Manny']


    useEffect(() => {
        let boxTimeline = gsap.timeline()

        boxTimeline
            .to(bgRef.current, {
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
            .to(bgRef.current, {
                duration: 1,
                height: '7vw',
                ease: 'elastic.out'
            })
            .to(bgRef.current, {
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

    }, [bgRef, hiRef, wordsRef, cursorRef])

    return (
        <>
            <Head>
                <title>Manny Parra</title>
                <link rel="icon" href={'/favicon.ico'}/>
            </Head>
            <Grid
                h="100vh"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(5, 1fr)"
                gap={2}
            >
                <GridItem rowSpan={2} colSpan={1} bg="black">
                    <aside/>
                </GridItem>
                <GridItem colSpan={4} bg="black">
                    <header>
                        <Flex m={2}>
                            <h1 className={styles.header}>
                                <span ref={bgRef} className={styles.bg}/>
                                {/* eslint-disable-next-line */}
                                <span ref={hiRef} className={styles.hi}>Hi, I'm</span>
                                <span ref={wordsRef} className={styles.words}/>
                                <span ref={cursorRef} className={styles.cursor}>_</span>
                            </h1>
                        </Flex>
                    </header>
                </GridItem>
                <GridItem colSpan={4} bg="black"/>
            </Grid>
        </>
    )
}
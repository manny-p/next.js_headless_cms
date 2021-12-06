import {useContext, useEffect} from 'react'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import {AppContext} from '/src/context/state'
const {gsap} = require('gsap/dist/gsap')
const {RoughEase} = require('gsap/dist/EasePack')
const {TextPlugin} = require('gsap/dist/TextPlugin')

gsap.registerPlugin(TextPlugin, RoughEase)

export default function HomePage() {

  const {bgBoxRef} = useContext(AppContext)
  const {hiRef} = useContext(AppContext)
  const {wordsRef} = useContext(AppContext)
  const {cursorRef} = useContext(AppContext)
  const {words} = useContext(AppContext)

  useEffect(() => {

    const boxTimeline = gsap.timeline()

    boxTimeline
        .to(bgBoxRef.current, {
          duration: 1,
          width: '17vw',
          delay: 0.5,
          ease: 'power4.inOut',
          onComplete: () => wordsTimeline.play() && cursorTimeline.play()
        })
        .from(hiRef.current, {
          duration: 1,
          y: '7vw',
          ease: 'power3.out'
        })
        .to(bgBoxRef.current, {
          duration: 1,
          height: '7vw',
          ease: 'elastic.out'
        })
        .to(bgBoxRef.current, {
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

    const cursorTimeline = gsap.timeline().pause()
    cursorTimeline.to(cursorRef.current, {
      opacity: 0,
      ease: 'power2.inOut',
      repeat: -1,
    })

    const wordsTimeline = gsap.timeline().pause()

    words.map(word => {
      const subTimeline = gsap.timeline({
        repeat: -1,
        yoyo: true,
      })
      subTimeline.to(wordsRef.current, {
        duration: 1,
        text: word,
        delay: 1,

      })
      wordsTimeline.add(subTimeline)
    })

    wordsTimeline.set(wordsRef.current, {
      onComplete: () => wordsTimeline.kill()
    })

  })

  return (
      <Layout>
        <Section/>
      </Layout>
  )
}



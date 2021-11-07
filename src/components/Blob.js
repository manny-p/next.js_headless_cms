import {useContext, useEffect} from 'react'
import {AppContext} from '../context/state'
import styles from '@/styles/Blob.module.scss'


const {gsap} = require('gsap/dist/gsap')
const {MorphSVGPlugin} = require('gsap/dist/MorphSVGPlugin')
gsap.registerPlugin(MorphSVGPlugin)

// MorphSVGPlugin.defaultType = 'rotational'

export default function Blob() {
    const {blobRef1} = useContext(AppContext)
    const {blobRef2} = useContext(AppContext)

    useEffect(() => {
        let svgTimeline = gsap.timeline()

        svgTimeline
            .to(blobRef1.current, {
                duration: 4,
                yoyo: true,
                repeat: -1,
                morphSVG: {
                    shape: blobRef2.current,
                    type: 'rotational',
                    shapeIndex: 1,
                },
                ease: 'slow (0.5, 0.7, false)',
            });
    }, [blobRef1, blobRef2])

    return (
        <div className={styles.svgWrapper}>
            <svg className={styles.svgBlob}
                 id="visual"
                 viewBox="0 0 960 300"
                 width="960"
                 height="300"
                 xmlns="http://www.w3.org/2000/svg"
            >
                <g transform="translate(469.9240852763612 138.39450974795005)"

                >
                    <path
                        id="p1"
                        d="M52 -80C67.2 -60.5 79.2 -45.1 99.4 -22.9C119.5 -0.7 147.7 28.2 150.9 58.4C154 88.7 132.1 120.2 102.8 138.3C73.5 156.5 36.7 161.2 6.7 152C-23.3 142.8 -46.6 119.5 -71.7 100C-96.7 80.5 -123.5 64.6 -129.6 42.8C-135.7 21 -121.1 -6.8 -110.7 -35C-100.2 -63.3 -93.9 -91.9 -76.1 -110.6C-58.4 -129.4 -29.2 -138.2 -5.4 -130.7C18.4 -123.3 36.7 -99.6 52 -80"
                        fill="#1ac7b2"
                        ref={blobRef1}
                    >

                    </path>
                </g>
                <g transform="translate(480.6669583190842 138.24281594753862)"
                   style={{visibility: 'hidden'}}
                >

                    <path
                        id="p2"
                        d="M93 -125C112.5 -113.8 114.7 -75.9 125.8 -41C137 -6.2 156.9 25.6 154.8 55.8C152.6 86.1 128.3 114.6 98.8 132.7C69.4 150.8 34.7 158.4 8.2 147.2C-18.4 136 -36.7 105.9 -58.3 85.2C-79.9 64.6 -104.6 53.3 -124.9 31.1C-145.2 8.9 -161 -24.3 -155 -52.6C-148.9 -80.9 -120.9 -104.4 -91.4 -112.3C-61.9 -120.2 -31 -112.6 2.9 -116.6C36.7 -120.6 73.5 -136.1 93 -125"
                        fill="#1ac7b2"
                        ref={blobRef2}
                    >
                    </path>
                </g>
            </svg>
        </div>
    )
}



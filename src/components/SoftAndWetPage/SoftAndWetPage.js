import React from 'react'
import { useSpring, animated } from 'react-spring'

import Josuke from '../../assets/images/Josuke.png'
import SoftAndWet from '../../assets/images/SoftAndWet.png'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 7}px,${y / 7}px,0)`
const trans3 = (x, y) => `translate3d(${x / 12}px,${y / 12}px,0)`

const SoftAndWetPage = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }))

  return (
    <div
      className="soft-and-wet-page"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <h1 className="title" lang="ja">
        {'ソフト&ウェット'}
      </h1>
      <animated.div
        className="container"
        style={{ transform: props.xy.interpolate(trans1) }}
      >
        <img alt="SoftAndWet" src={SoftAndWet} className="soft-and-wet" />
      </animated.div>
      <animated.div
        className="container"
        style={{ transform: props.xy.interpolate(trans2) }}
      >
        <img alt="Josuke" src={Josuke} className="josuke" />
      </animated.div>
    </div>
  )
}

export default SoftAndWetPage

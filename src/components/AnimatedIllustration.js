import React, { useState, useEffect } from "react"
import cc from "classcat"

import { Illustration } from "./utils"
import { randomIntFromRange } from "./Hero2019"

const AnimatedIllustration = ({
  src,
  name = "random",
  duration = "10s",
  className,
  children,
}) => {
  const [top, setTop] = useState(`${Math.floor(Math.random() * 70)}%`)

  useEffect(() => {
    if (name === "snegle") {
      setTop(`40%`)
    } else {
      setTop(`${Math.floor(Math.random() * 70)}%`)
    }
  }, [name])

  if (typeof window === "undefined") return children

  const delay = `${randomIntFromRange(0, 5)}s`

  return (
    <div
      className={cc({
        AnimatedIllustration: true,
        [className]: className,
      })}
    >
      <Illustration
        src={src}
        className="AnimatedIllustration__illustration"
        style={{
          animationName: `animated-${name}`,
          animationDuration: duration,
          animationDelay: delay,
          top: top,
        }}
      />
      <div className="AnimatedIllustration__content">{children}</div>
    </div>
  )
}

export default AnimatedIllustration

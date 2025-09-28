import { Html } from '@react-three/drei'
import React, { useEffect, useState } from 'react'
import Lottie from 'lottie-react'

const Loader = () => {
  const [animationData, setAnimationData] = useState(null)

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const response = await fetch('/assets/load_ani.json') // Fetch the animation file
        if (!response.ok) throw new Error('Failed to load animation')
        const data = await response.json()
        setAnimationData(data) // Set the animation data once fetched
      } catch (error) {
        console.error('Error loading animation:', error)
      }
    }

    loadAnimation() // Call the async function
  }, [])

  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="w-[10vw] h-[10vw]">
          {animationData ? (
            <Lottie animationData={animationData} loop={true} />
          ) : (
            <div>Loading animation...</div> // Fallback while loading
          )}
        </div>
      </div>
    </Html>
  )
}

export default Loader

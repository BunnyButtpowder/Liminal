import { useProgress } from '@react-three/drei'
import { useEffect, useState } from 'react'
import './LoadingScreen.css'

export function LoadingScreen({ onFinished }) {
  const { progress } = useProgress()
  const [show, setShow] = useState(true)

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        setShow(false)
        onFinished?.()
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [progress, onFinished])

  if (!show) return null

  return (
    <div className={`loading-screen ${progress >= 100 ? 'fade-out' : ''}`}>
      <div className="loading-scanlines" />
      <div className="loading-noise" />
      <div className="loading-vignette" />
      <div className="loading-content">
        <h1 className="loading-title">LIMINAL</h1>
        <div className="loading-bar-container">
          <div className="loading-bar-track">
            <div
              className="loading-bar-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="loading-percent">{Math.round(progress)}%</p>
        </div>
      </div>
      <div className="loading-curve-overlay" />
    </div>
  )
}

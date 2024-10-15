"use client"

import React, { useState, useEffect, useRef } from 'react'
import styles from './InteractiveCube.module.css'

const CubeFace = ({ face, image }: { face: string; image: string }) => (
    <div className={`${styles.cube__face} ${styles[`cube__face--${face}`]}`}>
        <img
            src={image}
            alt={`Cube face ${face}`}
            className={styles.face_image}
            draggable="false"
        />
    </div>
)

interface InteractiveCubeProps {
    image: string;
}

export default function InteractiveCube({ image }: InteractiveCubeProps) {
    const cubeRef = useRef<HTMLDivElement>(null)
    const [rotation, setRotation] = useState({ x: 0, y: 0 })
    const [isDragging, setIsDragging] = useState(false)
    const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging) return

            const deltaX = e.clientX - lastPosition.x
            const deltaY = e.clientY - lastPosition.y

            setRotation(prev => ({
                x: prev.x + deltaY * 0.5,
                y: prev.y - deltaX * 0.5
            }))

            setLastPosition({ x: e.clientX, y: e.clientY })
        }

        const handleMouseUp = () => {
            setIsDragging(false)
        }

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseup', handleMouseUp)
        }
    }, [isDragging, lastPosition])

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault()
        setIsDragging(true)
        setLastPosition({ x: e.clientX, y: e.clientY })
    }

    const handleContextMenu = (e: React.MouseEvent) => {
        e.preventDefault()
    }

    return (
        <div className={styles.scene}>
            <div
                ref={cubeRef}
                className={styles.cube}
                style={{
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
                }}
                onMouseDown={handleMouseDown}
                onContextMenu={handleContextMenu}
            >
                {['front', 'back', 'right', 'left', 'top', 'bottom'].map((face) => (
                    <CubeFace
                        key={face}
                        face={face}
                        image={image}
                    />
                ))}
            </div>
        </div>
    )
}
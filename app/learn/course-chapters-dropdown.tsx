'use client'
import { useState, useRef, useEffect } from 'react'
import { Book, CheckCircle2, ChevronUp, Info, Sparkles, Menu } from "lucide-react"

const chapters = [
    { id: 0, title: "Introduction", icon: Info },
    { id: 1, title: "Getting Started", icon: null },
    { id: 2, title: "CSS Styling", icon: null },
    { id: 3, title: "Optimizing Fonts and Images", icon: null },
    { id: 4, title: "Creating Layouts and Pages", icon: null },
    { id: 5, title: "Navigating Between Pages", icon: null },
    { id: 6, title: "Setting Up Your Database", icon: null },
    { id: 7, title: "Fetching Data", icon: null },
    { id: 8, title: "Static and Dynamic Rendering", icon: null },
    { id: 9, title: "Streaming", icon: null },
    { id: 10, title: "Partial Prerendering", icon: null },
    { id: 11, title: "Adding Search and Pagination", icon: null },
    { id: 12, title: "Mutating Data", icon: null },
    { id: 13, title: "Handling Errors", icon: null },
    { id: 14, title: "Improving Accessibility", icon: null },
    { id: 15, title: "Adding Authentication", icon: null },
    { id: 16, title: "Adding Metadata", icon: null },
    { id: 17, title: "Next Steps", icon: Sparkles },
]

export default function CourseChaptersDropdown() {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <div className="fixed top-8 left-0 right-0 z-50 mx-8" ref={dropdownRef}>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg shadow-lg">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="bg-white text-black p-1 rounded">
                            <Book size={20} />
                        </div>
                        <div>
                            <h2 className="font-semibold">Learn Next.js</h2>
                            <p className="text-sm text-gray-400">1/16 chapters</p>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-expanded={isOpen}
                        aria-controls="chapters-menu"
                    >
                        <Menu size={24} />
                        <span className="sr-only">Toggle chapters menu</span>
                    </button>
                </div>
                {isOpen && (
                    <div
                        id="chapters-menu"
                        className="mt-4 space-y-2 max-h-[calc(100vh-8rem)] overflow-y-auto"
                        role="menu"
                    >
                        {chapters.map((chapter) => (
                            <button
                                key={chapter.id}
                                className="flex items-center space-x-3 p-2 rounded hover:bg-gray-800 w-full text-left"
                                role="menuitem"
                            >
                                {chapter.icon ? (
                                    <chapter.icon size={24} className="text-blue-500 flex-shrink-0" />
                                ) : (
                                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-sm font-medium flex-shrink-0">
                                        {chapter.id}
                                    </div>
                                )}
                                <span className="flex-grow">{chapter.title}</span>
                                {chapter.id === 1 && <CheckCircle2 size={20} className="text-blue-500 flex-shrink-0" />}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
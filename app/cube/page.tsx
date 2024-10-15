"use client"

import { useState } from 'react'
import InteractiveCube from './InteractiveCube'

export default function InteractiveCubePage() {
    const [imageUrl, setImageUrl] = useState("https://media.codingcat.dev/image/upload/c_limit,w_1080/f_auto/q_auto/v1/main-codingcatdev-photo/headshots/cool-calm-alex?_a=BAVFB+DW0")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const newImageUrl = formData.get('imageUrl') as string
        if (newImageUrl) {
            setImageUrl(newImageUrl)
        }
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4">
            <form onSubmit={handleSubmit} className="mb-8 w-full max-w-md">
                <div className="flex items-center border-b border-gray-500 py-2">
                    <input
                        className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Enter image URL"
                        aria-label="Image URL"
                        name="imageUrl"
                        defaultValue={imageUrl}
                    />
                    <button
                        className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
                        type="submit"
                    >
                        Update Image
                    </button>
                </div>
            </form>
            <InteractiveCube image={imageUrl} />
        </div>
    )
}
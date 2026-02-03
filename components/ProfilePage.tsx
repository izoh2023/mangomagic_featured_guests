"use client"

import type React from "react"
import { useState } from "react"
import Image, { StaticImageData } from "next/image"
import { PlayCircle, Music, Mic, Video, Heart, ArrowRight } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

// Type Definitions
export type MediaItem = {
  title: string
  type: "video" | "audio" | "videolist"
  thumbnail: string
  icon: "PlayCircle" | "Music" | "Mic" | "Video"
  embedUrl: string | string[]
  description?: string
}

export type WorkflowItem = {
  title: string
  nodes: string[]
  description: string
}

export type ProfilePageProps = {
  // Hero Section
  profileImage:  StaticImageData
  name: string
  highlightWord: string // The word to highlight in gold (e.g., "Shai")
  tagline: string
  
  // Media Section
  mediaSectionTitle: string
  mediaSectionHighlight: string // The word to highlight (e.g., "Magic")
  mediaContent: MediaItem[]
  
  // Workflows Section
  workflowSectionTitle: string
  workflowSectionHighlight: string // The word to highlight (e.g., "Workflows")
  workflows: WorkflowItem[]
  workflowCTAText: string
  workflowCTAUrl: string
  
  // Highlights (for videolist type)
  highlightTitles?: string[]
  
  // Footer
  footerYear: string
  footerText: string
  
  // Colors (optional - defaults to gold theme)
  accentColor?: string
}

const iconMap = {
  PlayCircle,
  Music,
  Mic,
  Video,
}

export default function ProfilePage({
  profileImage,
  name,
  highlightWord,
  tagline,
  mediaSectionTitle,
  mediaSectionHighlight,
  mediaContent,
  workflowSectionTitle,
  workflowSectionHighlight,
  workflows,
  workflowCTAText,
  workflowCTAUrl,
  highlightTitles = [],
  footerYear,
  footerText,
  accentColor = "#F1ab1c",
}: ProfilePageProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState<MediaItem | null>(null)

  const openModal = (item: MediaItem) => {
    setModalContent(item)
    setModalOpen(true)
  }

  // Helper function to highlight specific words in text
  const renderHighlightedText = (text: string, highlight: string, color: string) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'))
    return (
      <>
        {parts.map((part, index) => 
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={index} style={{ color }}>{part}</span>
          ) : (
            <span key={index}>{part}</span>
          )
        )}
      </>
    )
  }

  return (
    <div className="bg-black text-white font-light-body">
      <main>
        {/* Hero Section */}
        <section className="relative text-center h-[70vh] md:h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="relative z-20 p-4 flex flex-col items-center">
            <div className="mb-8">
              <div 
                className="relative w-[200px] h-[200px] rounded-full border-4 shadow-2xl overflow-hidden"
                style={{ borderColor: accentColor }}
              >
                <Image
                  src={profileImage}
                  alt={name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold-title tracking-tight text-white">
              {renderHighlightedText(name, highlightWord, accentColor)}
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-white font-light-body">
              {tagline}
            </p>
          </div>
        </section>

        {/* Media Content Section */}
        <section id="media" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl text-center mb-12 text-black font-bold-title">
              {renderHighlightedText(mediaSectionTitle, mediaSectionHighlight, accentColor)}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {mediaContent.map((item) => {
                const IconComponent = iconMap[item.icon]
                return (
                  <div
                    key={item.title}
                    className="group relative rounded-lg overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300 bg-white"
                    onClick={() => openModal(item)}
                  >
                    <div className="aspect-video relative">
                      <Image 
                        src={item.thumbnail || "/placeholder.svg"} 
                        alt={item.title} 
                        fill 
                        className="object-cover" 
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300 flex flex-col items-center justify-center p-4">
                        <IconComponent 
                          className="w-16 h-16 opacity-80 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-300"
                          style={{ color: accentColor }}
                        />
                        <h3 className="mt-4 text-xl text-center text-white font-bold-title">{item.title}</h3>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Automation Workflows Section */}
        <section id="workflows" className="py-16 md:py-24 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl text-center mb-12 text-white font-bold-title">
              {renderHighlightedText(workflowSectionTitle, workflowSectionHighlight, accentColor)}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {workflows.map((flow) => (
                <div
                  key={flow.title}
                  className="bg-white p-6 rounded-xl border border-gray-200 shadow-xl flex flex-col hover:shadow-2xl transition-shadow duration-300 min-h-[600px]"
                >
                  <h3 
                    className="text-xl mb-4 leading-tight font-bold-title"
                    style={{ color: accentColor }}
                  >
                    {flow.title}
                  </h3>

                  {/* Workflow Steps - Vertical Layout */}
                  <div className="mb-6 space-y-3 max-h-80 overflow-y-auto">
                    {flow.nodes.map((node, index) => (
                      <div key={node} className="flex items-center">
                        <div 
                          className="flex items-center justify-center w-6 h-6 text-white text-xs font-bold-title rounded-full mr-3 flex-shrink-0"
                          style={{ backgroundColor: accentColor }}
                        >
                          {index + 1}
                        </div>
                        <span className="bg-gray-100 text-gray-800 px-3 py-2 rounded-lg border border-gray-200 text-sm flex-grow font-light-body">
                          {node}
                        </span>
                        {index < flow.nodes.length - 1 && (
                          <div className="ml-3 flex flex-col items-center">
                            <ArrowRight 
                              className="w-4 h-4 transform rotate-90"
                              style={{ color: accentColor }}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <p className="text-gray-800 text-sm flex-grow leading-relaxed font-light-body">
                    {flow.description}
                  </p>
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <a
                      href={workflowCTAUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full text-white font-bold-title py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105"
                      style={{ 
                        backgroundColor: accentColor,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = '0.9'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = '1'
                      }}
                    >
                      {workflowCTAText}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-center py-6">
        <p className="text-white flex items-center justify-center gap-2 font-light-body">
          {footerYear} {footerText} <Heart className="w-4 h-4" style={{ color: accentColor }} /> by ManyMangoes
        </p>
      </footer>

      {modalContent && (
        <Dialog open={modalOpen} onOpenChange={setModalOpen}>
          <DialogContent className="bg-white border-gray-300 text-black max-w-6xl w-full p-0 max-h-[90vh] overflow-y-auto">
            <DialogHeader className="p-4 border-b border-gray-300">
              <DialogTitle 
                className="font-bold-title"
                style={{ color: accentColor }}
              >
                {modalContent.title}
              </DialogTitle>
              {modalContent.description && (
                <p className="text-gray-600 font-light-body mt-2">{modalContent.description}</p>
              )}
            </DialogHeader>
            <div className="p-1 md:p-2">
              {modalContent.type === "video" && (
                <div className="aspect-video">
                  <iframe
                    src={modalContent.embedUrl as string}
                    className="w-full h-full rounded-b-lg"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title={modalContent.title}
                  />
                </div>
              )}
              {modalContent.type === "audio" && (
                <div className="flex flex-col items-center justify-center p-8">
                  <div className="mb-6">
                    <Music className="w-24 h-24" style={{ color: accentColor }} />
                  </div>
                  <div className="aspect-video w-full max-w-2xl">
                    <iframe
                      src={modalContent.embedUrl as string}
                      className="w-full h-full rounded-lg"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      title={modalContent.title}
                    />
                  </div>
                </div>
              )}
              {modalContent.type === "videolist" && (
                <div className="max-h-[70vh] overflow-y-auto p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {(modalContent.embedUrl as string[]).map((url, index) => (
                      <div
                        key={url}
                        className="flex flex-col bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="mb-3 text-center">
                          <h4 className="text-black font-bold-title text-sm leading-tight min-h-[2.5rem] flex items-center justify-center">
                            {highlightTitles[index] || `Highlight ${index + 1}`}
                          </h4>
                        </div>
                        <div className="aspect-[9/16] rounded-lg overflow-hidden">
                          <iframe
                            src={url}
                            className="w-full h-full"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            title={highlightTitles[index] || `Highlight ${index + 1}`}
                          />
                        </div>
                        <div className="mt-2 text-center">
                          <span 
                            className="inline-flex items-center justify-center w-6 h-6 text-white text-xs font-bold-title rounded-full"
                            style={{ backgroundColor: accentColor }}
                          >
                            {index + 1}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
export type SampleType = "video" | "iframe"

export interface WorkSample {
  id: string
  title: string
  description: string
  solution: string
  industry?: string
  type: SampleType
  url: string
  thumbnail?: string
  featured?: boolean
}

export const samples: WorkSample[] = [
  {
    id: "sample-01",
    title: "Digital Learning Experience",
    description: "Interactive digital learning experience showcasing modern design.",
    solution: "Custom eLearning",
    industry: "Healthcare",
    type: "video",
    url: "https://maple.maplelearningsolutions.com/wp-content/V1-Presentation_Clip.mp4",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: "sample-02",
    title: "Interactive Learning Experience",
    description: "Interactive HTML learning experience.",
    solution: "Custom eLearning",
    industry: "Technology",
    type: "iframe",
    url: "https://maple.maplelearningsolutions.com/wp-content/Apollo%20Tyres%20(2)/story.html",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "sample-03",
    title: "Website Learning Experience",
    description: "Interactive website showcase.",
    solution: "LMS",
    industry: "Banking & Financial Services",
    type: "iframe",
    url: "https://cenariovr.com/app/#/view/5n2",
    thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
]

export const categories = [
  "All",
  "Custom eLearning",
  "LMS",
  "Gamification",
  "Instructional Design",
  "VR / AR",
  "AI Learning",
  "Corporate Training",
  "Learning Consulting"
]

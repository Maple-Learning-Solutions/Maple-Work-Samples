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
    id: "sample-vr-01",
    title: "CenarioVR Experience",
    description: "Immersive 360° virtual reality training scenario.",
    solution: "VR / AR",
    industry: "Manufacturing",
    type: "iframe",
    url: "https://cenariovr.com/app/#/view/6cj",
    thumbnail: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=2070&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "sample-vr-02",
    title: "Virtual Environment Training",
    description: "Interactive learning in a simulated virtual space.",
    solution: "VR / AR",
    industry: "Banking & Financial Services",
    type: "iframe",
    url: "https://cenariovr.com/app/#/view/5n2",
    thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: "sample-video-01",
    title: "Find the Way",
    description: "Animated instructional video explaining complex workflows.",
    solution: "Video Learning",
    industry: "Technology",
    type: "video",
    url: "https://samples.maplelearningsolutions.com/samples/Find%20the%20Way.mp4",
    thumbnail: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=2070&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "sample-video-02",
    title: "Space Exploration",
    description: "Engaging visual narrative for onboarding programs.",
    solution: "Video Learning",
    industry: "Education",
    type: "video",
    url: "https://samples.maplelearningsolutions.com/samples/Space%20Exploration.mp4",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "sample-elearning-01",
    title: "Digital Learning Experience",
    description: "Interactive digital learning experience showcasing modern design.",
    solution: "Custom eLearning",
    industry: "Healthcare",
    type: "video",
    url: "https://maple.maplelearningsolutions.com/wp-content/V1-Presentation_Clip.mp4",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "sample-elearning-02",
    title: "Interactive SCORM Module (Level 2)",
    description: "Interactive HTML learning experience.",
    solution: "Custom eLearning",
    industry: "Technology",
    type: "iframe",
    url: "https://maple.maplelearningsolutions.com/wp-content/Apollo%20Tyres%20(2)/story.html",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "sample-elearning-03",
    title: "Customer Service Excellence (Level 1)",
    description: "Interactive customer service training module.",
    solution: "Custom eLearning",
    industry: "Customer Service",
    type: "iframe",
    url: "https://maple.maplelearningsolutions.com/wp-content/Customer%20Service%20Excellence%20Training%20New/story.html",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "video-learning-01",
    title: "Digital Learning Experience",
    description: "Interactive digital learning experience showcasing modern design.",
    solution: "Custom eLearning",
    industry: "Healthcare",
    type: "video",
    url: "https://samples.maplelearningsolutions.com/samples/Find%20the%20Way.mp4",
    thumbnail: "https://maple.maplelearningsolutions.com/wp-content/V1-Presentation_Clip.mp4",
  },
  {
    id: "sample-pharma-vr-demo",
    title: "Pharma VR Demo",
    description: "Virtual reality demonstration for pharmaceutical applications.",
    solution: "VR / AR",
    industry: "Healthcare",
    type: "video",
    url: "https://samples.maplelearningsolutions.com/samples/Pharma%20VR%20demo%20video.mp4",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "sample-memory-flash-card",
    title: "Memory Flash Card",
    description: "Interactive gamified memory flash card experience.",
    solution: "Gamification",
    industry: "Cross-Industry",
    type: "iframe",
    url: "https://mapledemo.s3.eu-north-1.amazonaws.com/Memory+Flash+Card/story.html",
    thumbnail: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
  }
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

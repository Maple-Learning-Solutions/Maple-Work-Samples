export interface Testimonial {
  quote: string
  name: string
  designation: string
  company: string
  image?: string
}

export const testimonials: Testimonial[] = [
  {
    quote: "Working with Maple Learning Solutions was a seamless experience from planning to delivery. The team was professional, communicative, and open to feedback. The training was engaging, well-structured, and exceeded our expectations. We look forward to working with Maple again.",
    name: "Sr. Manager | L&D",
    designation: "",
    company: "Silver Skills",
  },
  {
    quote: "Collaborating with Maple Learning Solutions was an exceptional experience. Their professionalism, creativity, and technical expertise made the entire process smooth and effective. The engaging eLearning solutions improved learner engagement and performance, and we look forward to future partnerships.",
    name: "Fatima Hassan",
    designation: "Operations Manager",
    company: "Prime Health Group",
  },
  {
    quote: "Maple Learning Solutions transformed our training effectiveness. Their AI-powered platform increased learner engagement by 300%, reduced training time by 40%, and significantly improved knowledge retention.",
    name: "Samantha Lee",
    designation: "Training Manager",
    company: "NovaTech Inc.",
  },
  {
    quote: "Maple’s AI-powered platform delivered a personalized learning experience that exceeded our expectations. We saw immediate improvements in employee performance along with a significant increase in training completion rates.",
    name: "Rachel Kim",
    designation: "HR Manager",
    company: "Apex Solutions",
  }
]

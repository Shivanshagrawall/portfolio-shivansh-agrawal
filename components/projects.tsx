"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    logo: "/matchwize.svg",
    title: "CrafttAI - Text to Image AI SAAS App",
    description:
      "Imagify turns your text prompts into stunning, AI-generated images in real time—offering style presets, adjustable quality settings, and easy download options to bring your creative ideas to life.",
    image: "/Text-to-Image-Convertor.webp",
    tags: ["React.js" ,"Node.js", "Express.js", "Tailwind CSS", "Mongodb","ClipDrop API", "Rozarpay"],
    demoUrl: "https://imagify-frontent.vercel.app/",
    githubUrl: "https://github.com/Shivanshagrawall/Imagify",
    features: [
      "Real-time image generation from text prompts",
      "Easy download options to effortlessly turn your creative ideas into reality.",
      "5 free credit points included in the free plan for image generation",
      "Razorpay integration for purchasing more credits",
    ],
  },
  {
    logo: "/englishexpresswayLogo.svg",
    title: "Learnzo - Learning Platform",
    description:
      "An online platform to upload and purchase courses to upskill, featuring user authentication and Stripe payment integration.",
    image: "/lms.webp",
    tags: ["React.js" ,"Node.js", "Express.js", "Tailwind CSS", "Mongodb","Cloudinary", "Clerk", "Stripe"],
    demoUrl: "https://lms-frontent-one.vercel.app/",
    githubUrl: "https://github.com/Shivanshagrawall/learning_platform",
    features: [
      "User authentication with Clerk for secure login",
      "Integrated Stripe for payment transactions",
      "Responsive landing page with course listings",
      "User dashboard for enrolled courses",
      "Admin dashboard for content management",
    ],
  },
  {
    logo: "/exceedroboticsLogo.png",
    title: "Chatify - Real-time Messaging & Image Sharing Platform",
    description:
      "A real‑time messaging application that lets users exchange text and images instantly, featuring live online/offline presence indicators, secure JWT‑protected access, and a responsive, user‑friendly interface.",
    image: "/Chatify.webp",
    tags: ["React.js" ,"Node.js", "Express.js", "Tailwind CSS", "Mongodb","Cloudinary", "Socket.io"],
    demoUrl: "https://chat-application-client-rouge.vercel.app/",
    githubUrl: "https://github.com/Shivanshagrawall/ChatApplication",
    features: [
      "Live bidirectional messaging with real-time presence tracking",
      "Secure RESTful APIs with JWT and bcrypt hashing",
      "Image uploads to Cloudinary with CDN delivery",
      "Responsive interface with Tailwind CSS design",
      "Environment variables configuration with secure CORS setup",
    ],
  },
  {
    logo: "/thankquizLogo.svg",
    title: "Crypto Tracking",
    description:
      "A real-time cryptocurrency tracking app that provides live price updates, historical data, and market trends for various cryptocurrencies.",
    image: "/crypto.webp",
    tags: ["ReactJS", "Tailwind CSS" , "CoinGecko API"],
    demoUrl: "https://cryptoplace-amber.vercel.app/",
    githubUrl: "https://github.com/Shivanshagrawall/Cryptoplace",
    features: [
      "Real-time cryptocurrency price tracking",
      "Historical data visualization with charts",
      "Search functionality for specific cryptocurrencies",
      "Market trends and insights",
      "Responsive design for mobile and desktop",
    ],
  },
  {
    logo: "/humanitycarefoundationLogo.svg",
    title: "NORA - AI Assistant",
    description:
      "A real-time, voice-enabled AI assistant powered by Gemini API, delivering natural conversational replies instantly through seamless voice interaction.",
    image: "/nora.webp",
    tags: ["React.js", "Gemini API", "Tailwind CSS", ],
    demoUrl: "https://shivanshagrawall.github.io/Nora-Virtual-Assistant/",
    githubUrl: "https://github.com/Shivanshagrawall/Nora-Virtual-Assistant",
    features: [
      "Real-time voice interaction with AI assistant",
      "Powered by Gemini API for natural language processing",
      "Instant replies to user queries",
      "Responsive design for seamless user experience",
      "Intuitive interface for easy navigation",
    ]
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-6 border rounded-xl overflow-hidden group"
            >
              <div className="overflow-hidden relative h-[300px] md:h-full border-b md:border-b-0 md:border-r">
                <div className="absolute inset-0 overflow-y-auto scrollbar-hide">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={1200}
                    className="w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Key Features:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 pt-2">
                  <Button size="sm">
                    <Link
                      href={project.demoUrl}
                      className="flex items-center"
                      target="_blank"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Live
                    </Link>
                  </Button>
                  {
                    project.githubUrl && (
                      <Button size="sm" variant="outline">
                        <Link
                          href={project.githubUrl}
                          className="flex items-center"
                          target="_blank"
                        >
                          <Github className="mr-2 h-4 w-4" /> Code
                        </Link>
                      </Button>
                    )
                  }
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
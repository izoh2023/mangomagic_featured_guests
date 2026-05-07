
import ProfilePage from "@/components/ProfilePage"
import profileImg from "./Anthony Perl Profile Picture.jpg"

const pageData = {
  profileImage: profileImg,
  name: "Anthony Perl ",
  highlightWord: "Anthony",
  tagline: "Exploring the art of automation and AI-powered creativity.",

  mediaSectionTitle: "Discover The Magic",
  mediaSectionHighlight: "Magic",
  mediaContent: [
    {
      title: "Full Interview",
      type: "video" as const,
      thumbnail: "/images/Full-Interview.png",
      icon: "PlayCircle" as const,
      embedUrl: "https://drive.google.com/file/d/1EnyzTJVmmd_lbaKTJmf78TqFU80Cldlz/preview",
      description: "Complete interview with Anthony Perl "
    },
    {
      title: "Amazing Song",
      type: "audio" as const,
      thumbnail: "/images/Amazing-Song.png",
      icon: "Music" as const,
      embedUrl: "https://drive.google.com/file/d/1GV6dpM8ffTekE8c4DvVrBLiytuYqLQTo/preview",
      description: "Anthony Perl 's magical musical creation"
    },
    {
      title: "Speaker Introduction",
      type: "video" as const,
      thumbnail: "/images/Introduction.png",
      icon: "Mic" as const,
      embedUrl: "https://drive.google.com/file/d/1q8Um-g_A_9gBn-gFS7MqxF07Jq6hWWmS/preview",
      description: "Introduction to Anthony Perl "
    },
    {
      title: "Interview Highlights",
      type: "videolist" as const,
      thumbnail: "/images/Highlights.png",
      icon: "Video" as const,
      embedUrl: [
        "https://drive.google.com/file/d/17LV2GLGhgMi2hpC2iaV7UpSSBMRzWpeB/preview",
        "https://drive.google.com/file/d/1Mu-cMHAEqVZcgg6rGdQeiEsz1L4uq1m1/preview",
        "https://drive.google.com/file/d/1KFFluJWif9WnN2klAzsYU9blDXkS7t8C/preview",
        "https://drive.google.com/file/d/1So33IPS6YMBjFIc83JhJRQcLPd9-BW5h/preview",
        "https://drive.google.com/file/d/19lpP-lF34vJUaPoxzmXfUtj7yIojgy_C/preview",
        "https://drive.google.com/file/d/1ACbGwvBA35pyh2OS6NNzNi6iYrLdzdy6/preview",
        "https://drive.google.com/file/d/14wIGAl_FVf1FBqmhc8M7RXUVRelPToNf/preview",
        "https://drive.google.com/file/d/1fw0v9XE8taVEiEezXO_bcTfRE9UEy4h-/preview",
        "https://drive.google.com/file/d/13npOLYPKU98AZoczoLKDBEGWKDV2nbUJ/preview",
        "https://drive.google.com/file/d/1QzuapwfVP1QZRCQkRPoig-1Th46fRV1d/preview",
        "https://drive.google.com/file/d/1JWZyyv4smgXhr5ZnvgloBryeOQtUutDC/preview",
        "https://drive.google.com/file/d/112jY0fwRxy44dlOSG1fXOrG1u7Zvotqc/preview",
        "https://drive.google.com/file/d/1LPWwhATyknat9iKYCXV65QmTwI-DS5AC/preview",
        "https://drive.google.com/file/d/1qeZ3a6ySDOgSIrIu8-Wq2_Se5kkb-3Bk/preview",
        "https://drive.google.com/file/d/19SqI0AwWqlMpu9pQlZACXXsDpmNqzwla/preview"
      ],
      description: "Key moments and insights from the interview"
    }
  ],

  workflowSectionTitle: "Automation Workflows",
  workflowSectionHighlight: "Workflows",
  workflows: [
    {
      title: "Podcast Content Repurposing",
      nodes: ["Webhook", "Podcast Transcription Service", "Data Parser", "Markdown to HTML Converter", "Social Media Post Generator", "Blog Post Generator", "Workbook PDF Generator", "Newsletter Generator", "Quality Control Node", "Error Handling Node"],
      description: "Automated creation of multiple content types from podcast transcripts. Alleviates manual content creation processes and ensures consistent branding across different platforms."
    },
    {
      title: "Social Media Engagement Automation",
      nodes: ["Webhook", "Social Media Post Scheduler", "Engagement Monitoring Tool", "AI Response Generator", "Direct Messaging Automation", "Content Sharing Automation", "Analytics Tracker", "Quality Control Node", "Error Handling Node", "Notification System"],
      description: "Automates social media postings and engagement with audience. Addresses the need for consistent engagement while minimizing time spent on social media management."
    },
    {
      title: "AI Training Program Content Automation",
      nodes: ["Webhook", "Podcast Transcription Service", "Training Document Generator", "PDF Formatter", "Feedback Collection Tool", "Analytics Tracker", "Quality Control Node", "Error Handling Node", "Email Notification", "Distribution Service"],
      description: "Generates training materials based on podcast content. Facilitates streamlined content delivery for educational programs and ensures quality and relevance in training materials."
    },
    {
      title: "Content Database Generation",
      nodes: ["Webhook", "Web Archive Content Fetcher", "Data Organizer", "Markdown to HTML Converter", "Media Asset Indexer", "Metadata Enricher", "Quality Control Node", "Error Handling Node", "Storage Service", "Notification System"],
      description: "Builds a comprehensive database of past content from archived web pages. Streamlines access to old materials and enhances discoverability of historical data."
    },
    {
      title: "AI-Driven Flight Booking Automation",
      nodes: ["Webhook", "Travel Search API", "AI Recommendation Engine", "User Interaction Tracker", "Itinerary Generator", "Notification System", "Quality Control Node", "Error Handling Node", "Email Summary Generator", "Calendar Integration"],
      description: "Automates travel planning by providing curated flight options. Enhances user experience by providing tailored options without manual searches, saving time for users."
    },
    {
      title: "Client Meeting Scheduling Automation",
      nodes: ["Webhook", "Calendar Integration", "Preference Gathering Tool", "Time Slot Availability Checker", "Automated Invite Generator", "Reminder System", "Quality Control Node", "Error Handling Node", "Follow-up Email Generator", "Analytics Tracker"],
      description: "Automates scheduling of client meetings based on mutual availability. Reduces back-and-forth communication regarding schedules and improves efficiency in setting appointments."
    }
  ],

  workflowCTAText: "Build the Magic",
  workflowCTAUrl: "https://mangomagic.life/book",
  footerYear: "2026",
  footerText: "Made with",
  accentColor: "#F1ab1c"
}

export default function GeneratedPage() {
  return <ProfilePage {...pageData} />
}

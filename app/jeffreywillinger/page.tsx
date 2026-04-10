
import ProfilePage from "@/components/ProfilePage"
import profileImg from "./Jeffrey Willinger Profile Pic.jpg"

const pageData = {
  profileImage: profileImg,
  name: "Jeffrey Willinger",
  highlightWord: "Jeffrey",
  tagline: "Exploring the art of automation and AI-powered creativity.",

  mediaSectionTitle: "Discover The Magic",
  mediaSectionHighlight: "Magic",
  mediaContent: [
    {
      title: "Full Interview",
      type: "video" as const,
      thumbnail: "/images/Full-Interview.png",
      icon: "PlayCircle" as const,
      embedUrl: "https://drive.google.com/file/d/1a-QxTkjS67EoZgsPHiFxRJ7JJ8iygfvP/preview",
      description: "Complete interview with Jeffrey Willinger"
    },
    {
      title: "Amazing Song",
      type: "audio" as const,
      thumbnail: "/images/Amazing-Song.png",
      icon: "Music" as const,
      embedUrl: "https://drive.google.com/file/d/1cMdQNMOv_xkzAYNPNhqx98WPaRR8KhgT/preview",
      description: "Jeffrey Willinger's magical musical creation"
    },
    {
      title: "Speaker Introduction",
      type: "video" as const,
      thumbnail: "/images/Introduction.png",
      icon: "Mic" as const,
      embedUrl: "https://drive.google.com/file/d/1BV5uUEMcMzQTIAPZZKKxH2VqQqOWqpGm/preview",
      description: "Introduction to Jeffrey Willinger"
    },
    {
      title: "Interview Highlights",
      type: "videolist" as const,
      thumbnail: "/images/Highlights.png",
      icon: "Video" as const,
      embedUrl: [
        "https://drive.google.com/file/d/1UvE8uml4YL_4WRLj2Hh0zCS1R-8UhVYN/preview",
        "https://drive.google.com/file/d/1L5qEYnTZSRB2QAgKQEkih_IHuDKRl-qD/preview",
        "https://drive.google.com/file/d/1JkXZf2teKdXEUyuXYgJWJ97tEbgqAHTU/preview",
        "https://drive.google.com/file/d/1vEqeC0PF529AUlZHMUFvumLAC3gmnvLL/preview",
        "https://drive.google.com/file/d/1rDjnaJo_GjIFzpqHZvXTKzvwHCfFIAT1/preview",
        "https://drive.google.com/file/d/1032rh2aAM8cjqlXPH83rdOqaRQEvXmiS/preview",
        "https://drive.google.com/file/d/1wS-8xeM_BpTcOTeFjVNI4ulpJ_oP5I3L/preview",
        "https://drive.google.com/file/d/1IL55f8UiGTqTbhMeYZiDPvjLS9DxddCI/preview",
        "https://drive.google.com/file/d/1TTP7DBCmNvZdwenLf-Mp81kQO7SBlxVP/preview",
        "https://drive.google.com/file/d/1k8VgWTQs8dZjGECfuYtdkoNYkXbVNJa4/preview",
        "https://drive.google.com/file/d/1WvJCgr5On5PGOIITAocbILY5z32gH0s3/preview",
        "https://drive.google.com/file/d/1Me23EA-fU4qfiUGU-W_Lh0XyoHhzRpWF/preview",
        "https://drive.google.com/file/d/1qft6BB7Etn-iZrZrkDAF4w6IGtn3UAjD/preview",
        "https://drive.google.com/file/d/1jUf6-fc3PZTEIwPdnqlUQyJ70bPGw1hv/preview",
        "https://drive.google.com/file/d/1rScloYi6YXFUJW2zM-JTW27vsG1QU-2-/preview",
        "https://drive.google.com/file/d/1TRHoqEruigC4BPHvraYrcjs62R1n_ggl/preview"
      ],
      description: "Key moments and insights from the interview"
    }
  ],

  workflowSectionTitle: "Automation Workflows",
  workflowSectionHighlight: "Workflows",
  workflows: [
    {
      title: "Lead Generation via LinkedIn",
      nodes: ["Start", "HTTP Request (get list of top companies in Denver)", "Code (filter companies that are Microsoft customers)", "HTTP Request (get LinkedIn profiles and emails for identified contacts)", "LinkedIn (send connection request with personalized message)", "Email (send introductory email)", "Error Handling (notify if no replies after one week)", "Quality Control (review engagement stats)", "Formatter (extract relevant data for follow-up)", "End"],
      description: "Description of automation outcome: Generates leads by identifying potential clients and reaching out via LinkedIn and email. Description of pain points alleviated: Reduces time spent on manual lead research and outreach while ensuring personalized communication."
    },
    {
      title: "Meeting Preparation",
      nodes: ["Start", "HTTP Request (get details of scheduled meetings)", "Google Calendar (retrieve particulars about meeting attendees)", "HTTP Request (fetch company information and recent news)", "AI Assistant (generate discussion topics tailored to the client)", "Formatter (condense generated topics into a bullet point list)", "Quality Control (cross-check topics with CRM for relevance)", "Notification (alert when meeting is approaching)", "Google Docs (create meeting notes template)", "End"],
      description: "Description of automation outcome: Prepares a tailored agenda for meetings with potential clients. Description of pain points alleviated: Ensures comprehensive preparation for meetings, boosting confidence and engagement."
    },
    {
      title: "Booking Recreation Courts",
      nodes: ["Start", "HTTP Request (get current date and time)", "Code (calculate eligible booking time for the pickleball court)", "HTTP Request (check availability of the court)", "Notification (send alert when booking opportunity opens)", "Code (automation to book court)", "Quality Control (confirm booking)", "Notification (send confirmation to user and group)", "Calendar (add event for team)", "End"],
      description: "Description of automation outcome: Automatically books a pickleball court when eligibility criteria are met. Description of pain points alleviated: Eliminates manual booking process, ensuring timely reservation of desired recreational activities."
    },
    {
      title: "Creating an AI Center of Excellence",
      nodes: ["Start", "HTTP Request (initial survey for organizational needs)", "AI Assistant (analyze responses to identify key business use cases)", "Quality Control (check alignment with business goals)", "Project Management Tool (create project timeline)", "Notification (update stakeholders with development plans)", "Form Builder (create readiness assessment for employees)", "Code (compile readiness results for presentation)", "Google Docs (draft presentation materials)", "Quality Control (peer review of materials)", "End"],
      description: "Description of automation outcome: Establishes structured processes for implementing an AI center of excellence within the organization. Description of pain points alleviated: Provides a clear roadmap for understanding organizational AI capabilities and needs, facilitating better stakeholder engagement."
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


import ProfilePage from "@/components/ProfilePage"
import profileImg from "./Randolph Barr.jpg"

const pageData = {
  profileImage: profileImg,
  name: "Randolph Barr ",
  highlightWord: "Randolph",
  tagline: "Exploring the art of automation and AI-powered creativity.",

  mediaSectionTitle: "Discover The Magic",
  mediaSectionHighlight: "Magic",
  mediaContent: [
    {
      title: "Full Interview",
      type: "video" as const,
      thumbnail: "/images/Full-Interview.png",
      icon: "PlayCircle" as const,
      embedUrl: "https://drive.google.com/file/d/11MLDKPrtpMAqekMlUsz7qfBqVXdD9i-q/preview",
      description: "Complete interview with Randolph Barr "
    },
    {
      title: "Amazing Song",
      type: "audio" as const,
      thumbnail: "/images/Amazing-Song.png",
      icon: "Music" as const,
      embedUrl: "https://drive.google.com/file/d/1lWF9XsiAiqDYWAgLicAFO21AIbcg6Gio/preview",
      description: "Randolph Barr 's magical musical creation"
    },
    {
      title: "Speaker Introduction",
      type: "video" as const,
      thumbnail: "/images/Introduction.png",
      icon: "Mic" as const,
      embedUrl: "https://drive.google.com/file/d/12fNGFhiGt0EAzU5LxcZXPE477JoWVIzT/preview",
      description: "Introduction to Randolph Barr "
    },
    {
      title: "Interview Highlights",
      type: "videolist" as const,
      thumbnail: "/images/Highlights.png",
      icon: "Video" as const,
      embedUrl: [
        "https://drive.google.com/file/d/1JTsr2EOeJahLCjUS3Um-VTyHY0EVSZg7/preview",
        "https://drive.google.com/file/d/1Ea_SnMYtipKzdnyqWQvme7QJWTrof1If/preview",
        "https://drive.google.com/file/d/1WgFFYXsdCZHzBL11v1o1wV1x7L1ObHmT/preview",
        "https://drive.google.com/file/d/1HTkjxq3hhFraLPRPsH-AudJdxGtnmUSn/preview",
        "https://drive.google.com/file/d/1JZ4OJxmnGf3bAUN4NkkkyR8yOc8Mxwqp/preview",
        "https://drive.google.com/file/d/1XGsd3S7GU31x_LVa4hAdO7pNmVXexp0Q/preview",
        "https://drive.google.com/file/d/11cn_GucsPvbIfJOtROXqQbcbAy9GD0g6/preview",
        "https://drive.google.com/file/d/1zTHjjUE86bZWZVTBZbTiKylotA1PjXcw/preview",
        "https://drive.google.com/file/d/1QgHyHz5R89dayTTcGF8biGc26Gmn5ZrN/preview",
        "https://drive.google.com/file/d/1GoZftEBbhdw3_cuTAr5T7p4IsErXobI0/preview",
        "https://drive.google.com/file/d/1473NPPXn0tAUqeULshUMxW6_P272HKwK/preview",
        "https://drive.google.com/file/d/187NpAlQsPzSjg6WHVGPie_VHBjFvlq6_/preview",
        "https://drive.google.com/file/d/1R-XynKeYkr_hvAw_P9XxPi4WC4VLfQgx/preview",
        "https://drive.google.com/file/d/1OmTYFdCGP1h5SMPJL81GUwR9LsQtbw8O/preview",
        "https://drive.google.com/file/d/1M5bhUy-vYfMG7GmctDSTJrJCmFMPBNWX/preview"
      ],
      description: "Key moments and insights from the interview"
    }
  ],

  workflowSectionTitle: "Automation Workflows",
  workflowSectionHighlight: "Workflows",
  workflows: [
    {
      title: "Vulnerability Review Automation",
      nodes: ["HTTP Request", "Code Execution", "Set Variable", "Function", "Google Sheets", "Send Email", "Error Trigger", "Quality Control", "Log Entry", "HTTP Response"],
      description: "Automate the process of gathering vulnerability data, generating reports, and sharing findings with peers. Alleviates the pain of manual data collection and reporting, saving time and ensuring timely communication on security updates."
    },
    {
      title: "Weekly Security Summary Automation",
      nodes: ["RSS Feed", "Code Execution", "HTML Extract", "Google Docs", "Set Variable", "Email Node", "Quality Control", "Error Trigger", "Push Notification", "HTTP Response"],
      description: "Compile and summarize weekly security news into a cohesive document for sharing. Reduces the need for extensive manual reviews by collating relevant cybersecurity news and insights into a digestible format."
    },
    {
      title: "Client Security Update Automation",
      nodes: ["HTTP Request", "Set Variable", "Function", "Create Document", "Google Drive", "Slack Message", "Error Trigger", "Quality Control", "Send Email", "HTTP Response"],
      description: "Automate client updates regarding security measures and threat landscapes. Minimizes the manual effort involved in preparing client communications and tracking cybersecurity trends relevant to their cases."
    },
    {
      title: "Incident Response Notification Automation",
      nodes: ["Webhook", "Set Variable", "API Call", "Slack Notification", "Templated Email", "Error Handling", "Quality Control", "Log Entry", "Database Update", "HTTP Response"],
      description: "Alert relevant stakeholders in real-time during security incidents. Enhances incident response times by automating notifications and ensuring that all parties are informed promptly."
    },
    {
      title: "Research Collaboration Automation",
      nodes: ["Google Drive", "Set Variable", "API Call", "Create Document", "Slack Notification", "Email Links", "Quality Control", "Error Trigger", "Log Entry", "HTTP Response"],
      description: "Facilitate collaboration on research papers and security documentation with peers. Streamlines the process of sharing documents and updates, fostering better collaboration among researchers."
    },
    {
      title: "Travel Planning Optimization Automation",
      nodes: ["Google Sheets", "Set Variable", "API Call", "Function", "Send Email", "Time Tracking", "Quality Control", "Error Handling", "Map Integration", "HTTP Response"],
      description: "Assist in planning optimal routes and schedules for travel activities. Reduces inefficiencies by analyzing travel plans and providing the best paths to minimize walking and wait times."
    },
    {
      title: "Daily AI Usage Report Automation",
      nodes: ["HTTP Trigger", "Function", "Build Report", "Google Sheets", "Email Node", "Quality Control", "Error Handling", "Push Notification", "Log Entry", "HTTP Response"],
      description: "Track and summarize daily interactions with AI tools for personal review. Alleviates the need for manual tracking of AI engagements, ensuring that users have an accessible overview of their activity."
    },
    {
      title: "Client Interest Update Automation",
      nodes: ["Webhook", "Set Variable", "API Call", "Twilio SMS", "Email Client", "Quality Control", "Error Handling", "Log Entry", "HTTP Response"],
      description: "Update clients on interest rate changes or significant updates within their sector. Improves communication consistency, ensuring clients are kept informed about pertinent changes affecting their interests."
    },
    {
      title: "Security Tool Deployment Automation",
      nodes: ["API Call", "Set Variable", "Validate", "Send Confirmation", "Error Handling", "Quality Control", "Log Entry", "Function", "HTTP Response", "Send Report"],
      description: "Facilitate deployment of new security tools in client environments. Streamlines the installation process, reducing potential errors and ensuring thorough documentation of deployments."
    },
    {
      title: "Research Data Analysis Automation",
      nodes: ["HTTP Request", "Code Execution", "Data Extraction", "Function", "Google Sheets", "Quality Control", "Error Trigger", "Email Notification", "Log Entry", "HTTP Response"],
      description: "Automate the analysis of cybersecurity research data to derive insights and trends. Eliminates manual data crunching, providing researchers with timely and relevant information for decision-making."
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

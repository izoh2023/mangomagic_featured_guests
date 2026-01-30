
import ProfilePage from "@/components/ProfilePage"
import profileImg from "./Eddie Sanchez Profile Pic.jpg"

const pageData = {
  profileImage: profileImg,
  name: "Eddie Sanchez",
  highlightWord: "Eddie",
  tagline: "Exploring the art of automation and AI-powered creativity.",

  mediaSectionTitle: "Discover The Magic",
  mediaSectionHighlight: "Magic",
  mediaContent: [
    {
      title: "Full Interview",
      type: "video" as const,
      thumbnail: "",
      icon: "PlayCircle" as const,
      embedUrl: "https://drive.google.com/file/d/1ISCuElST3GvAlczv4QO8ASOA1cVCG0y0/view?usp=drive_link",
      description: "Complete interview with Eddie Sanchez"
    },
    {
      title: "Amazing Song",
      type: "audio" as const,
      thumbnail: "",
      icon: "Music" as const,
      embedUrl: "https://drive.google.com/file/d/18FLT8tdSJwMnRDqFTiWeI9vHhk-XalyG/view?usp=drive_link",
      description: "Eddie Sanchez's magical musical creation"
    },
    {
      title: "Speaker Introduction",
      type: "video" as const,
      thumbnail: "",
      icon: "Mic" as const,
      embedUrl: "https://drive.google.com/file/d/1OPNLBQbJOSYK-_RMkju-_YHjROGzSOJX/view?usp=drive_link",
      description: "Introduction to Eddie Sanchez"
    },
    {
      title: "Interview Highlights",
      type: "videolist" as const,
      thumbnail: "",
      icon: "Video" as const,
      embedUrl: [
        "https://drive.google.com/open?id=1He9SEoy8rz5GH0X4J76jRcfH6OAkSEqR&usp=drive_copy",
        "https://drive.google.com/open?id=1GJSF83WA3NYdO35wVYL4t57hqbVgm1H2&usp=drive_copy",
        "https://drive.google.com/open?id=1fEdkpN-J6I2Bc2XX_9OA0GoXjeh7ZACp&usp=drive_copy",
        "https://drive.google.com/open?id=1q9pwtpvwYF_81KFoT3TEHHbZmqFmzPjI&usp=drive_copy",
        "https://drive.google.com/open?id=1dN82dQWAGbWd-uDl7mq3OewXD3BBKbtN&usp=drive_copy",
        "https://drive.google.com/open?id=11QTJHRbomiSyAysexcqvRCxRI7LvxaTA&usp=drive_copy",
        "https://drive.google.com/open?id=1rgTNwda1PPz9ealJv4KobiyiKs1uEqw1&usp=drive_copy",
        "https://drive.google.com/open?id=1svYUMQdGA0fCFlUM446jUfXIXNXzeD2o&usp=drive_copy",
        "https://drive.google.com/open?id=1hDnZf6tV2nLtxEY-O1eaYS2YJhsUYQHn&usp=drive_copy",
        "https://drive.google.com/open?id=1ucNtBLDiH0hqYXohdgF7wT35Rw-CxhIN&usp=drive_copy",
        "https://drive.google.com/open?id=1rJmZLwbrwEfD-OIPHlwjc_lRjlNXYsYI&usp=drive_copy"
      ],
      description: "Key moments and insights from the interview"
    }
  ],

  workflowSectionTitle: "Automation Workflows",
  workflowSectionHighlight: "Workflows",
  workflows: [
    {
      title: "Client Information Retrieval",
      nodes: ["Webhook Trigger", "HTTP Request (to client information API)", "Function (process client data)", "Conditional Node (check for additional info needed)", "Data Store Node (save processed client data)", "Set Variable (prepare for report)", "HTTP Request (to company information API)", "Function (enrich company data)", "Append Data (combine client and company data)", "Email Notification"],
      description: "Automatically gather and enrich client and company data before sales meetings. Reduces manual research time and increases knowledge about clients and companies."
    },
    {
      title: "Meeting Preparation Report",
      nodes: ["Webhook Trigger", "Google Calendar Node (retrieve meetings)", "Function (filter internal vs external meetings)", "HTTP Request (search for external client info)", "Set Variable (compile report details)", "Markdown Node (format report)", "Google Docs Node (create document)", "Conditional Node (check for successful document creation)", "Email Notification (send report to user)", "Error Handling Node (log errors if report fails)"],
      description: "Generate a personalized meeting preparation report based on calendar information. Eliminates the need for manual report preparation, ensuring users are informed before meetings."
    },
    {
      title: "LinkedIn Content Creation",
      nodes: ["Webhook Trigger", "Text Input Node (user inputs content ideas)", "Function (outline content structure)", "HTTP Request (send to AI content generation API)", "Set Variable (receive polished content)", "Markdown Node (format content)", "LinkedIn Node (post content)", "Conditional Node (check for engagement analytics)", "Set Variable (store engagement metrics)", "Notify User via Email (send results)", "Error Handling Node (log failure of posting)"],
      description: "Streamline the content creation process for LinkedIn posts with AI assistance. Facilitates higher engagement rates and reduces time spent on writing."
    },
    {
      title: "Sales Coaching Schedule Management",
      nodes: ["Webhook Trigger", "Google Calendar Node (retrieve coaching sessions)", "Function (check for changes in schedule)", "Set Variable (store updated session data)", "Conditional Node (notify users of changes)", "SMS Node (send text reminders)", "HTTP Request (log session data to a central database)", "Function (analyze session effectiveness)", "Set Variable (prepare summary report)", "Google Docs Node (generate report)", "Email Notification (send coaching summary)"],
      description: "Automatically manage and remind clients of coaching sessions with built-in analytics. Improves scheduling efficiency and enhances communication with clients."
    },
    {
      title: "Performance Review Preparation",
      nodes: ["Webhook Trigger", "Google Sheets Node (retrieve employee data)", "Function (process data for review)", "Set Variable (store processed performance metrics)", "HTTP Request (pull additional metrics from HR system)", "Function (enrich performance data)", "Markdown Node (format report for review)", "Google Docs Node (create review document)", "Conditional Node (check for document completion)", "Email Notification (send to relevant parties)", "Error Handling Node (log errors)"],
      description: "Prepare comprehensive performance review reports with accurate metrics. Reduces the complexity of compiling data for reviews and improves quality of feedback."
    },
    {
      title: "Daily Summary Reporting",
      nodes: ["Webhook Trigger", "Google Calendar Node (fetch today's events)", "Function (process event data)", "Google Sheets Node (log data points)", "HTTP Request (retrieve relevant notes or documents)", "Function (compile summary information)", "Markdown Node (format summary)", "Google Docs Node (create daily report)", "Email Notification (distribute report)", "Conditional Node (check for any updates)", "Error Handling Node (handle failures gracefully)"],
      description: "Generate an automatic daily summary report of events and tasks. Saves time in daily wrapping up and enhances clarity on daily priorities."
    }
  ],

  workflowCTAText: "Build the Magic",
  workflowCTAUrl: "https://meet.manymangoes.com/",
  footerYear: "2025",
  footerText: "Made with",
  accentColor: "#F1ab1c"
}

export default function GeneratedPage() {
  return <ProfilePage {...pageData} />
}

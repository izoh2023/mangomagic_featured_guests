
import ProfilePage from "@/components/ProfilePage"
import profileImg from "./Seth Weisberg Profile pic.jpg"

const pageData = {
  profileImage: profileImg,
  name: "Seth Weisberg",
  highlightWord: "Seth",
  tagline: "Exploring the art of automation and AI-powered creativity.",

  mediaSectionTitle: "Discover The Magic",
  mediaSectionHighlight: "Magic",
  mediaContent: [
    {
      title: "Full Interview",
      type: "video" as const,
      thumbnail: "/images/Full-Interview.png",
      icon: "PlayCircle" as const,
      embedUrl: "https://drive.google.com/file/d/1VTqJjXK5ZdusAwRFm_DZJmKNGnLuZspq/preview",
      description: "Complete interview with Seth Weisberg"
    },
    {
      title: "Amazing Song",
      type: "audio" as const,
      thumbnail: "/images/Amazing-Song.png",
      icon: "Music" as const,
      embedUrl: "https://drive.google.com/file/d/1i-oeRHXLcCzzKw4v9UQB3qLNzxmCza6N/preview",
      description: "Seth Weisberg's magical musical creation"
    },
    {
      title: "Speaker Introduction",
      type: "video" as const,
      thumbnail: "/images/Introduction.png",
      icon: "Mic" as const,
      embedUrl: "https://drive.google.com/file/d/19wIpsMle4WXaVBmHWnDRvqpn93QK5QE6/preview",
      description: "Introduction to Seth Weisberg"
    },
    {
      title: "Interview Highlights",
      type: "videolist" as const,
      thumbnail: "/images/Highlights.png",
      icon: "Video" as const,
      embedUrl: [
        "https://drive.google.com/file/d/1IlK2jZLi4vwkok5VXeljhtGJsR95GqeL/preview",
        "https://drive.google.com/file/d/1wLf1zFbiCgRPhLwUQqemfS9MgtSju7Fp/preview",
        "https://drive.google.com/file/d/1M3LfTYGCZZulWwcJFlo4uwrjZk3Umqal/preview",
        "https://drive.google.com/file/d/1pyogRdjUj6EPbVOT-c3VypctgyKQ2tNt/preview",
        "https://drive.google.com/file/d/1uarI1-ADQe4PK-qfCSA9NYhYyqrOtWby/preview",
        "https://drive.google.com/file/d/14_Y-_3XknjGFnLgt2xXeMYNkbvrSbVBf/preview",
        "https://drive.google.com/file/d/1TqRHv-ndTvu0axxiHKi2rk6gFuK2mNqz/preview",
        "https://drive.google.com/file/d/1vQVWxT-EpYqrLqQKlQBVriDdoI4jVVDF/preview",
        "https://drive.google.com/file/d/1mgkshVgCJ6oV0Yd4IkYI3jHH2S0HHqWm/preview",
        "https://drive.google.com/file/d/1L0CyzOLtux-77LCLJy8wH2GYKbnf5GY1/preview",
        "https://drive.google.com/file/d/1G56NDpImzSDEHGl6WL1RlPTk131huTc3/preview",
        "https://drive.google.com/file/d/1lp__vtjQekAzaEIjbD2TsxzmN8yAhwkW/preview",
        "https://drive.google.com/file/d/1lzROo4wBQmJ2Tk0Atq2p48otD7Xjo0g-/preview",
        "https://drive.google.com/file/d/1joB9V48I12Nuc9YAafqz4wrk9PhBPVFu/preview"
      ],
      description: "Key moments and insights from the interview"
    }
  ],

  workflowSectionTitle: "Automation Workflows",
  workflowSectionHighlight: "Workflows",
  workflows: [
    {
      title: "Research & Analysis",
      nodes: ["HTTP Request", "Google Sheets (Add Row)", "Google Sheets (Retrieve Data)", "ChatGPT (Send Prompt)", "ChatGPT (Get Response)", "Google Sheets (Update Row)", "Email (Send)", "Slack (Send Message)", "Google Drive (Upload File)", "Quality Control Node"],
      description: "Automation for conducting research on various topics, consolidating data, and generating insights. Pain points alleviated include manual data entry, need for real-time data analysis, and fragmented communication channels."
    },
    {
      title: "Customer Service Optimization",
      nodes: ["Webhooks", "Firebase (Create Document)", "Twilio (Send SMS)", "ChatGPT (Analyze Input)", "HTTP Request (Call API)", "Email (Send Response)", "Notion (Update Database)", "Slack (Send Notification)", "Google Sheets (Log Interaction)", "Error Handling Node"],
      description: "Automation to streamline customer inquiries and responses using AI insights and task tracking. Pain points alleviated include delayed responses, inefficient data management, and lack of integrated messaging platforms."
    },
    {
      title: "Project Management Flow",
      nodes: ["Trello (New Card)", "Google Calendar (Create Event)", "Slack (Send Channel Message)", "HTTP Request (Fetch Data)", "Google Sheets (Add Row)", "Zoom (Schedule Meeting)", "Email (Notify Participants)", "Notion (Create Task)", "Airtable (Add Record)", "Quality Control Node"],
      description: "Automation to manage project tasks efficiently, ensuring all stakeholders are informed and organized. Pain points alleviated include missed deadlines, disorganization among team members, and lack of centralized communication."
    },
    {
      title: "Social Media Posting",
      nodes: ["RSS Feed (New Item)", "Buffer (Queue Post)", "Google Sheets (Log Post)", "Slack (Send Update)", "HTTP Request (Fetch Analytics)", "ChatGPT (Generate Post Copy)", "Google Drive (Upload Media)", "Email (Notify Team)", "Error Handling Node", "Quality Control Node"],
      description: "Automation for scheduling and managing social media content across multiple platforms. Pain points alleviated include inconsistency in posting, disjointed content coordination, and lack of performance tracking."
    },
    {
      title: "Video Content Creation",
      nodes: ["Dropbox (New File)", "Zoom (Record Meeting)", "HTTP Request (Transcribe Video)", "Google Drive (Store Transcript)", "ChatGPT (Summarize Content)", "Google Sheets (Document Ideas)", "Email (Send Draft)", "Slack (Notify Team)", "Error Handling Node", "Quality Control Node"],
      description: "Automation for creating and distributing video content and transcripts effectively. Pain points alleviated include time-consuming editing processes, communication gaps, and inadequate content clarity."
    },
    {
      title: "Logistics Management",
      nodes: ["API Request", "Google Sheets (Add Row)", "Postgres (Insert Record)", "ChatGPT (Analyze Data)", "HTTP Request (Get Report)", "Slack (Send Alert)", "Email (Notify Stakeholders)", "Google Drive (Store File)", "Airtable (Update Record)", "Quality Control Node"],
      description: "Automation for tracking logistics data and facilitating timely updates on operations. Pain points alleviated include slow data processing, lack of real-time insights, and communication breakdowns across teams."
    },
    {
      title: "Coaching Management System",
      nodes: ["JotForm (New Submission)", "Google Sheets (Add Row)", "Email (Send Confirmation)", "Zoom (Schedule Session)", "ChatGPT (Prepare Session Notes)", "Google Drive (Store Resources)", "Slack (Send Updates)", "Quality Control Node", "Error Handling Node", "HTTP Request (Integrate Tools)"],
      description: "Automation for managing coaching sessions efficiently and enhancing client engagement. Pain points alleviated include scheduling conflicts, manual tracking of client interactions, and inconsistent session preparation."
    },
    {
      title: "Email Campaign Management",
      nodes: ["Mailchimp (New Campaign)", "Google Sheets (Add Contact)", "ChatGPT (Generate Content)", "Email (Send Campaign)", "HTTP Request (Get Analytics)", "Google Drive (Store Reports)", "Slack (Notify Team)", "Quality Control Node", "Error Handling Node", "API Request (Fetch Data)"],
      description: "Automation for creating and managing email marketing campaigns effectively. Pain points alleviated include low engagement rates, lack of tracking capabilities, and time-consuming content creation."
    },
    {
      title: "Data Analytics Dashboard",
      nodes: ["HTTP Request (Fetch Data)", "Google Sheets (Add/Update Data)", "Datawrapper (Create Chart)", "Slack (Send Update)", "Email (Notify Stakeholders)", "Notion (Log Insights)", "Airtable (Insert Record)", "Quality Control Node", "Error Handling Node", "API Request (Sync Data)"],
      description: "Automation for visualizing and updating data analytics in real-time. Pain points alleviated include manual data entry, outdated insights, and lack of integrated analytics tools."
    },
    {
      title: "Event Management System",
      nodes: ["Webhooks (New Event)", "Google Calendar (Create Event)", "Email (Send Invitations)", "Slack (Send Reminders)", "Google Sheets (Log Attendees)", "Zoom (Schedule Meeting)", "HTTP Request (Fetch Event Analytics)", "Quality Control Node", "Error Handling Node", "API Request (Sync Data)"],
      description: "Automation to handle all aspects of event planning and management seamlessly. Pain points alleviated include missed invitations, disorganized attendee coordination, and inadequate follow-up processes."
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

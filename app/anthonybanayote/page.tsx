
import ProfilePage from "@/components/ProfilePage"
import profileImg from "./Anthony Banayote Profile Pic.jpg"

const pageData = {
  profileImage: profileImg,
  name: "Anthony Banayote",
  highlightWord: "Anthony",
  tagline: "Exploring the art of automation and AI-powered creativity.",

  mediaSectionTitle: "Discover The Magic",
  mediaSectionHighlight: "Magic",
  mediaContent: [
    {
      title: "Full Interview",
      type: "video" as const,
      thumbnail: "",
      icon: "PlayCircle" as const,
      embedUrl: "https://drive.google.com/file/d/1YNPF42sWgeLYpVahNEh3yuaGEoVSyW6Q/view?usp=drive_link",
      description: "Complete interview with Anthony Banayote"
    },
    {
      title: "Amazing Song",
      type: "audio" as const,
      thumbnail: "",
      icon: "Music" as const,
      embedUrl: "https://drive.google.com/file/d/16VSom7GLFn_eo2WJ5OvQGoTNSm9FwN8t/view?usp=drive_link",
      description: "Anthony Banayote's magical musical creation"
    },
    {
      title: "Speaker Introduction",
      type: "video" as const,
      thumbnail: "",
      icon: "Mic" as const,
      embedUrl: "https://drive.google.com/file/d/1VRBMro4ZP8RYwd9ilpNEV114L3cQiRd4/view?usp=drive_link",
      description: "Introduction to Anthony Banayote"
    },
    {
      title: "Interview Highlights",
      type: "videolist" as const,
      thumbnail: "",
      icon: "Video" as const,
      embedUrl: [
        "https://drive.google.com/open?id=1G4uY408y2iYHpWKl1GQpky8di0XtvwKx&usp=drive_copy",
        "https://drive.google.com/open?id=16CpXmKeKBD4jBN9iQGona9c1oGJ4qIjn&usp=drive_copy",
        "https://drive.google.com/open?id=1FlHLOGQpz6IH5W11_912-gcjqklcdnI4&usp=drive_copy",
        "https://drive.google.com/open?id=1nMLTz-stBk-pIErjGzngBb_em8pdEtPD&usp=drive_copy",
        "https://drive.google.com/open?id=1n_Bs0oQ5tcp_EWyZPwD8idyKt4WkGmWh&usp=drive_copy",
        "https://drive.google.com/open?id=1HsoC9hUIeR8qsIhBO8ly4gldPKT49sXL&usp=drive_copy",
        "https://drive.google.com/open?id=1c6fsfW_6dJYxfqStK4qPGHD9ojXvqcp9&usp=drive_copy",
        "https://drive.google.com/open?id=1biw-bIDfolSd4N_-y-T91i9roGa4Dh0S&usp=drive_copy",
        "https://drive.google.com/open?id=1L14VXul5HcAWgzcxSQgXuG0p3fv6xQeB&usp=drive_copy",
        "https://drive.google.com/open?id=1MdYZTFpOdcuGwG5Lkzi3eH4vkE5CyuwM&usp=drive_copy",
        "https://drive.google.com/open?id=1VoYU6GbwM8ZMbV95Fg7PTClnNBxKQaCE&usp=drive_copy",
        "https://drive.google.com/open?id=16CvAKqqQ3Y39oJD07bTxAAmFe_uOKQYI&usp=drive_copy",
        "https://drive.google.com/open?id=1XKcdwKekLhGJjiCu_1LmVJTSESS_YRsV&usp=drive_copy",
        "https://drive.google.com/open?id=1Kc5nh34YQOx_8tMtdtwj918Slar-4nyr&usp=drive_copy",
        "https://drive.google.com/open?id=1SinS-06DMbr3H3eDdu7cXAmypC2c8xhp&usp=drive_copy",
        "https://drive.google.com/open?id=1ZIiGZO3HIDeTWTtS2U7dZmNxUmZvfWyJ&usp=drive_copy"
      ],
      description: "Key moments and insights from the interview"
    }
  ],

  workflowSectionTitle: "Automation Workflows",
  workflowSectionHighlight: "Workflows",
  workflows: [
    {
      title: "Account Research Automation",
      nodes: ["Webhook Trigger", "HTTP Request (Company Website)", "JSON Parse", "Function (Custom Logic for Questions)", "Google Sheets (Record Data)", "Send Email (Summary to User)", "HTTP Request (Sending Feedback to API)", "IF (Error Handling)", "Function (Log Error)", "Slack Notification (Error Message)"],
      description: "Automates the process of gathering company information by parsing the website, enabling quick access to strategic priorities and trends. Reduces time spent on manual research and organizes data efficiently, alleviating the repetitive nature of account research."
    },
    {
      title: "Meeting Follow-Up Email Automation",
      nodes: ["Trigger (Scheduled Time)", "Google Calendar (Retrieve Upcoming Meetings)", "Gong API (Fetch Transcription)", "Function (Extract Key Points)", "Email Send (Follow-Up Template)", "IF (Error Handling)", "Function (Log Error)", "HTTP Request (Feedback to API)", "Slack Notification (Meeting Summary)", "Google Sheets (Record Email Sent)"],
      description: "Creates a follow-up email based on meeting transcriptions automatically. Saves time on drafting emails post-meeting and ensures important points are conveyed accurately."
    },
    {
      title: "Project Management Update Automation",
      nodes: ["Webhook Trigger", "Trello API (Fetch Current Projects)", "Function (Filter Relevant Updates)", "Google Sheets (Update Project Status)", "Slack Notification (Project Update)", "Jira API (Create Task)", "IF (Error Handling)", "Function (Log Error)", "Email Alert (Admin Notification)", "Google Drive (Record Changes)"],
      description: "Manages project status updates across platforms and keeps teams informed on current project statuses. Alleviates confusion about project progress and enhances communication across departments."
    },
    {
      title: "Sales Forecast Automation",
      nodes: ["Webhook Trigger", "Gong API (Fetch Sales Data)", "Function (Analyze Data Trends)", "Google Sheets (Record Trends)", "Email Send (Forecast Report)", "IF (Error Handling)", "Function (Log Error)", "HTTP Request (Send Alert to Dashboard)", "Slack Notification (Forecast Results)", "Trello API (Update Forecast Tasks)"],
      description: "Automates sales data analysis and forecasting, delivering timely insights to sales teams. Reduces manual analysis errors and provides quicker access to critical sales forecasts."
    },
    {
      title: "Personal Project Ideas Gathering Automation",
      nodes: ["Webhook Trigger", "Google Forms (Collect Ideas)", "Google Sheets (Store Ideas)", "Email Send (Summary of Ideas)", "Slack Notification (New Ideas Alert)", "IF (Error Handling)", "Function (Log Error)", "HTTP Request (Send Feedback to User)", "Function (User Insights Analysis)", "Discord Notification (Project Ideas Discuss)"],
      description: "Gathers personal project ideas and organizes them for easy reference and discussion. Encourages creativity while reducing the clutter of scattered ideas and enhancing collaboration."
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

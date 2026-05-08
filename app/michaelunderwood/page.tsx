
import ProfilePage from "@/components/ProfilePage"
import profileImg from "./Michael Underwood Profile Pic.jpg"

const pageData = {
  profileImage: profileImg,
  name: "Michael Underwood",
  highlightWord: "Michael",
  tagline: "Exploring the art of automation and AI-powered creativity.",

  mediaSectionTitle: "Discover The Magic",
  mediaSectionHighlight: "Magic",
  mediaContent: [
    {
      title: "Full Interview",
      type: "video" as const,
      thumbnail: "/images/Full-Interview.png",
      icon: "PlayCircle" as const,
      embedUrl: "https://drive.google.com/file/d/1BOKnnzA1aFqitc2AYrnDRacMACEMNUtZ/preview",
      description: "Complete interview with Michael Underwood"
    },
    {
      title: "Amazing Song",
      type: "audio" as const,
      thumbnail: "/images/Amazing-Song.png",
      icon: "Music" as const,
      embedUrl: "https://drive.google.com/file/d/1zRKaBwXIwqYr0ggPKedmaNiTy_eo3GCy/preview",
      description: "Michael Underwood's magical musical creation"
    },
    {
      title: "Speaker Introduction",
      type: "video" as const,
      thumbnail: "/images/Introduction.png",
      icon: "Mic" as const,
      embedUrl: "https://drive.google.com/file/d/1SGBEo31SvqxDD_9Cg-KD6kqE66K5ZioU/preview",
      description: "Introduction to Michael Underwood"
    },
    {
      title: "Interview Highlights",
      type: "videolist" as const,
      thumbnail: "/images/Highlights.png",
      icon: "Video" as const,
      embedUrl: [
        "https://drive.google.com/file/d/1rEuHgTq_gKgmcrJTFAIbJxxsE7qarDvJ/preview",
        "https://drive.google.com/file/d/1So5r3EDTLLrjzZGGIeR7bmFIW9pdbr5w/preview",
        "https://drive.google.com/file/d/1RNlwJ7W1zFYNeeykFWfFzASxX_vOU_Tx/preview",
        "https://drive.google.com/file/d/1hzT-mTxp7dO-BRJ3JMu_NGDt_gD3Rj-G/preview",
        "https://drive.google.com/file/d/1yBkisyySnJAOWzLZM_HTbOT5k_Qve-MF/preview",
        "https://drive.google.com/file/d/1C38M-cEPBsq3Eugo4RfQQJiGy-kT51mo/preview",
        "https://drive.google.com/file/d/1p3aq_eIye3a8g90WQwTb9llXzfIWLbqD/preview",
        "https://drive.google.com/file/d/1mL5gmcvNjrNxfAEUiv9xEwYwCbHjPtwo/preview",
        "https://drive.google.com/file/d/16sTxgCa1c4q9dp0DWCe0PS1mGe6UAqs9/preview",
        "https://drive.google.com/file/d/1g-G0zOwlMKeHwSJdx8EkN5M2dAcm3ig9/preview",
        "https://drive.google.com/file/d/1SUA9csYDUcrO-8zVh1GaZNKF9MWQ1ahM/preview",
        "https://drive.google.com/file/d/1sinSFist1QUQtVa9eJja-O1opnEqow1O/preview",
        "https://drive.google.com/file/d/1w6PS12x10CqTBKZH4vnZDvV5syXZwl3q/preview",
        "https://drive.google.com/file/d/1K-eYHg0zS54dSbOg9rs-GByi2Zepbrc5/preview",
        "https://drive.google.com/file/d/18dV_ddUhMSOaaqWS1tJfxAkwwA-18d5z/preview"
      ],
      description: "Key moments and insights from the interview"
    }
  ],

  workflowSectionTitle: "Automation Workflows",
  workflowSectionHighlight: "Workflows",
  workflows: [
    {
      title: "Sales Intelligence Gathering",
      nodes: ["Webhook Trigger", "Retrieve Historical Data", "Analyze Customer Data", "Generate Insights Report", "Send Email Notification", "Update CRM", "Quality Control Check", "Log Interaction", "Error Handling Node", "Notify Sales Team"],
      description: "Automating the process of generating client insights reports for sales meetings. Reduces manual data collection and improves real-time information access."
    },
    {
      title: "Investment Portfolio Management",
      nodes: ["Webhook Trigger", "Retrieve Stock Market Data", "Analyze Historical Trends", "Generate Daily Investment Recommendations", "Send Daily Summary Email", "Update Portfolio Tracker", "Quality Control Check", "Log Investment Actions", "Error Handling Node", "Notify User"],
      description: "Automating daily investment analysis and recommendations for stock management. Enhances decision-making efficiency and minimizes missed trading opportunities."
    },
    {
      title: "Client Follow-Up Automation",
      nodes: ["Webhook Trigger", "Capture Meeting Transcription", "Identify Action Items", "Schedule Follow-Up Tasks", "Send Follow-Up Emails", "Update CRM Status", "Quality Control Review", "Log Actions", "Error Handling Node", "Notify Sales Representative", "Verify Completion"],
      description: "Streamlining the follow-up process post sales meetings. Ensures no action items are overlooked and improves client relationship management."
    },
    {
      title: "Sales Performance Analysis",
      nodes: ["Webhook Trigger", "Collect Sales Data", "Analyze Performance Metrics", "Generate Performance Summary Report", "Send Report to Management", "Update KPIs in Dashboard", "Quality Control Verification", "Log Analysis Results", "Error Handling Node", "Notify stakeholders", "Schedule Performance Review Meeting"],
      description: "Automating sales performance analysis and reporting. Facilitates timely performance evaluations and data-driven decision-making."
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

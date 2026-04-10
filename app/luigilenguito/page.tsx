
import ProfilePage from "@/components/ProfilePage"
import profileImg from "./Luigi Lenguito.jpg"

const pageData = {
  profileImage: profileImg,
  name: "Luigi Lenguito",
  highlightWord: "Luigi",
  tagline: "Exploring the art of automation and AI-powered creativity.",

  mediaSectionTitle: "Discover The Magic",
  mediaSectionHighlight: "Magic",
  mediaContent: [
    {
      title: "Full Interview",
      type: "video" as const,
      thumbnail: "/images/Full-Interview.png",
      icon: "PlayCircle" as const,
      embedUrl: "https://drive.google.com/file/d/1rRDU8CQPaHDYh0FmllezSNr8fWzqhx4W/preview",
      description: "Complete interview with Luigi Lenguito"
    },
    {
      title: "Amazing Song",
      type: "audio" as const,
      thumbnail: "/images/Amazing-Song.png",
      icon: "Music" as const,
      embedUrl: "https://drive.google.com/file/d/1xCirlXqYIzdYomqmrI4spd6Y8xOvGm9d/preview",
      description: "Luigi Lenguito's magical musical creation"
    },
    {
      title: "Speaker Introduction",
      type: "video" as const,
      thumbnail: "/images/Introduction.png",
      icon: "Mic" as const,
      embedUrl: "https://drive.google.com/file/d/1gqTNNM-FNOPQ0CTU6LhwIw-NquRocJdx/preview",
      description: "Introduction to Luigi Lenguito"
    },
    {
      title: "Interview Highlights",
      type: "videolist" as const,
      thumbnail: "/images/Highlights.png",
      icon: "Video" as const,
      embedUrl: [
        "https://drive.google.com/file/d/1xS2toHzonmXoN7QK3YipeTn_dddHA4yF/preview",
        "https://drive.google.com/file/d/1JfJXH2-s7Kosu_x_uIUD9j3suQtiHNoU/preview",
        "https://drive.google.com/file/d/1T-doCfJdNY7OEsKY4x3p_LFIuxhnll67/preview",
        "https://drive.google.com/file/d/1HJVCy7ps_I1xwbAyVTjGG4k9x8mI_QRJ/preview",
        "https://drive.google.com/file/d/1rOfpdMlo-6rkw-i9blf-Wksj8E9CN12X/preview",
        "https://drive.google.com/file/d/1Lu70m8w2bhi30FcLXhwbJBDC00fTX97l/preview",
        "https://drive.google.com/file/d/19viGImfNYZ-KTe5cE7znLtZIXq10bVp1/preview",
        "https://drive.google.com/file/d/1qdPiZIeQ3rIYw3mHfaXbsgRgoeOQIY1l/preview",
        "https://drive.google.com/file/d/1fD7FGXsEAl8SAVy2ec5t1RBV1hzdD1Y5/preview",
        "https://drive.google.com/file/d/1J6XLs9s9YQYu5mze5qtvztlDbKrR7Ime/preview",
        "https://drive.google.com/file/d/1k9e47AyDEKntwBLn9lDQrJtwj4LggWPD/preview",
        "https://drive.google.com/file/d/1J881nTlg7KxhjaoCg-Kg85Q_nden6K-2/preview",
        "https://drive.google.com/file/d/1_IwgSchIL6i9KatOiwYSM1nf08toN4lt/preview",
        "https://drive.google.com/file/d/1nKfhi2_exKRiII5O1NS0ZaPrwdWXjOep/preview",
        "https://drive.google.com/file/d/1CIk2-ozObX9JEkyFMzKMnvegDyRp1n_k/preview",
        "https://drive.google.com/file/d/12HUkV3Uh4IZYJ0phWwo512lpYRgwqqMr/preview"
      ],
      description: "Key moments and insights from the interview"
    }
  ],

  workflowSectionTitle: "Automation Workflows",
  workflowSectionHighlight: "Workflows",
  workflows: [
    {
      title: "Deep Fake Detection Automation",
      nodes: ["Webhook", "Google Studio (Video Processing)", "Custom Code (Deep Fake Detection Logic)", "IF Node (Detection Outcomes)", "Email Notification (Success)", "Slack Notification (Failure)", "Google Sheets (Record Results)", "Error Handler (Log Errors)", "Quality Control (Audit Trail)", "Final Notification (Process Summary)"],
      description: "Automates the process of detecting deep fakes in live video streams. Reduces manual monitoring and reports generation, thus improving response times."
    },
    {
      title: "Customer Business Case Automation",
      nodes: ["Webhook", "Google Docs (Template Fetch)", "Google Sheets (Data Compilation)", "Custom Code (Business Case Generation)", "Slack Notification (Draft Ready)", "Google Drive (Upload Draft)", "Email Notification (Stakeholder Update)", "Error Handler (Log Errors)", "Quality Control (Template Version Control)", "Final Notification (Completion Confirmation)"],
      description: "Facilitates quick generation of business cases for stakeholders. Alleviates the time-consuming process of document creation and stakeholder communication."
    },
    {
      title: "Preemptive Cyber Attack Prevention Automation",
      nodes: ["Webhook", "API Request (Data Source Integration)", "Custom Code (Threat Analysis)", "IF Node (Threat Detected)", "SMS Notification (Urgent Alert)", "Webhook (Integrate with Security Systems)", "Google Sheets (Log Threats)", "Error Handler (Log Errors)", "Quality Control (Impact Assessment)", "Final Notification (Threat Analysis Summary)"],
      description: "Streamlines the identification and prevention of potential cyber threats. Minimizes the risks associated with reactive security measures."
    },
    {
      title: "Deep Fake Impact Assessment Automation",
      nodes: ["Webhook", "Google Studio (Data Analysis)", "Custom Code (Impact Assessment Logic)", "Google Sheets (Record Impacts)", "IF Node (High Impact)", "Email Notification (Immediate Action Required)", "Slack Notification (Team Alert)", "Error Handler (Log Errors)", "Quality Control (Impact Review)", "Final Notification (Impact Report)"],
      description: "Optimizes the evaluation process of deep fake incidents and their effects. Reduces response time to deep fake incidents, enhancing proactive measures."
    },
    {
      title: "Customer Follow-Up Automation",
      nodes: ["Webhook", "Google Sheets (Customer Data Fetch)", "Email Notification (Follow-Up Email)", "IF Node (Response Received)", "Slack Notification (Status Update)", "Google Sheets (Record Responses)", "Error Handler (Log Errors)", "Quality Control (Response Quality Check)", "Final Notification (Follow-Up Summary)"],
      description: "Automates follow-up communication with customers after initial outreach. Streamlines customer engagement to improve response rates and satisfaction."
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

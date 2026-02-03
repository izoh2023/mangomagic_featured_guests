
import ProfilePage from "@/components/ProfilePage"
import profileImg from "./Bryan Adams Profile Pic.jpg"

const pageData = {
  profileImage: profileImg,
  name: "Bryan Adams",
  highlightWord: "Bryan",
  tagline: "Exploring the art of automation and AI-powered creativity.",

  mediaSectionTitle: "Discover The Magic",
  mediaSectionHighlight: "Magic",
  mediaContent: [
    {
      title: "Full Interview",
      type: "video" as const,
      thumbnail: "",
      icon: "PlayCircle" as const,
      embedUrl: "https://drive.google.com/file/d/1KzUQnCWj9S9d20jaQ55ZeWgnZXsQFfAb/view?usp=drive_link",
      description: "Complete interview with Bryan Adams"
    },
    {
      title: "Amazing Song",
      type: "audio" as const,
      thumbnail: "",
      icon: "Music" as const,
      embedUrl: "https://drive.google.com/file/d/1ZyL2bTRxHOHycDN8RJQVB1MBiird1LG6/view?usp=drive_link",
      description: "Bryan Adams's magical musical creation"
    },
    {
      title: "Speaker Introduction",
      type: "video" as const,
      thumbnail: "",
      icon: "Mic" as const,
      embedUrl: "https://drive.google.com/file/d/1mBmzupaATJgN-gyByUnW_CdRksPYHjt6/view?usp=drive_link",
      description: "Introduction to Bryan Adams"
    },
    {
      title: "Interview Highlights",
      type: "videolist" as const,
      thumbnail: "",
      icon: "Video" as const,
      embedUrl: [
        "https://drive.google.com/open?id=1X1BaRO9UTEoCPnK8iriE_JHjufjXjw8_&usp=drive_copy",
        "https://drive.google.com/open?id=1NISWL-wmT2uvu_mbNyvghl_ZxWVKuhIZ&usp=drive_copy",
        "https://drive.google.com/open?id=1_MPtVeOWpmI2JojIT3_gNXk4LNQtwnzn&usp=drive_copy",
        "https://drive.google.com/open?id=1TZADlS-2K4N8WfwcOwBTr4ktr3F4vkqp&usp=drive_copy",
        "https://drive.google.com/open?id=1Y46pwuJ3tTosEfAHz80cszsr0U3Ycyir&usp=drive_copy",
        "https://drive.google.com/open?id=1IW3AbjTaM3htVDvC9GfJ_q5HORGmbVhg&usp=drive_copy",
        "https://drive.google.com/open?id=10GpkkAcDg40WaHDYLSCQ6x14EPG6UXgv&usp=drive_copy",
        "https://drive.google.com/open?id=1BU9uBHiVrnS9oEh4Mgnw-RLU5EzVM-ww&usp=drive_copy",
        "https://drive.google.com/open?id=106W5srDLLGnVSK_C-tZ0s1dVil4xsgGH&usp=drive_copy",
        "https://drive.google.com/open?id=1r_oFiyqttNpiP21xPya-sFO9dQCvPWM2&usp=drive_copy",
        "https://drive.google.com/open?id=1WwSal-kC6p87pIxzbkmLh0bvwM5SBgJp&usp=drive_copy",
        "https://drive.google.com/open?id=1O9jzvHxGF11r1IZKyccR4Gbni5Ecds40&usp=drive_copy",
        "https://drive.google.com/open?id=1cDLtKJVZ0-4AfXBu7EDJTg-WCqvXuiVS&usp=drive_copy",
        "https://drive.google.com/open?id=1xpMeXOVQc4mXUUogzUopZunGqp7qinu-&usp=drive_copy",
        "https://drive.google.com/open?id=1HzEb_NrpfQOZVKGMO4frcnons_XKyhEm&usp=drive_copy"
      ],
      description: "Key moments and insights from the interview"
    }
  ],

  workflowSectionTitle: "Automation Workflows",
  workflowSectionHighlight: "Workflows",
  workflows: [
    {
      title: "UI/UX Rapid Prototyping Automation",
      nodes: ["Webhook Trigger", "Function Node: Extract Prototype Data", "Lovable API Node: Create Prototype", "Team Collaboration Node: Notify Team", "Version Control Node: Save Version", "Quality Control Node: Review Prototype", "Function Node: Validate Features", "API Node: Send Prototype for Development", "Notification Node: Update Team", "Error Handling Node: Log Errors"],
      description: "Facilitates the rapid creation and iteration of UI/UX prototypes for team collaboration. Alleviates inefficiencies in communication and versioning during the design process."
    },
    {
      title: "Content Strategy Optimization Automation",
      nodes: ["Webhook Trigger", "Function Node: Extract Content Data", "SEO API Node: Generate Long-Tail Keywords", "Content Management Node: Update Strategy Document", "Analysis Node: Perform Content Gap Analysis", "Notification Node: Alert Team of Updates", "Quality Control Node: Review Changes", "Analytics Node: Measure Performance", "Feedback Node: Gather Team Insights", "Error Handling Node: Log Issues"],
      description: "Optimizes content strategy by identifying keywords and improving SEO tactics. Alleviates challenges in aligning content with user intent and search visibility."
    },
    {
      title: "AI-Powered Book Writing Support Automation",
      nodes: ["Webhook Trigger", "File Storage Node: Upload Past Books", "AI Text Generation Node: Generate Chapter Structures", "Quality Control Node: Review Generated Content", "Function Node: Structure Book Outline", "Editing Node: Refine Content", "Notification Node: Save Draft to Storage", "Version Control Node: Archive Previous Versions", "Collaboration Node: Share with Editor", "Feedback Node: Gather Reader Input", "Error Handling Node: Log Editing Issues"],
      description: "Assists in writing and structuring books using AI insights. Alleviates writer's block and enhances coherence in writing style and content organization."
    },
    {
      title: "Competitor Analysis Automation",
      nodes: ["Webhook Trigger", "Function Node: Extract Competitor Data", "API Node: Query Competitive Intelligence Tool", "Data Processing Node: Analyze Results", "Visualization Node: Create Competitive Landscape", "Reporting Node: Generate Insights Report", "Notification Node: Share Findings with Team", "Quality Control Node: Review Report", "Feedback Node: Collect Team Commentary", "API Node: Update Competitor Profiles", "Error Handling Node: Log Data Retrieval Issues"],
      description: "Conducts comprehensive analysis of competitor strategies and positioning. Alleviates lack of insights on market trends and competitive advantages."
    },
    {
      title: "Job Board Management Automation",
      nodes: ["Webhook Trigger", "API Node: Fetch New Job Listings", "Job Posting Node: Update Job Board", "Notification Node: Alert Team of New Positions", "Quality Control Node: Review Job Listings", "Analytics Node: Track Job Application Metrics", "Feedback Node: Gather Applicant Insights", "API Node: Sync with Internal Recruitment Tool", "Version Control Node: Save Job Posting Versions", "Error Handling Node: Log Job Listing Issues", "Function Node: Archive Old Listings"],
      description: "Streamlines the management of job postings and applicant data. Alleviates disorganization in job application processes and enhances visibility of available positions."
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

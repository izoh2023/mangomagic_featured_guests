
import ProfilePage from "@/components/ProfilePage"
import profileImg from "./Eric Waldinger Profile Pic.png"

const pageData = {
  profileImage: profileImg,
  name: "Eric Waldinger",
  highlightWord: "Eric",
  tagline: "Exploring the art of automation and AI-powered creativity.",

  mediaSectionTitle: "Discover The Magic",
  mediaSectionHighlight: "Magic",
  mediaContent: [
    {
      title: "Full Interview",
      type: "video" as const,
      thumbnail: "/images/Full-Interview.png",
      icon: "PlayCircle" as const,
      embedUrl: "https://drive.google.com/file/d/1xzyel7BvWWBzgSu9MrNhO_CpstLG2xaK/preview",
      description: "Complete interview with Eric Waldinger"
    },
    {
      title: "Amazing Song",
      type: "audio" as const,
      thumbnail: "/images/Amazing-Song.png",
      icon: "Music" as const,
      embedUrl: "https://drive.google.com/file/d/1RcyS1Z927_HofNViKOzzzmXMhByNYrdy/preview",
      description: "Eric Waldinger's magical musical creation"
    },
    {
      title: "Speaker Introduction",
      type: "video" as const,
      thumbnail: "/images/Introduction.png",
      icon: "Mic" as const,
      embedUrl: "https://drive.google.com/file/d/13mtlpzfA_pMI1D4wcfBDJjOqTwKiMJd4/preview",
      description: "Introduction to Eric Waldinger"
    },
    {
      title: "Interview Highlights",
      type: "videolist" as const,
      thumbnail: "/images/Highlights.png",
      icon: "Video" as const,
      embedUrl: [
        "https://drive.google.com/file/d/1NKQPMCn9I4snq02Dv0cedXRvapxAwD-h/preview",
        "https://drive.google.com/file/d/1YAJOTRv_isk7edYL6-T29oZfpDIM5aiP/preview",
        "https://drive.google.com/file/d/1Atb70UhcyqSuCsSwAQ2_jHnk-QFGUJ2v/preview",
        "https://drive.google.com/file/d/1RLN5GtbM_R3wwZdfc-_plqHqxtv0k7rE/preview",
        "https://drive.google.com/file/d/1P-iMFtuUHRa_5Nj0WAfRnmzX2jyfJmkX/preview",
        "https://drive.google.com/file/d/19wG-b_FUHBbwR8DV2N7vjzYMa_Z0Nfj7/preview",
        "https://drive.google.com/file/d/1lsa_Ew5717412Xhik-_JR2VeJSVsG5T7/preview",
        "https://drive.google.com/file/d/1uMLZd50rfFlrfnUXdLiyP0SAueVmVpmb/preview",
        "https://drive.google.com/file/d/1nEepHVCwZ37Qh0VScSXy2RnVXFZYLcN7/preview",
        "https://drive.google.com/file/d/1nCVfLtozaSWJzAJruHCZMToE_KAC83Em/preview",
        "https://drive.google.com/file/d/1uCqs6PmlmkO7fSYNECJ6koGw7QY6m_7a/preview",
        "https://drive.google.com/file/d/1vMm5ZMlf_NlSaAD3BC8eLB0Lw5Ln6CVS/preview",
        "https://drive.google.com/file/d/11qJIfKR_EI4_sqCqNlFwXLpBF6Iwh7QM/preview",
        "https://drive.google.com/file/d/14gxuYY3L1A_Wvw3yRHFOH7zpLmPujCcp/preview",
        "https://drive.google.com/file/d/1qKD7IXLKW8oN9XGshlSvmB_fAnMeDDMi/preview"
      ],
      description: "Key moments and insights from the interview"
    }
  ],

  workflowSectionTitle: "Automation Workflows",
  workflowSectionHighlight: "Workflows",
  workflows: [
    {
      title: "Data Management for Customer Insights",
      nodes: ["Data Fetch", "Transform Data", "Filter Data", "Quality Control Check", "Send to Data Warehouse", "Data Enrichment", "Analyze Customer Data", "Generate Report", "Send Notification (Email)", "Archive Data"],
      description: "Automated collection and synthesis of customer data to provide actionable insights for sales and marketing teams. Alleviates issues related to time-consuming data aggregation and enhances data accuracy."
    },
    {
      title: "Sales Performance Monitoring",
      nodes: ["Fetch Call Data", "Analyze Call Metrics", "Identify Trends", "Filter Low Performance Calls", "Send Alerts (Email)", "Create Dashboard", "Quality Control Check", "Store Data in Database", "Notify Team", "Summarize Findings"],
      description: "Real-time monitoring of sales call performance and identifying areas for improvement. Addresses concerns regarding sales team productivity and effectiveness."
    },
    {
      title: "Applicant Tracking System Optimization",
      nodes: ["Fetch Job Applications", "Parse CVs", "Quality Control Check", "Filter Candidates", "Rank Candidates", "Send Notifications (Email)", "Schedule Interviews", "Log Data in ATS", "Generate Report", "Provide Feedback Loop"],
      description: "Streamlined process for managing job applications to improve candidate selection efficiency. Reduces workload on HR teams and enhances the candidate experience."
    },
    {
      title: "Recruitment Fraud Detection",
      nodes: ["Fetch Candidate Submissions", "Analyze Data Patterns", "Identify Anomalies", "Quality Control Check", "Flag Suspicious Applications", "Notify HR Team (Email)", "Review Findings", "Document Decisions", "Archive Records", "Update System"],
      description: "Automated detection of potential fraud within recruitment processes to ensure candidate authenticity. Minimizes risks associated with fraudulent applications and protects the organization's reputation."
    },
    {
      title: "Marketing Campaign Analysis",
      nodes: ["Fetch Campaign Data", "Analyze Engagement Metrics", "Measure ROI", "Quality Control Check", "Generate Insights Report", "Send to Marketing Team (Email)", "Schedule Follow-up Meeting", "Document Recommendations", "Archive Reports", "Update Campaign Strategy"],
      description: "In-depth analysis of marketing campaign performance to enhance future strategies. Addresses challenges related to ineffective campaigns and helps refine targeting efforts."
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

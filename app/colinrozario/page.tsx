
import ProfilePage from "@/components/ProfilePage"
import profileImg from "./Colin Rozario Profile Pic.png"

const pageData = {
  profileImage: profileImg,
  name: "Colin Rozario",
  highlightWord: "Colin",
  tagline: "Exploring the art of automation and AI-powered creativity.",

  mediaSectionTitle: "Discover The Magic",
  mediaSectionHighlight: "Magic",
  mediaContent: [
    {
      title: "Full Interview",
      type: "video" as const,
      thumbnail: "/images/Full-Interview.png",
      icon: "PlayCircle" as const,
      embedUrl: "https://drive.google.com/file/d/1IGy9giQDkWYsgBBG88U7M3ravA7aITfO/preview",
      description: "Complete interview with Colin Rozario"
    },
    {
      title: "Amazing Song",
      type: "audio" as const,
      thumbnail: "/images/Amazing-Song.png",
      icon: "Music" as const,
      embedUrl: "https://drive.google.com/file/d/1lBbzTvRYbsLFdnD3t2vicHuuH6ncRDcX/preview",
      description: "Colin Rozario's magical musical creation"
    },
    {
      title: "Speaker Introduction",
      type: "video" as const,
      thumbnail: "/images/Introduction.png",
      icon: "Mic" as const,
      embedUrl: "https://drive.google.com/file/d/18VOCEyeK1yKlaAg793wqiXmp7NMcgHJ2/preview",
      description: "Introduction to Colin Rozario"
    },
    {
      title: "Interview Highlights",
      type: "videolist" as const,
      thumbnail: "/images/Highlights.png",
      icon: "Video" as const,
      embedUrl: [
        "https://drive.google.com/file/d/1b7TPobcADT_g27uvFBXaSQSBFuAJ80ui/preview",
        "https://drive.google.com/file/d/1OzZwpOOwh_-f8pdNFBu7OM8xOO5Gxt1P/preview",
        "https://drive.google.com/file/d/11VHcH-yHXyPgyh5KlCH_QHd8Ho39ulWO/preview",
        "https://drive.google.com/file/d/1KOyVgA6CKpeR_gLRHEhAY1YT4kfDrH5y/preview",
        "https://drive.google.com/file/d/1Fc6Cj4sOp0iZGxKpEC2NsO8OA_Kef6U2/preview",
        "https://drive.google.com/file/d/18GdggWEv0-1WSj6Px3iP4dvJmch0PhK7/preview",
        "https://drive.google.com/file/d/1V7I95qxF2UruumnZtd-_UPII7AbMX_IU/preview",
        "https://drive.google.com/file/d/1xUcZNIcmx9Srsx2N55YTMR-_UfOMZtyr/preview",
        "https://drive.google.com/file/d/14w70eOlZOEQDRQfjpg9luzn4uleyeZqc/preview",
        "https://drive.google.com/file/d/1JKLvFwIZtf-_pRHbX2b4moQQkpwMWCWq/preview",
        "https://drive.google.com/file/d/1EptRVT0hQC6oZKKL849I9Bl1HMKpcUwz/preview",
        "https://drive.google.com/file/d/1NwQaxC1nPyrJGpUdLyz5Wut2VOPNzbf-/preview",
        "https://drive.google.com/file/d/1kFxmuCtTYqF1V7lAtjrDaDXEPVKHYwCG/preview",
        "https://drive.google.com/file/d/164gxRbIFnKBxwfmPL5_6SHl7qzn38yGb/preview",
        "https://drive.google.com/file/d/1j9UngFNwRAlUp2WZm_VY7GREXHZN_Faq/preview"
      ],
      description: "Key moments and insights from the interview"
    }
  ],

  workflowSectionTitle: "Automation Workflows",
  workflowSectionHighlight: "Workflows",
  workflows: [
    {
      title: "Automation Type: Research Automation",
      nodes: ["Web Scraper Node", "Signal Identifier Node", "Data Enrichment Node", "AI Research Analysis Node", "Insights Generator Node", "Data Formatter Node", "Quality Control Check Node", "Error Handling Node", "Reporting Node", "Notification Node"],
      description: "Automates the process of gathering signals from various online sources related to cost pressures and leadership changes in target sectors. Reduces time spent on manual research and improves data accuracy for decision-making."
    },
    {
      title: "Automation Type: Presentation Creation",
      nodes: ["Content Generation Node", "Design Node", "Review Node", "Finalization Node", "Quality Control Check Node", "Error Handling Node", "Export Node", "Storage Node", "Sharing Node", "Notification Node"],
      description: "Automates the creation of presentations by generating content and designing slides using automated tools. Minimizes the effort and time required to produce visually appealing and informative presentations."
    },
    {
      title: "Automation Type: Market Analysis Workflow",
      nodes: ["Data Collection Node", "Competitor Analysis Node", "Insights Extraction Node", "AI Prediction Node", "Recommendation Node", "Report Generation Node", "Quality Control Check Node", "Error Handling Node", "Stakeholder Notification Node", "Archive Node"],
      description: "Facilitates a comprehensive analysis of market trends and competitor positioning by pulling in data from various systems. Eliminates guesswork in strategic planning and provides actionable insights grounded in data."
    },
    {
      title: "Automation Type: Client Interaction Tracking",
      nodes: ["CRM Integration Node", "Interaction Logger Node", "Data Enrichment Node", "Analysis Node", "Insights Reporter Node", "Quality Control Check Node", "Error Handler Node", "Alert Node", "Follow-Up Scheduler Node", "Archive Node"],
      description: "Tracks client interactions and analyses patterns to improve engagement strategies. Addresses the manual tracking of interactions and enhances the overall engagement strategy based on insights gathered."
    },
    {
      title: "Automation Type: Financial Forecasting",
      nodes: ["Data Import Node", "Historical Data Analysis Node", "AI Predictive Model Node", "Forecast Report Node", "Quality Control Check Node", "Alert Node", "Error Handling Node", "Data Export Node", "Stakeholder Notification Node", "Review Node"],
      description: "Generates financial forecasts based on historical data and predictive analytics. Reduces risks associated with inaccurate forecasting and enhances decision-making processes concerning budgeting and investments."
    },
    {
      title: "Automation Type: Lead Qualification Process",
      nodes: ["Lead Capture Node", "Data Enrichment Node", "Qualification Criteria Node", "AI Scoring Node", "Review Node", "Quality Control Check Node", "Error Handling Node", "Alert Node", "Qualified Leads Reporting Node", "Stakeholder Notification Node"],
      description: "Automates the qualification of leads based on set criteria and enriches the lead data for accuracy. Cuts down time spent on unqualified leads and improves the efficiency of the sales process."
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

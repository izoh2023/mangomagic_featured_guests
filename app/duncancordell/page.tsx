
import ProfilePage from "@/components/ProfilePage"
import profileImg from "./Duncan Cordell Profile pic.jpg"

const pageData = {
  profileImage: profileImg,
  name: "Duncan Cordell",
  highlightWord: "Duncan",
  tagline: "Exploring the art of automation and AI-powered creativity.",

  mediaSectionTitle: "Discover The Magic",
  mediaSectionHighlight: "Magic",
  mediaContent: [
    {
      title: "Full Interview",
      type: "video" as const,
      thumbnail: "/images/Full-Interview.png",
      icon: "PlayCircle" as const,
      embedUrl: "https://drive.google.com/file/d/1NPeXedKXVA7yEAyoSRtopovkDwKnAyEH/preview",
      description: "Complete interview with Duncan Cordell"
    },
    {
      title: "Amazing Song",
      type: "audio" as const,
      thumbnail: "/images/Amazing-Song.png",
      icon: "Music" as const,
      embedUrl: "https://drive.google.com/file/d/15bsfr-T04hYYCmyuInDJ2LbpY1hUNfCY/preview",
      description: "Duncan Cordell's magical musical creation"
    },
    {
      title: "Speaker Introduction",
      type: "video" as const,
      thumbnail: "/images/Introduction.png",
      icon: "Mic" as const,
      embedUrl: "https://drive.google.com/file/d/1wcsnBe40Qo9iZo_FFR8Kz4FiiMln6Ixi/preview",
      description: "Introduction to Duncan Cordell"
    },
    {
      title: "Interview Highlights",
      type: "videolist" as const,
      thumbnail: "/images/Highlights.png",
      icon: "Video" as const,
      embedUrl: [
        "https://drive.google.com/file/d/1qB8z9kBxyjQGWT5tL8x55Gn9csenD1Uw/preview",
        "https://drive.google.com/file/d/17l2jmJRw9ozwEq0t-HjiG_re2-ce_kCC/preview",
        "https://drive.google.com/file/d/1_2JnK-ISyxpsaTMVXC9QF_8qCdAwO7vB/preview",
        "https://drive.google.com/file/d/1YfxhnWW09QaCOWZXmcyactT_yU5My1B6/preview",
        "https://drive.google.com/file/d/1q1Pg_vR6pMUUSaRNyZtiwnLjaL1IU6ap/preview",
        "https://drive.google.com/file/d/1FhhBg8IMuZX6XF0PWUtf74oooN-pp9DE/preview",
        "https://drive.google.com/file/d/1FWPukMv4zzoLPzV7neOYQryHL_OHHazX/preview",
        "https://drive.google.com/file/d/1riYsUsQXOLzDSW_uW2Gb10ZNeTcsmEMB/preview",
        "https://drive.google.com/file/d/14UQAhjDHWlFocnPr8rLf10KUmpKnbQsW/preview",
        "https://drive.google.com/file/d/12rF9TcxyP3pOrGPYyCatWXs1urtvlGDO/preview",
        "https://drive.google.com/file/d/1GJ6oczu-tR58BSjSmgBUdG1Gwgy8tGoc/preview",
        "https://drive.google.com/file/d/1i5kr2dpt7pm8qkGSWrtImNZ_DA_50OcN/preview",
        "https://drive.google.com/file/d/1XPBt96YfIMbBYg-cKN4P1qLeWbfXSy64/preview",
        "https://drive.google.com/file/d/1gJBp_0L8dx49tmTvxcQ_pqdSc9dCRSp7/preview",
        "https://drive.google.com/file/d/1xnBEWBXSFkfGCbeox6w2euPiljrNo1IJ/preview",
        "https://drive.google.com/file/d/1VQr0v8TPYqRA6PhoP9SbnCYNeeG_PGc-/preview",
        "https://drive.google.com/file/d/1cda_dkhUtfzWOsIUMIMAKLg4sPRNw248/preview",
        "https://drive.google.com/file/d/1lcV5rWdlgEUXaIMeD3B0HMlx5PwttJBz/preview",
        "https://drive.google.com/file/d/1G72cWPSRw6TZniblEoogV4oQSUFRdDaZ/preview"
      ],
      description: "Key moments and insights from the interview"
    }
  ],

  workflowSectionTitle: "Automation Workflows",
  workflowSectionHighlight: "Workflows",
  workflows: [
    {
      title: "Data Ingestion and Quality Control",
      nodes: ["Webhook Trigger", "Data Parsing", "Data Validation", "Quality Control Check", "Error Handling", "Data Storage", "Notification for Failed Ingestion", "Data Transformation", "Data Analysis", "Dashboard Update"],
      description: "This automation ingests data from various sources, validates its quality, and processes it for further use. Pain points alleviated include inaccurate data entering the system and lack of visibility on data quality issues."
    },
    {
      title: "Claims Processing Automation",
      nodes: ["Webhook Trigger", "Retrieve Claim Data", "Data Validation", "Approval Workflow", "Quality Control Check", "Update Systems (CRM)", "Error Handling", "Notify Stakeholders", "Generate Reports", "Archive Documents"],
      description: "This automation streamlines the processing of insurance claims from submission to approval. Pain points alleviated include delayed claims processing and communication gaps between stakeholders."
    },
    {
      title: "Customer Feedback Loop",
      nodes: ["Webhook Trigger", "Collect Feedback Data", "Data Categorization", "Sentiment Analysis", "Quality Control Check", "Store Feedback", "Notify Relevant Teams", "Create Action Items", "Update CRM", "Dashboard Update"],
      description: "This automation captures customer feedback, analyzes sentiment, and shares insights with necessary teams. Pain points alleviated include unnoticed customer concerns and unaddressed feedback leading to customer dissatisfaction."
    },
    {
      title: "Regulatory Compliance Monitoring",
      nodes: ["Scheduled Trigger", "Retrieve Compliance Data", "Data Validation", "Quality Control Check", "Error Handling", "Generate Compliance Reports", "Notify Compliance Team", "Store Documentation", "Update Risk Management Dashboard", "Schedule Review"],
      description: "This automation ensures that compliance data is regularly monitored, validated, and reported efficiently. Pain points alleviated include missing deadlines for compliance reporting and inaccurate compliance records."
    },
    {
      title: "Marketing Campaign Tracking",
      nodes: ["Webhook Trigger", "Retrieve Campaign Data", "Data Analysis", "Conversion Tracking", "Quality Control Check", "Store Results", "Notify Marketing Team", "Generate Performance Report", "Dashboard Update", "Archive Campaign Data"],
      description: "This automation tracks the performance of marketing campaigns and measures conversion rates. Pain points alleviated include inability to analyze campaign effectiveness and difficulty in measuring ROI."
    },
    {
      title: "Data Synchronization Across Systems",
      nodes: ["Scheduled Trigger", "Retrieve Data from Source A", "Data Transformation", "Data Mapping", "Quality Control Check", "Store in Destination B", "Notify IT Team", "Generate Sync Report", "Update Documentation", "Error Handling"],
      description: "This automation synchronizes data between different systems to ensure consistency and accuracy. Pain points alleviated include data discrepancies and manual data transfer errors."
    },
    {
      title: "Performance Metrics Reporting",
      nodes: ["Scheduled Trigger", "Retrieve Performance Data", "Data Validation", "Quality Control Check", "Data Aggregation", "Generate Report", "Notify Managers", "Update Dashboard", "Archive Report", "Schedule Next Report"],
      description: "This automation gathers performance metrics from various departments and generates reports. Pain points alleviated include inefficiency in manual reporting and missed performance insights."
    },
    {
      title: "Invoice Processing Automation",
      nodes: ["Webhook Trigger", "Retrieve Invoice Data", "Data Validation", "Approval Workflow", "Quality Control Check", "Update Accounting System", "Notify Finance Team", "Generate Payment Report", "Archive Invoice", "Error Handling"],
      description: "This automation processes invoices from receipt to payment. Pain points alleviated include delayed payments and miscommunication between departments regarding invoices."
    },
    {
      title: "Sales Lead Nurturing",
      nodes: ["Webhook Trigger", "Retrieve Lead Data", "Data Validation", "Quality Control Check", "Segment Leads", "Automate Follow-Up Messages", "Notify Sales Team", "Update CRM", "Generate Report", "Schedule Lead Review"],
      description: "This automation assists in nurturing sales leads through targeted communications. Pain points alleviated include lost leads due to lack of follow-up and fragmented lead management processes."
    },
    {
      title: "Employee Performance Review Automation",
      nodes: ["Scheduled Trigger", "Retrieve Employee Data", "Data Validation", "Quality Control Check", "Feedback Collection", "Generate Review Reports", "Notify HR Team", "Store Documentation", "Update HR Dashboard", "Schedule Next Review"],
      description: "This automation facilitates employee performance reviews by gathering necessary data and feedback. Pain points alleviated include missed performance reviews and disorganization in employee feedback collection."
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

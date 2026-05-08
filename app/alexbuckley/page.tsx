
import ProfilePage from "@/components/ProfilePage"
import profileImg from "./Alex Buckley Profile Pic.jpg"

const pageData = {
  profileImage: profileImg,
  name: "Alex Buckley",
  highlightWord: "Alex",
  tagline: "Exploring the art of automation and AI-powered creativity.",

  mediaSectionTitle: "Discover The Magic",
  mediaSectionHighlight: "Magic",
  mediaContent: [
    {
      title: "Full Interview",
      type: "video" as const,
      thumbnail: "/images/Full-Interview.png",
      icon: "PlayCircle" as const,
      embedUrl: "https://drive.google.com/file/d/1WSxNn1DIZFh3mtXjuBV5b2oD0yapxkMa/preview",
      description: "Complete interview with Alex Buckley"
    },
    {
      title: "Amazing Song",
      type: "audio" as const,
      thumbnail: "/images/Amazing-Song.png",
      icon: "Music" as const,
      embedUrl: "https://drive.google.com/file/d/1-6dQuU9p2q1NFEMQpIJht0pr0oeIGKb1/preview",
      description: "Alex Buckley's magical musical creation"
    },
    {
      title: "Speaker Introduction",
      type: "video" as const,
      thumbnail: "/images/Introduction.png",
      icon: "Mic" as const,
      embedUrl: "https://drive.google.com/file/d/1J2nfH4RwN6e2Lm1Jl1I1Uv3tS1hXx6JD/preview",
      description: "Introduction to Alex Buckley"
    },
    {
      title: "Interview Highlights",
      type: "videolist" as const,
      thumbnail: "/images/Highlights.png",
      icon: "Video" as const,
      embedUrl: [
        "https://drive.google.com/file/d/1nx94ZnMHlKagd6T-uw3QEVafkDYyUKB4/preview",
        "https://drive.google.com/file/d/14MrAwEaQyD14M5wjGCsgB0dHD8KAulDH/preview",
        "https://drive.google.com/file/d/1OlhsKBPCrH51WQ7ae4lIzrVEbVQ49oSB/preview",
        "https://drive.google.com/file/d/1BvitCkSFQc0wpvTRfMa_VCqf6SQLTOCu/preview",
        "https://drive.google.com/file/d/1vC1AP8I0DytwbX3KUKfec5WYgxtqoEzS/preview",
        "https://drive.google.com/file/d/1jda1y4JPQX5IQ4CQns5xmLBqG2_5lAb1/preview",
        "https://drive.google.com/file/d/1cdOTU6enwCQT5_QXPbXgLZ3rXNycf0_M/preview",
        "https://drive.google.com/file/d/1GwEsLYozlqQvegDe6NoZc8RdFSVOXV5t/preview",
        "https://drive.google.com/file/d/1nFkvZ2K2x7ArYxjV3PQp_FUBapI3xikB/preview",
        "https://drive.google.com/file/d/16_K_XhqBTBxzoFPwatxiesgGVsz4_2ZL/preview",
        "https://drive.google.com/file/d/1fOGzHD_HqiqSkLOXHof8uuDrwhqVmlsR/preview",
        "https://drive.google.com/file/d/1Lie3TY2OeJF_TPqo5loALhc_aYIfx-1Y/preview",
        "https://drive.google.com/file/d/1uvScCVVV03PziJSgH_Mv_WDzlGGjixVK/preview"
      ],
      description: "Key moments and insights from the interview"
    }
  ],

  workflowSectionTitle: "Automation Workflows",
  workflowSectionHighlight: "Workflows",
  workflows: [
    {
      title: "Lead Generation Automation",
      nodes: ["HTTP Request Trigger", "Google Sheets", "API Call to Apollo", "Decision Node (Lead Status)", "Send Email (New Lead)", "Add to CRM", "Quality Control Check", "Error Handling", "Schedule Next Follow-up", "Log Activity"],
      description: "Automate lead generation by fetching data from Google Sheets, using Apollo to enrich lead details, and sending automated emails to new leads. Pain points alleviated include time-consuming manual data entry, inconsistent lead follow-up, and inefficient tracking of lead engagement."
    },
    {
      title: "AI Cold Calling Automation",
      nodes: ["Webhook Trigger", "AI Voice Call Node", "Schedule Callback", "Quality Control Check", "API Integration for CRM", "Log Call Outcome", "Decision Node (Call Result)", "Send Email (Meeting Confirmed)", "Error Handling", "Notification to Sales Team"],
      description: "Automatically initiate cold calls to leads using AI, log outcomes in CRM, and notify the sales team of any confirmed meetings. Pain points alleviated consist of inconsistent outreach methods, lack of follow-up on calls, and time spent on scheduling and tracking call outcomes."
    },
    {
      title: "Investor Reporting Automation",
      nodes: ["Google Sheets Trigger", "Data Formatting Node", "API Integration with Financial Data Provider", "Generate PDF Report", "Email Report to Investors", "Quality Control Check", "Error Handling", "Archive Reports", "Notification Node (Reporting Complete)", "Log Activity"],
      description: "Streamline the process of generating and sending financial reports to investors by integrating data from Google Sheets with external financial data. Pain points alleviated include manual report creation, lengthy approval processes, and poor communication about report status."
    },
    {
      title: "Market Research Automation",
      nodes: ["Scheduled Trigger", "Web Scraping Node", "Data Processing Node", "Google Sheets Update", "API Call to Analytics Platform", "Quality Control Check", "Decision Node (Analysis Result)", "Send Report via Email", "Error Handling", "Log Activity"],
      description: "Automate the collection of market research data from various online sources and process it for analysis, providing insights via automated reports. Pain points alleviated include slow data collection, inconsistent data quality, and lack of actionable insights from research findings."
    },
    {
      title: "Customer Feedback Collection Automation",
      nodes: ["Webhook Trigger", "Survey Platform Integration", "Data Formatting Node", "API Call to CRM", "Quality Control Check", "Send Thank You Email", "Decision Node (Feedback Type)", "Log Feedback in Dashboard", "Error Handling", "Notification to Customer Success Team"],
      description: "Collect and process customer feedback using a survey platform, ensuring responses are logged in the CRM and trigger relevant follow-up actions. Pain points alleviated consist of disorganized feedback collection, delayed response to customer insights, and inadequate follow-up procedures."
    },
    {
      title: "Appointment Scheduling Automation",
      nodes: ["HTTP Trigger", "Google Calendar API", "Data Validation Node", "Send Email Invitation", "Quality Control Check", "Decision Node (Response Received)", "Update CRM", "Error Handling", "Log Activity", "Send Reminder Email"],
      description: "Automate the scheduling of appointments by integrating with Google Calendar, sending invitations, and handling responses efficiently. Pain points alleviated include double-booking of appointments, manual scheduling errors, and poor communication of appointment details."
    },
    {
      title: "E-commerce Order Processing Automation",
      nodes: ["Webhook Trigger", "E-commerce Platform Integration", "Data Validation Node", "API Call to Inventory Management", "Quality Control Check", "Send Order Confirmation Email", "Decision Node (Payment Status)", "Update Customer Record", "Error Handling", "Log Order Activity"],
      description: "Facilitate the processing of e-commerce orders by integrating with inventory management systems and automating communications with customers. Pain points alleviated include order fulfillment delays, manual inventory tracking, and lack of order status updates for customers."
    },
    {
      title: "Social Media Posting Automation",
      nodes: ["Scheduled Trigger", "Social Media API Integration", "Content Formatting Node", "Quality Control Check", "Decision Node (Post Approval)", "Publish Post", "Log Engagement Data", "Error Handling", "Notify Marketing Team", "Archive Posted Content"],
      description: "Automate the posting of content across social media platforms, ensuring that all posts are approved, formatted correctly, and logged for performance tracking. Pain points alleviated include inconsistent posting schedules, manual content approval delays, and lack of engagement tracking across platforms."
    },
    {
      title: "Event Registration Automation",
      nodes: ["Webhook Trigger", "Event Management Platform Integration", "Data Validation Node", "Send Confirmation Email", "Quality Control Check", "API Call to Payment Processor", "Decision Node (Payment Status)", "Update Attendee List", "Error Handling", "Log Registration Activity"],
      description: "Streamline the process of managing event registrations by integrating with payment processing and attendee management systems, automating communications. Pain points alleviated include registration errors, delayed confirmations, and difficulties in managing attendee data."
    },
    {
      title: "HR Recruitment Automation",
      nodes: ["Scheduled Trigger", "Job Posting API", "Data Validation Node", "Candidate Tracking System Integration", "Quality Control Check", "Send Interview Invitation Email", "Decision Node (Interview Status)", "Update Candidate Profile", "Error Handling", "Log Recruitment Activity"],
      description: "Automate the recruitment process by tracking job applications, scheduling interviews, and managing communication with candidates. Pain points alleviated include slow candidate tracking, inefficient communication, and the risk of overlooking qualified applicants."
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

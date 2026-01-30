
import ProfilePage from "@/components/ProfilePage"
import profileImg from "./Sonya Law Profile Pic.jpg"

const pageData = {
  profileImage: profileImg,
  name: "Sonya Law",
  highlightWord: "Sonya",
  tagline: "Exploring the art of automation and AI-powered creativity.",

  mediaSectionTitle: "Discover The Magic",
  mediaSectionHighlight: "Magic",
  mediaContent: [
    {
      title: "Full Interview",
      type: "video" as const,
      thumbnail: "",
      icon: "PlayCircle" as const,
      embedUrl: "https://drive.google.com/file/d/1al_QhgtO2c_5CUHbWIwH2aVFLXFFueCa/view?usp=drive_link",
      description: "Complete interview with Sonya Law"
    },
    {
      title: "Amazing Song",
      type: "audio" as const,
      thumbnail: "",
      icon: "Music" as const,
      embedUrl: "https://drive.google.com/file/d/1nzgINkOeGVy_eOZ6VCOLvE1AVtm6MiRZ/view?usp=drive_link",
      description: "Sonya Law's magical musical creation"
    },
    {
      title: "Speaker Introduction",
      type: "video" as const,
      thumbnail: "",
      icon: "Mic" as const,
      embedUrl: "https://drive.google.com/file/d/10lPKCINWWyuOjcW8MeFjrcrHXCuS7cZT/view?usp=drive_link",
      description: "Introduction to Sonya Law"
    },
    {
      title: "Interview Highlights",
      type: "videolist" as const,
      thumbnail: "",
      icon: "Video" as const,
      embedUrl: [
        "https://drive.google.com/open?id=1HbI6hZ4TK3VrHVQGosQ5Xtj77H3sDlyF&usp=drive_copy",
        "https://drive.google.com/open?id=1IShT8Sp2vPqp7XKh6kmnVsi0sBc6JNDv&usp=drive_copy",
        "https://drive.google.com/open?id=10Yelk2yULEhhq1dsVo1N2jU99ruZ7OLH&usp=drive_copy",
        "https://drive.google.com/open?id=1npv6XPD6A9uQsX0uw81W4FHX4h9vSb6Y&usp=drive_copy",
        "https://drive.google.com/open?id=1acYpZ6KkAQkQfkX_mlhO8AsQyaZVaVFH&usp=drive_copy",
        "https://drive.google.com/open?id=1VFA8OeQN_HgHLDSknQAO9mCoMlNElJYn&usp=drive_copy",
        "https://drive.google.com/open?id=1imS83PUBukkgBON8JLdt7zf7vux-LlZy&usp=drive_copy",
        "https://drive.google.com/open?id=1Z8ZnY2uYp0D9dgsgg_5CeEIY-ppuFd53&usp=drive_copy",
        "https://drive.google.com/open?id=1cdZ5O51Y-JQ4BSfNNC5HrCAgZZZ3TBJB&usp=drive_copy",
        "https://drive.google.com/open?id=1kgMB-e2R7gY3qYO_oj4yZ_WWX-jr48Uy&usp=drive_copy",
        "https://drive.google.com/open?id=1lyJHOLInsKelkrhkIC9Ffodlt75pOzS7&usp=drive_copy",
        "https://drive.google.com/open?id=1K15-iod51nEhbnzatTDQtByO9v_yhKl5&usp=drive_copy",
        "https://drive.google.com/open?id=1PveyOKsBt5nKJD9rTafaP50P30TK1UIW&usp=drive_copy",
        "https://drive.google.com/open?id=1QlVW3ZTtno5x_IMeZ0ZDHM1uEvs6svxy&usp=drive_copy",
        "https://drive.google.com/open?id=1blwNKiu5ID5y-GtplhM-U_kBl_bsKo9c&usp=drive_copy",
        "https://drive.google.com/open?id=16WwMRJxuj2Nmk1IjC0FXV16BrsI5yK7D&usp=drive_copy",
        "https://drive.google.com/open?id=1-06kh8LZukBuQ3hC9w7iIKoxSl6JsRJT&usp=drive_copy",
        "https://drive.google.com/open?id=1ciurbEoIY7RTAfjaG0pWnbJoDBGkNmn7&usp=drive_copy"
      ],
      description: "Key moments and insights from the interview"
    }
  ],

  workflowSectionTitle: "Automation Workflows",
  workflowSectionHighlight: "Workflows",
  workflows: [
    {
      title: "Exercise Performance Tracking",
      nodes: ["Webhook Trigger", "Garmin API - Get Activity Data", "Strava API - Upload Activity", "HTTP Request - Analyze Performance Metrics", "Set Variable - Calculate Trends", "Conditional - Check for Improvements", "Slack API - Send Notifications to User", "Google Sheets - Log Activity Data", "Quality Control - Review Data Integrity", "Error Handling - Send Alerts for Missing Data"],
      description: "Automates the process of tracking exercise performance across multiple platforms. Pain points alleviated include the need for manual data entry and error-prone reporting."
    },
    {
      title: "AI-Based HR Performance Review",
      nodes: ["HTTP Request - Fetch Employee Performance Data", "Google Sheets - Retrieve Historical Data", "AI Model - Analyze Data Trends", "Conditional - Identify Underperformers", "Slack API - Notify HR of Findings", "Google Calendar API - Schedule Review Meetings", "HTTP Request - Generate Performance Reports", "Quality Control - Validate Report Accuracy", "Email API - Send Reports to Managers", "Error Handling - Log Issues with Data Retrieval"],
      description: "Enhances the efficiency of HR performance reviews using AI insights. Pain points addressed include time-consuming data analysis and lack of data-driven feedback."
    },
    {
      title: "Wellness Tracking System",
      nodes: ["Webhook Trigger", "Mobile App API - Collect Wellness Check-ins", "Conditional - Identify Risk Zones", "HTTP Request - Fetch Support Resources", "Email API - Send Support Information to Employees", "Slack API - Notify Managers of Employee Risk", "Google Sheets - Log Wellness Data", "Quality Control - Validate Check-in Data", "Error Handling - Log Alerts for Incomplete Data", "Phone API - Prompt Calls for Immediate Check-ins", "Push Notification API - Alert Employees for Check-ins"],
      description: "Facilitates the monitoring of employee wellness through regular check-ins and prompts. Pain points addressed include lack of visibility into employee well-being and delayed responses to wellness concerns."
    },
    {
      title: "Performance Feedback Automation",
      nodes: ["Webhook Trigger", "Google Forms API - Gather Employee Feedback", "HTTP Request - Analyze Feedback Data", "Slack API - Send Performance Insights to Managers", "Google Calendar API - Schedule Feedback Sessions", "HTTP Request - Generate Feedback Report", "Email API - Distribute Reports to Employees", "Quality Control - Review Feedback Accuracy", "Conditional - Determine Follow-Up Actions", "Error Handling - Send Alerts for Feedback Anomalies"],
      description: "Streamlines the collection and analysis of performance feedback within teams. Pain points alleviated include inefficient feedback loops and lack of structured performance insights."
    },
    {
      title: "AI-Driven Recruitment Process",
      nodes: ["Webhook Trigger", "Job Board API - Retrieve Applicant Data", "AI Model - Evaluate Candidates", "Google Sheets - Log Candidate Evaluations", "Conditional - Identify Qualified Candidates", "Email API - Notify Candidates of Next Steps", "Calendly API - Schedule Interviews", "Slack API - Alert Hiring Team", "Quality Control - Review Candidate Evaluation Consistency", "Error Handling - Log Failed API Requests"],
      description: "Automates the recruitment process leveraging AI evaluations of candidates. Pain points addressed include time-consuming candidate assessments and unstructured recruitment processes."
    },
    {
      title: "Training Program Enrollment",
      nodes: ["Webhook Trigger", "Learning Management System API - Get Course Enrollment Data", "Google Sheets - Retrieve Previous Enrollment Records", "HTTP Request - Compare Enrollment Trends", "Conditional - Identify High Demand Courses", "Email API - Notify HR of Course Needs", "Slack API - Inform Employees of New Courses", "Google Calendar API - Schedule Training Sessions", "Quality Control - Validate Course Availability", "Error Handling - Send Alerts for Enrollment Issues"],
      description: "Optimizes the management of training program enrollments. Pain points alleviated include inefficient tracking of training needs and poor communication around new offerings."
    },
    {
      title: "Engagement Survey Automation",
      nodes: ["Webhook Trigger", "Survey API - Collect Employee Engagement Data", "HTTP Request - Analyze Engagement Trends", "Google Sheets - Log Survey Results", "Conditional - Identify Engagement Gaps", "Email API - Communicate Results to Management", "Slack API - Share Summaries with Teams", "Quality Control - Review Survey Response Accuracy", "Error Handling - Log Communication Issues", "Phone API - Prompt Follow-Up Calls for Feedback"],
      description: "Streamlines the collection and analysis of employee engagement surveys. Pain points addressed include ineffective engagement metrics and lack of actionable insights for management."
    },
    {
      title: "Health and Safety Monitoring",
      nodes: ["Webhook Trigger", "Safety Compliance API - Retrieve Incident Reports", "AI Model - Analyze Incident Patterns", "Conditional - Identify High-Risk Areas", "Email API - Notify Safety Officers", "Google Sheets - Log Incident Data", "Quality Control - Review Data for Completeness", "Slack API - Send Alerts to Employees", "Error Handling - Log Reporting Failures", "Phone API - Trigger Emergency Responses"],
      description: "Enhances the tracking of health and safety incidents within the organization. Pain points alleviated include slow incident reporting and lack of proactive safety measures."
    },
    {
      title: "Project Management Integration",
      nodes: ["Webhook Trigger", "Project Management Tool API - Fetch Project Status", "Google Sheets - Log Project Updates", "Conditional - Identify Delays", "Slack API - Notify Project Team of Issues", "Email API - Send Summary to Stakeholders", "HTTP Request - Generate Project Reports", "Quality Control - Validate Update Accuracy", "Error Handling - Log API Connection Issues", "Calendar API - Schedule Update Meetings"],
      description: "Automates project status tracking and stakeholder communication. Pain points addressed include manual tracking efforts and delayed communication on project progress."
    },
    {
      title: "Employee Onboarding System",
      nodes: ["Webhook Trigger", "HR Management System API - Get New Hire Data", "Google Sheets - Log Onboarding Progress", "Email API - Send Onboarding Documentation", "Slack API - Notify Team of New Hires", "Calendar API - Schedule Orientation Sessions", "Quality Control - Review Document Completeness", "Error Handling - Log Onboarding Issues", "HTTP Request - Generate Onboarding Reports", "Phone API - Trigger Check-ins with New Hires"],
      description: "Streamlines the employee onboarding process and documentation. Pain points alleviated include disorganized onboarding efforts and inconsistent communication with new hires."
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


import ProfilePage from "@/components/ProfilePage"
import profileImg from "./Miguel Molina Profile Pic.jpg"

const pageData = {
  profileImage: profileImg,
  name: "Miguel Molina Cosculluela",
  highlightWord: "Miguel",
  tagline: "Exploring the art of automation and AI-powered creativity.",

  mediaSectionTitle: "Discover The Magic",
  mediaSectionHighlight: "Magic",
  mediaContent: [
    {
      title: "Full Interview",
      type: "video" as const,
      thumbnail: "",
      icon: "PlayCircle" as const,
      embedUrl: "https://drive.google.com/file/d/1sNkpU4x0Fs6pzTn0XQSoeSHSmoynwvx8/view?usp=drive_link",
      description: "Complete interview with Miguel Molina Cosculluela"
    },
    {
      title: "Amazing Song",
      type: "audio" as const,
      thumbnail: "",
      icon: "Music" as const,
      embedUrl: "https://drive.google.com/file/d/1UBlBIA_v3pp_8iyAAmbmQW8tfc2QRGnC/view?usp=drive_link",
      description: "Miguel Molina Cosculluela's magical musical creation"
    },
    {
      title: "Speaker Introduction",
      type: "video" as const,
      thumbnail: "",
      icon: "Mic" as const,
      embedUrl: "https://drive.google.com/file/d/1wTU5yxS_sjNu_EUrZqL4M4SCN6xpr8G8/view?usp=drive_link",
      description: "Introduction to Miguel Molina Cosculluela"
    },
    {
      title: "Interview Highlights",
      type: "videolist" as const,
      thumbnail: "",
      icon: "Video" as const,
      embedUrl: [
        "https://drive.google.com/open?id=1TnkKY4bKDaedWPmFHBopu8GiqwmDjxRO&usp=drive_copy",
        "https://drive.google.com/open?id=16OwPYE6mXk-ZtgBmsFv4VULG3EINZAA6&usp=drive_copy",
        "https://drive.google.com/open?id=1Gk8925D0lZBpT4zOWg6uQ3uDs39q1TC2&usp=drive_copy",
        "https://drive.google.com/open?id=1iK69CW5ipWVqpPZMGzAN5m4GOY13bJQ0&usp=drive_copy",
        "https://drive.google.com/open?id=1zL9HP4Ars9cbDz8mZenIJW1q-d1uAgDh&usp=drive_copy",
        "https://drive.google.com/open?id=1rt3Nuqf2WoBgc9ekApbMhNXG9vBT7x4L&usp=drive_copy",
        "https://drive.google.com/open?id=1bM_EZ2ylDs0-jwmt2XR4FcCTuXhrlDEg&usp=drive_copy",
        "https://drive.google.com/open?id=1GpP0GfVS_Pc5bLkxTe85MZB-vK5luDMK&usp=drive_copy",
        "https://drive.google.com/open?id=1Fry7jWZAraRFTo5Q4B2VsPChO_xM6QdC&usp=drive_copy",
        "https://drive.google.com/open?id=1YfY_RN5vYdb_mzCJ96HAj-fcA9tF5s1Y&usp=drive_copy",
        "https://drive.google.com/open?id=13DVKH2GVx40GdXXIrEDobJwFX6nn_8zc&usp=drive_copy",
        "https://drive.google.com/open?id=15_vBV_Dp28S4wLGDAArtLsROKAkgq6Rj&usp=drive_copy",
        "https://drive.google.com/open?id=1k36L5ZDTpxgsdbaBAnsjQLbU1oTIjhjY&usp=drive_copy",
        "https://drive.google.com/open?id=1p1g1gxkMEaKU2iWjL0kal7AyTVd3BCFi&usp=drive_copy",
        "https://drive.google.com/open?id=1_Z-PdFGFxCU8lAB3GYK0IDAO7YCy-bst&usp=drive_copy",
        "https://drive.google.com/open?id=1QsPJ1aIFER-EAy330DXJXaOSnRMOtZgr&usp=drive_copy",
        "https://drive.google.com/open?id=1fL1vs9uBT9dDnh5SAqN5D2L1lrAzswDw&usp=drive_copy",
        "https://drive.google.com/open?id=1kKWa3HoEJDnSMQisiBXMQ3EQ99l-Chub&usp=drive_copy"
      ],
      description: "Key moments and insights from the interview"
    }
  ],

  workflowSectionTitle: "Automation Workflows",
  workflowSectionHighlight: "Workflows",
  workflows: [
    {
      title: "Email Response Optimization",
      nodes: ["Email Trigger Node", "Filter Node", "Microsoft Outlook Copilot Node", "Response Formatting Node", "Send Email Node", "Notification Node", "Quality Control Node", "Error Handling Node", "Log Activity Node", "Database Update Node"],
      description: "Automation outcome: Automated email responses using AI to enhance productivity. Pain points alleviated: Reduced email response time and improved response quality, allowing for more focus on other tasks."
    },
    {
      title: "Lead Generation Automation",
      nodes: ["LinkedIn Trigger Node", "Data Extraction Node", "Lemlist Integration Node", "Personalized Email Generation Node", "Send Email Node", "Response Filter Node", "Follow-Up Automation Node", "Quality Control Node", "Error Handling Node", "Database Update Node"],
      description: "Automation outcome: Seamless lead generation and follow-ups through automated outreach. Pain points alleviated: Manual lead tracking and outreach, enabling faster and more efficient engagement with potential clients."
    },
    {
      title: "Student Engagement Enhancement",
      nodes: ["Moodle Data Trigger Node", "Machine Learning Analysis Node", "Student Profile Identification Node", "Personalized Outreach Node", "Notifications to Students Node", "Quality Control Node", "Feedback Collection Node", "Error Handling Node", "Reporting Node", "Database Update Node"],
      description: "Automation outcome: Proactive identification and support for at-risk students through personalized communication. Pain points alleviated: Delayed responses to student issues, promoting higher retention rates and student success."
    },
    {
      title: "Health Data Analysis",
      nodes: ["Data Upload Node", "Data Processing Node", "AI Analysis Node", "User Query Node", "Recommendation Generation Node", "Notification Node", "Quality Control Node", "Error Handling Node", "Reporting Node", "Archive Data Node"],
      description: "Automation outcome: Automated analysis of health indicators to provide personalized recommendations. Pain points alleviated: Time-consuming manual analysis and improved clarity on health trends for individuals."
    },
    {
      title: "Personalized Training Feedback",
      nodes: ["Fitness Tracker Data Trigger Node", "Data Analysis Node", "Performance Evaluation Node", "AI Feedback Generation Node", "Notify User Node", "Quality Control Node", "Error Handling Node", "Performance Logging Node", "User Dashboard Update Node", "Archive Data Node"],
      description: "Automation outcome: Personalized feedback on training metrics for amateur athletes. Pain points alleviated: Lack of tailored feedback, leading to enhanced performance improvement."
    },
    {
      title: "Recipe Suggestion Automation",
      nodes: ["Image Recognition Node", "Inventory Recognition Node", "Meal Idea Generation Node", "Notify User Node", "Quality Control Node", "Error Handling Node", "Recipe Archive Update Node", "User Feedback Collection Node", "Database Update Node", "Send Confirmation Node"],
      description: "Automation outcome: Suggestions for meals based on available ingredients. Pain points alleviated: Time spent deciding on meals, leading to more efficient cooking plans."
    },
    {
      title: "Content Creation Assistance",
      nodes: ["Content Idea Node", "OpenAI Text Generation Node", "Formatting Node", "Quality Check Node", "User Review Node", "Error Handling Node", "Final Approval Node", "Publish Node", "Notification Node", "Archive Content Node"],
      description: "Automation outcome: Streamlined content creation process for marketing and communications. Pain points alleviated: Lengthy content generation times and potential quality issues through structured reviews."
    },
    {
      title: "Data Compliance Management",
      nodes: ["Data Collection Node", "Compliance Check Node", "AI Risk Assessment Node", "Notification Node", "Quality Control Node", "Error Handling Node", "Report Generation Node", "Archive Data Node", "User Notification Node", "Audit Logging Node"],
      description: "Automation outcome: Automated compliance checks for sensitive data. Pain points alleviated: Manual compliance review processes, improving corporate accountability and data security."
    },
    {
      title: "Interactive Learning Platform Automation",
      nodes: ["User Signup Trigger Node", "Content Personalization Node", "AI Tutor Activation Node", "User Interaction Node", "Feedback Loop Node", "Quality Control Node", "Error Handling Node", "Reporting Node", "Notification Node", "Database Update Node"],
      description: "Automation outcome: Personalized learning experiences for students through an interactive platform. Pain points alleviated: Generic content delivery, enhancing user engagement and educational outcomes."
    },
    {
      title: "Marketing Campaign Management",
      nodes: ["Campaign Trigger Node", "Audience Segmentation Node", "AI Content Creation Node", "Distribution Node", "Response Tracking Node", "Quality Control Node", "Error Handling Node", "Engagement Reporting Node", "User Segmentation Update Node", "Archive Campaign Node"],
      description: "Automation outcome: Efficient management of marketing campaigns with tailored messaging. Pain points alleviated: Inefficient campaign management and inability to personalize content for diverse audience segments."
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

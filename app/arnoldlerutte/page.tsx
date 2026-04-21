
import ProfilePage from "@/components/ProfilePage"
import profileImg from "./Arnold Le Rutte Profile pic.jpg"

const pageData = {
  profileImage: profileImg,
  name: "Arnold Le Rutte",
  highlightWord: "Arnold",
  tagline: "Exploring the art of automation and AI-powered creativity.",

  mediaSectionTitle: "Discover The Magic",
  mediaSectionHighlight: "Magic",
  mediaContent: [
    {
      title: "Full Interview",
      type: "video" as const,
      thumbnail: "/images/Full-Interview.png",
      icon: "PlayCircle" as const,
      embedUrl: "https://drive.google.com/file/d/13sBRXaFff2552Q2QGPUj9J6pgGUhj-yW/preview",
      description: "Complete interview with Arnold Le Rutte"
    },
    {
      title: "Amazing Song",
      type: "audio" as const,
      thumbnail: "/images/Amazing-Song.png",
      icon: "Music" as const,
      embedUrl: "https://drive.google.com/file/d/1digMpgtYDC-4I6vP_Q75_SHf4QM8oPe6/preview",
      description: "Arnold Le Rutte's magical musical creation"
    },
    {
      title: "Speaker Introduction",
      type: "video" as const,
      thumbnail: "/images/Introduction.png",
      icon: "Mic" as const,
      embedUrl: "https://drive.google.com/file/d/1FJQPWQZ0AaxUj3h3I1jFV321Jnq0MCAv/preview",
      description: "Introduction to Arnold Le Rutte"
    },
    {
      title: "Interview Highlights",
      type: "videolist" as const,
      thumbnail: "/images/Highlights.png",
      icon: "Video" as const,
      embedUrl: [
        "https://drive.google.com/file/d/1aYEtGcnAeHpwoobEi4FWmVE2XJ_Hr1v-/preview",
        "https://drive.google.com/file/d/1vPYC9VoNjnNDpOUwkx6SrjL_0UoRQDbW/preview",
        "https://drive.google.com/file/d/1b--AG7kDA2AmInz4pkBkDnzheqS6mciH/preview",
        "https://drive.google.com/file/d/1RmapHzZsLYTF65oZ5egdgH_X4FQb5uVe/preview",
        "https://drive.google.com/file/d/1GmwgIHJBJmNWdG8LVXXcNPF3-hsh97t4/preview",
        "https://drive.google.com/file/d/1TiNa3rSI90usw83SGZndKVWkkhgaGRJ-/preview",
        "https://drive.google.com/file/d/1Du7VKuDUFmibxznuPtgwwGVMXlXY-muG/preview",
        "https://drive.google.com/file/d/1DkdUObB2oq-kAtcuwxxC340TQSswo02u/preview",
        "https://drive.google.com/file/d/1dkWwzo8BaY3yXPE6-4jlO1oI8m0q9Cil/preview",
        "https://drive.google.com/file/d/1RSUZq8qvNzewCLlUzq7jpzNM4gLI2Fad/preview",
        "https://drive.google.com/file/d/1fJKWZU_h3OpP6a_or2lnPhrM6mh2rtnK/preview",
        "https://drive.google.com/file/d/18J4f1GkJtw4I0DCCWzZW66VMFheuz-ib/preview",
        "https://drive.google.com/file/d/19pqL3iyAxr-soMFz1uGcS3Cx8ims900V/preview",
        "https://drive.google.com/file/d/1oIt-L31zekmYvnl2VwcYigFAKnNFsokK/preview",
        "https://drive.google.com/file/d/1xPd8XBYMNQ5AHXbkcp7craORqL3Cwryh/preview",
        "https://drive.google.com/file/d/1vgg--2v3sLFwDdg60q4jbZaT4sa_JdAj/preview"
      ],
      description: "Key moments and insights from the interview"
    }
  ],

  workflowSectionTitle: "Automation Workflows",
  workflowSectionHighlight: "Workflows",
  workflows: [
    {
      title: "Workflow 1: Document Generation Automation",
      nodes: ["HTTP Request", "Data Collection Node", "AI Document Formatting Node", "PDF Generation Node", "Quality Control Node", "Error Handling Node", "Document Storage Node", "Email Notification Node", "Client Communication Node", "Completion Node"],
      description: "Automates the generation of client documentation by pulling data from various sources, formatting it with AI, and producing a PDF. Reduces manual input errors and significantly speeds up the documentation process, allowing team members to focus on more complex tasks."
    },
    {
      title: "Workflow 2: Task Assignment Automation",
      nodes: ["Webhook Trigger", "Data Extraction Node", "Task Assignment Node", "Client Notification Node", "Quality Control Node", "Error Handling Node", "Task Status Update Node", "Team Notification Node", "Dashboard Update Node", "Completion Node"],
      description: "Streamlines task delegation by automatically assigning tasks based on workload and team availability. Minimizes miscommunication and ensures prompt notifications, enhancing team efficiency."
    },
    {
      title: "Workflow 3: Onboarding Process Automation",
      nodes: ["Form Submission Node", "Data Validation Node", "Workflow Trigger Node", "System Integration Node", "Dashboard Update Node", "Quality Control Node", "Notification Node", "Client Follow-up Node", "Feedback Collection Node", "Completion Node"],
      description: "Facilitates the onboarding of new hires by customizing tasks and tracking progress throughout the process. Reduces the onboarding timeline and improves overall employee satisfaction by ensuring all necessary steps are completed efficiently."
    },
    {
      title: "Workflow 4: Client Feedback Collection Automation",
      nodes: ["Email Trigger", "Survey Distribution Node", "Data Collection Node", "Analysis Node", "Quality Control Node", "Error Handling Node", "Report Generation Node", "Client Summary Node", "Follow-up Schedule Node", "Completion Node"],
      description: "Automates the collection and analysis of client feedback after services are rendered. Enhances client relationships by ensuring timely follow-up and resolution of any issues."
    },
    {
      title: "Workflow 5: Social Media Posting Automation",
      nodes: ["RSS Feed Node", "Content Curation Node", "Scheduling Node", "Social Media Integration Node", "Quality Control Node", "Error Handling Node", "Analytics Node", "Notifications Node", "Performance Review Node", "Completion Node"],
      description: "Automates the creation and scheduling of social media posts based on curated content. Increases brand visibility and engagement by maintaining a consistent posting schedule without manual effort."
    },
    {
      title: "Workflow 6: Lead Generation Automation",
      nodes: ["Web Form Submission Node", "Data Validation Node", "CRM Integration Node", "Lead Scoring Node", "Quality Control Node", "Error Handling Node", "Email Notification Node", "Sales Team Update Node", "Follow-up Action Node", "Completion Node"],
      description: "Streamlines the collection and qualification of leads from various sources into the CRM system. Improves sales efficiency by ensuring timely notifications and follow-up while reducing lead loss."
    },
    {
      title: "Workflow 7: Inventory Management Automation",
      nodes: ["Inventory Update Node", "Threshold Check Node", "Supplier Integration Node", "Order Placement Node", "Quality Control Node", "Error Handling Node", "Inventory Update Notification Node", "Dashboard Update Node", "Report Generation Node", "Completion Node"],
      description: "Automates inventory monitoring and reordering processes to maintain optimal stock levels. Decreases the risk of stockouts and ensures that inventory is managed more efficiently."
    },
    {
      title: "Workflow 8: Financial Reporting Automation",
      nodes: ["Data Aggregation Node", "Financial Analysis Node", "Report Generation Node", "Quality Control Node", "Error Handling Node", "Approval Workflow Node", "Distribution Node", "Notification Node", "Review Meeting Scheduler Node", "Completion Node"],
      description: "Automates the creation and distribution of financial reports to stakeholders. Saves time for finance teams and enhances accuracy in financial reporting."
    },
    {
      title: "Workflow 9: Email Marketing Automation",
      nodes: ["Subscriber Database Node", "Segmentation Node", "Campaign Creation Node", "Scheduling Node", "Quality Control Node", "Error Handling Node", "Delivery Node", "Analytics Node", "Follow-up Sequence Node", "Completion Node"],
      description: "Streamlines the process of creating and sending email marketing campaigns to segmented lists. Improves engagement rates with personalized content and automates follow-up actions based on recipient interactions."
    },
    {
      title: "Workflow 10: Customer Support Ticket Automation",
      nodes: ["Support Request Node", "Ticket Creation Node", "Assignment Node", "Status Update Node", "Quality Control Node", "Error Handling Node", "Notification Node", "Escalation Process Node", "Client Communication Node", "Completion Node"],
      description: "Automates the customer support ticketing process to ensure efficient handling of queries. Enhances response times and customer satisfaction by automating ticket routing and status updates."
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

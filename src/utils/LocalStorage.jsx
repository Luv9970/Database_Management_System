const employee = [
  {
    id: 1,
    email: "alice.smith@example.com",
    password: "A1!z9xQw@",
    tasks: [
      {
        title: "Prepare Monthly Report",
        description: "Compile and analyze department data for monthly reporting.",
        date: "2025-05-20",
        category: "Reporting",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Team Meeting",
        description: "Attend team sync-up and present progress updates.",
        date: "2025-05-22",
        category: "Meetings",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Client Feedback Review",
        description: "Review client feedback and summarize issues raised.",
        date: "2025-05-18",
        category: "Client Support",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 2,
    email: "bob.jones@example.com",
    password: "B2#y7We$",
    tasks: [
      {
        title: "Database Optimization",
        description: "Analyze and optimize existing SQL queries.",
        date: "2025-05-25",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Code Review",
        description: "Review code changes in the last sprint.",
        date: "2025-05-21",
        category: "Code Quality",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Backup Verification",
        description: "Ensure daily database backups are working correctly.",
        date: "2025-05-19",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Deploy Feature Update",
        description: "Deploy the latest version of the web app.",
        date: "2025-05-23",
        category: "Deployment",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    email: "carol.davis@example.com",
    password: "C3*o8Lp%",
    tasks: [
      {
        title: "UI Design Mockups",
        description: "Create design mockups for the new feature.",
        date: "2025-05-24",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Brand Guidelines Update",
        description: "Update and publish the new branding guideline document.",
        date: "2025-05-18",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "UX Feedback Session",
        description: "Conduct feedback session with selected users.",
        date: "2025-05-21",
        category: "User Experience",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    email: "dave.brown@example.com",
    password: "D4^m3Hr&",
    tasks: [
      {
        title: "Server Configuration",
        description: "Set up staging server for testing.",
        date: "2025-05-26",
        category: "IT Infrastructure",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Security Audit",
        description: "Run internal security audit on all systems.",
        date: "2025-05-20",
        category: "Security",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Incident Report",
        description: "Document the system outage on May 15.",
        date: "2025-05-16",
        category: "Reporting",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Firewall Rule Update",
        description: "Apply updated firewall policies.",
        date: "2025-05-24",
        category: "Security",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    email: "eve.johnson@example.com",
    password: "qwe",
    tasks: [
      {
        title: "Employee Onboarding",
        description: "Assist HR with new employee onboarding session.",
        date: "2025-05-20",
        category: "HR",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Training Module Review",
        description: "Evaluate effectiveness of recent training module.",
        date: "2025-05-22",
        category: "Training",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Policy Review",
        description: "Review and suggest updates for company policies.",
        date: "2025-05-25",
        category: "Compliance",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Annual Feedback Compilation",
        description: "Compile and summarize employee feedback.",
        date: "2025-05-18",
        category: "HR",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];



const admin = [
  {
    "id": 1,
    "email": "admin.james@example.com",
    "password": "123"
  },
  {
    "id": 2,
    "email": "admin.linda@example.com",
    "password": "456"
  },
  {
    "id": 3,
    "email": "admin.robert@example.com",
    "password": "789"
  }
]


export const setLocalStorage = () => {
    localStorage.setItem('employee', JSON.stringify(employee)); 
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employee'));
    const admins = JSON.parse(localStorage.getItem('admin'));

    console.log(employees , admins);
}

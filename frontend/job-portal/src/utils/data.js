import { Award, BarChart3, Briefcase, Building2, Clock, FileText, LayoutDashboard, MessageSquare, Plus, Search, Shield, Users } from "lucide-react";

export const jobSeekerFeature = [
    {
        icon: Search,
        title: "Smart Job Searching",
        description: "Bla blabla bla blabla bla blabla bla blabla bla blabla bla."
    },
    {
        icon: FileText,
        title: "Resume Builder",
        description: "Bla blabla bla blabla bla blabla bla blabla bla blabla bla."
    },
    {
        icon: MessageSquare,
        title: "Direct Communication",
        description: "Bla blabla bla blabla bla blabla bla blabla bla blabla bla."
    },
    {
        icon: Award,
        title: "Skill Assessment",
        description: "Bla blabla bla blabla bla blabla bla blabla bla blabla bla."
    },
];

export const employerFeature = [
    {
        icon: Users,
        title: "Talent Pool Access",
        description: "Bla blabla bla blabla bla blabla bla blabla bla blabla bla."
    },
    {
        icon: BarChart3,
        title: "Analytics Dashboard",
        description: "Bla blabla bla blabla bla blabla bla blabla bla blabla bla."
    },
    {
        icon: Shield,
        title: "Verified Candidates",
        description: "Bla blabla bla blabla bla blabla bla blabla bla blabla bla."
    },
    {
        icon: Clock,
        title: "Quick Hiring",
        description: "Bla blabla bla blabla bla blabla bla blabla bla blabla bla."
    },
];

export const NAVIGATION_MENU = [
    { id: "employer-dashboard", name: "Dashboard", icon: LayoutDashboard },
    { id: "post-job", name: "Post Job", icon: Plus },
    { id: "manage-job", name: "Manage Jobs", icon: Briefcase },
    { id: "company-profile", name: "Company Profile", icon: Building2 },
];

export const CATEGORIES = [
    { value: "Engineering", label: "Engineering" },
    { value: "Design", label: "Design" },
    { value: "Marketing", label: "Marketing" },
    { value: "Sales", label: "Sales" },
    { value: "IT & Software", label: "IT & Software" },
    { value: "Customer-service", label: "Customer Service" },
    { value: "Product", label: "Product" },
    { value: "Operations", label: "Operations" },
    { value: "Finance", label: "Finance" },
    { value: "HR", label: "HR" },
    { value: "Other", label: "Other" },
];

export const JOB_TYPES = [
    { value: "Remote", label: "Remote" },
    { value: "Full-Time", label: "Full-Time" },
    { value: "Part-Time", label: "Part-Time" },
    { value: "Contract", label: "Contract" },
    { value: "Internship", label: "Internship" },
];

export const SALARY_RANGE = [
    "Less than $1000",
    "$1000 - $15,000",
    "More than $15,000",
]
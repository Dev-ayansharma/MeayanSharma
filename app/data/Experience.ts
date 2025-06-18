export type Experience = {
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string;
    paid: boolean;
    certificate: string;
    visit: string;
    jobtype: string;
    worklink?: string;
};

export const experiences: Experience[] = [
    {
        title: "Full Stack Developer",
        company: "Digital Guruji",
        startDate: "2023-04-04",
        endDate: "2023-06-04",
        description: "Build a full stack application end to end  of mcp servers technology",
        paid: true,
        certificate: "/C1.jpg",
        visit: "https://www.digitalguru.buzz/",
        jobtype: "Internship",
        worklink: "https://mcp-central.vercel.app/",
    },
];
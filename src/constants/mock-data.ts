import { Subject } from "../types";

export const MOCK_SUBJECTS: Subject[] = [
    {
        id: 1,
        code: "CS501",
        name: "Advanced Algorithms",
        department: "CS",
        description:
            "Deep dive into graph theory, dynamic programming, and distributed algorithms.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 2,
        code: "MAT320",
        name: "Applied Linear Algebra",
        department: "Math",
        description:
            "Matrix factorization and vector spaces with practical data science applications.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 3,
        code: "PHY210",
        name: "Modern Physics",
        department: "English",
        description:
            "Covers relativity, quantum theory, and the experimental foundations of physics.",
        createdAt: new Date().toISOString(),
    },
];
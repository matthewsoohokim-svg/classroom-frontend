import { Subject } from "../Types";

export const mockSubjects: Subject[] = [
  {
    id: 1,
    courseCode: "CS301",
    name: "Data Structures and Algorithms",
    department: "Computer Science",
    description: "A study of fundamental data structures such as arrays, linked lists, trees, and graphs, along with algorithm design and complexity analysis.",
    createdAt: "2024-01-15",
  },
  {
    id: 2,
    courseCode: "MATH201",
    name: "Linear Algebra",
    department: "Mathematics",
    description: "Covers vector spaces, linear transformations, matrices, determinants, eigenvalues, and applications in engineering and data science.",
    createdAt: "2024-01-15",
  },
  {
    id: 3,
    courseCode: "BUS410",
    name: "Business Strategy and Management",
    department: "Business Administration",
    description: "Examines frameworks for competitive strategy, organizational design, and decision-making in complex business environments.",
    createdAt: "2024-01-15",
  },
];

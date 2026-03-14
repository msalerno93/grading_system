// src/api/Students.ts

export interface StudentWithAverage {
  student_id: number;
  first_name: string;
  last_name: string;
  average_grade: number | null;
}

export const getAllStudentsWithAverages = async (): Promise<StudentWithAverage[]> => {
  const response = await fetch("http://localhost:5000/students/with-grades");

  if (!response.ok) {
    throw new Error("Failed to fetch students with grades");
  }

  return response.json();
};

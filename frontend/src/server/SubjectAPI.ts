// src/api/Students.ts


export interface Subjects {
  subject_id: number;
  subject_name: string;
  description: string;
}

export const getAllSubjects = async (): Promise<Subjects[]> => {
  const response = await fetch("http://localhost:5000/subjects");
  if (!response.ok) {
    throw new Error("Failed to fetch subjects");
  }

  return response.json();
};

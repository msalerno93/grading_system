// src/api/Students.ts

export interface Teachers {
  teacher_id: number;
  first_name: string;
  last_name: string;
  first_class: string | null;
}

export const getAllTeachers = async (): Promise<Teachers[]> => {
  const response = await fetch("http://localhost:5000/teachers");
  if (!response.ok) {
    throw new Error("Failed to fetch teachers");
  }

  return response.json();
};

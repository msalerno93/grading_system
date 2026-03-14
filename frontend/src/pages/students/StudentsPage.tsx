// StudentsPage.tsx (or Students.tsx)
import { useEffect, useState } from "react";
import TableComponent from "../../components/TableComponent";
import { getAllStudentsWithAverages, StudentWithAverage } from "../../server/StudentAPI";

const StudentsPage = () => {
  const [students, setStudents] = useState<StudentWithAverage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const data = await getAllStudentsWithAverages();
        setStudents(data);
      } catch (err) {
        console.error("Error fetching students with grades:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const columns = [
    { id: "student_id", label: "ID" },
    { id: "first_name", label: "First Name" },
    { id: "last_name", label: "Last Name" },
    { id: "average_grade", label: "Average Grade" },
  ];

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <TableComponent
      title="Students"
      buttonLabel="Add Student"
      onButtonClick={() => console.log("Add Student clicked")}
      columns={columns}
      rows={students}
      onRowClick={(row) => console.log("Clicked student:", row)}
    />
  );
};

export default StudentsPage;

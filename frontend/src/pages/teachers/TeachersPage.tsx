import { useEffect, useState } from "react";
import TableComponent from "../../components/TableComponent";
import { getAllTeachers, Teachers } from "../../server/TeacherAPI";

const columns = [
  { id: "teacher_id", label: "ID" },
  { id: "first_name", label: "First Name" },
  { id: "last_name", label: "Last Name" },
  { id: "first_class", label: "Class" },
];

const TeachersPage = () => {
  const [teachers, setTeachers] = useState<Teachers[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const data = await getAllTeachers();
        setTeachers(data);
      } catch (err) {
        console.error("Error fetching teachers:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
  }, []);
  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }
  return (
    <>
      <TableComponent
        title="Teachers"
        buttonLabel="Add Teacher"
        onButtonClick={() => console.log("Add Teacher clicked")}
        columns={columns}
        rows={teachers}
        onRowClick={(row) => console.log("Clicked teacher:", row)}
      />
    </>
  );
};

export default TeachersPage;

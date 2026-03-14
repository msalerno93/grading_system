import TableComponent from "../../components/TableComponent";
import { getAllSubjects, Subjects } from "../../server/SubjectAPI"
import { useEffect, useState } from "react";
const columns = [
  { id: "subject_id", label: "ID" },
  { id: "subject_name", label: "Subject Name" },
  { id: "description", label: "Description" },
  // { id: "teacher", label: "Teacher" },
];

const SubjectsPage = () => {
  const [subjects, setSubjects] = useState<Subjects[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const data = await getAllSubjects();
        setSubjects(data);
      } catch (err) {
        console.error("Error fetching subjects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSubjects();
  }, []);
  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <>
      <TableComponent 
      title="Subjects" 
      buttonLabel="Add New Subject" 
      onButtonClick={() => console.log("Add Subject clicked")}
      columns={columns} 
      rows={subjects} />;
    </>
  );
};

export default SubjectsPage;

import { useEffect, useState } from "react";
import TableComponent from "../../components/TableComponent";
import PopUpModal from "../../components/PopUpModal";
import { getAllSubjects, Subject } from "../../server/subjects/GetSubjectsAPI";

const SubjectsPage = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(true);

  // Modal state
  const [openModal, setOpenModal] = useState(false);

  // Fields for adding a subject
  const subjectFields = [
    { name: "subject_name", label: "Subject Name" },
    { name: "description", label: "Description" },
  ];

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

  const columns = [
    { id: "subject_id", label: "ID" },
    { id: "subject_name", label: "Subject Name" },
    { id: "description", label: "Description" },
  ];

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <>
      <TableComponent
        title="Subjects"
        buttonLabel="Add Subject"
        onButtonClick={() => setOpenModal(true)}   // <-- OPEN MODAL
        columns={columns}
        rows={subjects}
        onRowClick={(row) => console.log("Clicked subject:", row)}
      />

      {/* Reusable Modal for Adding Subjects */}
      <PopUpModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        title="Add Subject"
        fields={subjectFields}
        onSubmit={(data) => {
          console.log("Subject submitted:", data);
          // TODO: call POST /subjects API here
        }}
      />
    </>
  );
};

export default SubjectsPage;

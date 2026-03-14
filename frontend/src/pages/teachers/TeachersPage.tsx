import { useEffect, useState } from "react";
import TableComponent from "../../components/TableComponent";
import PopUpModal from "../../components/PopUpModal";
import { getAllTeachers, Teachers } from "../../server/teachers/GetTeachersAPI";

const columns = [
  { id: "teacher_id", label: "ID" },
  { id: "first_name", label: "First Name" },
  { id: "last_name", label: "Last Name" },
  { id: "first_class", label: "Class" },
];

const TeachersPage = () => {
  const [teachers, setTeachers] = useState<Teachers[]>([]);
  const [loading, setLoading] = useState(true);

  // Modal state
  const [openModal, setOpenModal] = useState(false);

  // Fields for this modal
const teacherFields = [
  { name: "first_name", label: "First Name" },
  { name: "last_name", label: "Last Name" },
  {
    name: "class_id",
    label: "Class",
    type: "select",
    options: [
      { label: "Math", value: 1 },
      { label: "Science", value: 2 },
      { label: "History", value: 3 },
      { label: "English", value: 4 },
    ],
  },
];

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
        onButtonClick={() => setOpenModal(true)}   // <-- OPEN MODAL
        columns={columns}
        rows={teachers}
        onRowClick={(row) => console.log("Clicked teacher:", row)}
      />

      {/* Reusable Modal */}
      <PopUpModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        title="Add Teacher"
        fields={teacherFields}
        onSubmit={(data) => {
          console.log("Teacher submitted:", data);
          // TODO: call add_teacher API
        }}
      />
    </>
  );
};

export default TeachersPage;

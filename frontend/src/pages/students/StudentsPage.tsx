import { useEffect, useState } from "react";
import TableComponent from "../../components/TableComponent";
import PopUpModal from "../../components/PopUpModal";
import { getAllStudentsWithAverages, StudentWithAverage } from "../../server/students/GetStudentsAPI";

const StudentsPage = () => {
  const [students, setStudents] = useState<StudentWithAverage[]>([]);
  const [loading, setLoading] = useState(true);

  // Modal state
  const [openModal, setOpenModal] = useState(false);

  // Fields for adding a student
  const studentFields = [
    { name: "first_name", label: "First Name" },
    { name: "last_name", label: "Last Name" },
  ];

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
    <>
      <TableComponent
        title="Students"
        buttonLabel="Add Student"
        onButtonClick={() => setOpenModal(true)}   // <-- OPEN MODAL
        columns={columns}
        rows={students}
        onRowClick={(row) => console.log("Clicked student:", row)}
      />

      {/* Reusable Modal for Adding Students */}
      <PopUpModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        title="Add Student"
        fields={studentFields}
        onSubmit={(data) => {
          console.log("Student submitted:", data);
          // TODO: call POST /students API here
        }}
      />
    </>
  );
};

export default StudentsPage;

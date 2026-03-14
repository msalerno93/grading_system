import TableComponent from "../../components/TableComponent";

const columns = [
  { id: "student_id", label: "ID" },
  { id: "first_name", label: "First Name" },
  { id: "last_name", label: "Last Name" },
  { id: "grade", label: "Average Grade" },
];

const rows = [
  { student_id: 1, first_name: "John", last_name: "Doe", grade: 85 },
  { student_id: 2, first_name: "Jane", last_name: "Smith", grade: 90 },

];

const StudentsPage = () => {
  return (
    <>
      <TableComponent title="Students" buttonLabel="Add New Student" columns={columns} rows={rows} />;
    </>
  );
};

export default StudentsPage;

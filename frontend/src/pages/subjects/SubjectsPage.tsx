import TableComponent from "../../components/TableComponent";

const columns = [
  { id: "subject_id", label: "ID" },
  { id: "name", label: "Subject Name" },
  { id: "teacher", label: "Teacher" },
];

const rows = [
  { subject_id: 1, name: "Math", teacher: "John Doe" },
  { subject_id: 2, name: "Science", teacher: "Jane Smith"},
];

const SubjectsPage = () => {
  return (
    <>
      <TableComponent title="Subjects" buttonLabel="Add New Subject" columns={columns} rows={rows} />;
    </>
  );
};

export default SubjectsPage;

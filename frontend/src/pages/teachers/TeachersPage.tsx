import TableComponent from "../../components/TableComponent";

const columns = [
  { id: "teacher_id", label: "ID" },
  { id: "first_name", label: "First Name" },
  { id: "last_name", label: "Last Name" },
  { id: "class", label: "Class" },
];

const rows = [
  { teacher_id: 1, first_name: "John", last_name: "Doe", class: "Math" },
  { teacher_id: 2, first_name: "Jane", last_name: "Smith", class: "Science" },
];

const TeachersPage = () => {
  return (
    <>
      <TableComponent title="Teachers" buttonLabel="Add New Teacher" columns={columns} rows={rows} />;
    </>
  );
};

export default TeachersPage;

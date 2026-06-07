import { useState } from "react";
import "./App.css";

function App() {
  const [student, setStudent] = useState({
    name: "",
    age: "",
    course: "",
  });
  const [students, setStudents] = useState([]);

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const addStudent = () => {
    if (!student.name || !student.age || !student.course) {
      alert("Please fill all fields");
      return;
    }
    setStudents([...students, student]);
    setStudent({
      name: "",
      age: "",
      course: "",
    });
  };

  return (
    <div>
      {/* Header */}
      <header className="header" onCli>
        <h1>Student Management Portal</h1>

        <nav>
          <a href="#home">Home</a>
          <a href="#students">Students</a>
          <a href="#courses">Courses</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Welcome to Student Portal</h2>
        <p>
          Manage student records easily using React.
        </p>
      </section>

      {/* Cards */}
      <section className="cards">
        <div className="card">
          <h3>Students</h3>
          <p>Total student records managed in one place.</p>
        </div>

        <div className="card">
          <h3>Courses</h3>
          <p>Track enrolled courses and batches.</p>
        </div>

        <div className="card">
          <h3>Reports</h3>
          <p>Generate reports and monitor progress.</p>
        </div>
      </section>

      {/* Form Section */}
      <section className="form-container">
        <h2>Add Student</h2>
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={student.name}
          onChange={(e) => setStudent({
            ...student,
            [e.target.name]: e.target.value,
          })}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={student.age}
          onChange={handleChange}
        />
        <input
          type="text"
          name="course"
          placeholder="Course"
          value={student.course}
          onChange={handleChange}
        />
        <button onClick={addStudent}>
          Add Student
        </button>
      </section>

      {/* Table Section */}
      <section className="table-container">
        <h2>Student Records</h2>

        {students.length === 0 ? (
          <p>No students added yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
              </tr>
            </thead>

            <tbody>
              {students.map((stu, index) => (
                <tr key={index}>
                  <td>{stu.name}</td>
                  <td>{stu.age}</td>
                  <td>{stu.course}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
      {/* Footer */}
      <footer className="footer">
        <p>
          © 2026 Student Management Portal | Built with React
        </p>
      </footer>
    </div>
  );
}

export default App;
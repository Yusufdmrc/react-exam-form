import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const AddWorker = (props) => {
  const [studentName, setStudentName] = useState("");
  const [lesson, setLesson] = useState("");
  const [studentScore, setStudentScore] = useState("");
  const [error, setError] = useState();

  const minScore = 0;
  const maxScore = 100;

  const addWorkerHandler = (e) => {
    e.preventDefault();
    if (studentName.trim().length === 0) {
      setError({
        title: "Name field is mandatory",
        message: "Please enter a name.",
      });
      return;
    }

    if (lesson.trim().length === 0) {
      setError({
        title: "Lesson field is mandatory",
        message: "Please enter a lesson.",
      });
      return;
    }

    if (+studentScore < minScore || +studentScore > maxScore) {
      setError({
        title: "Score field is mandatory",
        message: `Please enter a number greater than ${minScore} and less than ${maxScore}`,
      });
      return;
    }
    props.setWorkers((prevState) => [
      {
        id: Math.floor(Math.random() * 1000),
        name: studentName,
        lesson: lesson,
        score: studentScore,
      },
      ...prevState,
    ]);
    setStudentName("");
    setLesson("");
    setStudentScore("");
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && <ErrorModal onConfirm={errorHandler} error={error} />}
      <Card className="mt-10">
        <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
          <label htmlFor="name" className="font-medium">
            Student Name
          </label>
          <input
            type="text"
            className="max-w-[30rem] w-full mx-auto border p-2"
            placeholder="Write the student name"
            id="name"
            onChange={(e) => setStudentName(e.target.value)}
            value={studentName}
          />
          <label htmlFor="lesson" className="font-medium">
            Lesson
          </label>
          <input
            type="text"
            className="max-w-[30rem] w-full mx-auto border p-2"
            placeholder="Write the lesson"
            id="lesson"
            onChange={(e) => setLesson(e.target.value)}
            value={lesson}
          />
          <label htmlFor="score" className="font-medium">
            Student Score
          </label>
          <input
            type="number"
            className="max-w-[30rem] w-full mx-auto border p-2"
            placeholder="Write the student score"
            id="score"
            onChange={(e) => setStudentScore(e.target.value)}
            value={studentScore}
          />
          <Button className="mt-1" type="submit">
            Add
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddWorker;

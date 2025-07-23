import { useEffect, useState } from "react";
import Form from "./components/Form";
import axios from "axios";

export default function App() {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false,
  });
  const url = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";

  useEffect(() => console.log(formData), [formData]);

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post(url, formData)
      .then((response) => {
        response.status !== 201
          ? alert(`Error: server returned with status: ${response.status}`)
          : alert("Post submitted successfully!");
      })
      .catch((err) => {
        console.error(err);
        alert(`Error: ${err}`);
      });
  }

  return (
    <>
      <div className="container pt-3">
        <h1 className="mb-3">Submit new post</h1>
        <div className="card">
          <div className="card-body">
            <Form
              formData={formData}
              setFormData={setFormData}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </>
  );
}

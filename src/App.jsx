import { useEffect, useState } from "react";
import Form from "./components/Form";

export default function App() {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false,
  });

  useEffect(() => console.log(formData), [formData]);

  return (
    <>
      <div className="container pt-3">
        <h1 className="mb-3">Submit new post</h1>
        <div className="card">
          <div className="card-body">
            <Form formData={formData} setFormData={setFormData} />
          </div>
        </div>
      </div>
    </>
  );
}

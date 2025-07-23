export default function Form({ formData, setFormData, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      {/* Author */}
      <div className="mb-3">
        <label htmlFor="author" className="form-label">
          Author
        </label>
        <input
          type="text"
          className="form-control"
          name="author"
          id="author"
          aria-describedby="authorHelper"
          placeholder="Author's name"
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
        />
        <small id="authorHelper" className="form-text text-muted">
          Insert the author's name
        </small>
      </div>
      {/* Title */}
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post title
        </label>
        <input
          type="text"
          className="form-control"
          name="title"
          id="title"
          aria-describedby="titleHelper"
          placeholder="Title"
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <small id="titleHelper" className="form-text text-muted">
          Insert the title
        </small>
      </div>
      {/* Body */}
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Body
        </label>
        <textarea
          className="form-control"
          name="body"
          id="body"
          rows="3"
          aria-describedby="bodyHelper"
          onChange={(e) => setFormData({ ...formData, body: e.target.value })}
        ></textarea>
        <small id="bodyHelper" className="form-text text-muted">
          Insert body of the post
        </small>
      </div>
      {/* Public */}
      <div className="mb-3">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="public"
            aria-describedby="publicHelper"
            id="public"
            onChange={(e) =>
              setFormData({ ...formData, public: e.target.checked })
            }
          />
          <label className="form-check-label" htmlFor="updates">
            Public post
          </label>
        </div>
        <small id="publicHelper" className="form-text text-muted">
          Whether the post is public or not
        </small>
      </div>
      {/* Submit */}
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

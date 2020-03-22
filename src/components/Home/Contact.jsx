import React from "react"

import Title from "../Globals/Title"

export const Contact = () => {
  return (
    <section className="contact py-5">
      <Title title={"contact us"} />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form
            action="https://formspree.io/jeremypchen@gmail.com"
            method="POST"
          >
            {/* name */}
            <div className="form-group">
              <label htmlFor="name">name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="John Smith"
              />
            </div>

            {/* email */}
            <div className="form-group">
              <label htmlFor="email">email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="jsmith@gmail.com"
              />
            </div>

            {/* body */}
            <div className="form-group">
              <label htmlFor="body">body</label>
              <textarea
                name="body"
                id="body"
                className="form-control"
                rows="5"
              />
            </div>

            {/* submit */}
            <button
              type="submit"
              className="btn btn-yellow btn-block text-lowercase mt-5"
            >
              send
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

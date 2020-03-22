import React from "react"
import { Link } from "gatsby"

import Title from "../Globals/Title"

export const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
              eveniet velit excepturi id, rerum numquam facilis? Reiciendis
              facilis culpa quod excepturi, eius consequuntur impedit nam. Sint,
              repellat. Rerum eveniet dolore sint, culpa minima porro ad
              eligendi earum libero hic ex, ipsum illo doloribus quia fugiat.
              Magni nesciunt deleniti eos sequi.
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info

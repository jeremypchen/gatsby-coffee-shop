import React from "react"
import { Link } from "gatsby"

import Title from "../Globals/Title"

export const Info = ({ showAboutButton = true }) => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center text-lowercase">
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
              eaque facilis rerum vel veniam expedita sapiente, vero a nisi
              recusandae nam, accusantium tenetur possimus et unde debitis, illo
              nihil aliquid consectetur at excepturi architecto! Amet velit
              consectetur, fuga tempora voluptatibus recusandae ipsam quo
              dolorum excepturi vero delectus reiciendis ut voluptatum, rem
              veritatis temporibus voluptas natus vitae? Delectus atque
            </p>
            <p className="text-muted mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
              natus in, modi voluptatem vitae ullam repudiandae nulla voluptatum
              accusantium officiis. oluptatem vitae. Vitum vitae Delectus atque
            </p>
            {showAboutButton && (
              <Link to="/about">
                <button className="btn text-lowercase btn-yellow">
                  More About Us
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info

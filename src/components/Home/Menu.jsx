import React, { useState } from "react"

import Title from "../Globals/Title"
import Img from "gatsby-image"

const getCategories = items => {
  const categories = items.map(item => item.node.category)

  const distinct = (value, index, self) => {
    return self.indexOf(value) === index
  }

  return ["all", ...categories.filter(distinct)]
}

const Menu = props => {
  const [allItems] = useState(props.items.edges)
  const [filteredItems, setFilteredItems] = useState(props.items.edges)
  const [categories] = useState(getCategories(props.items.edges))

  const handleItems = category => {
    if (category === "all") {
      setFilteredItems(allItems)
    } else {
      setFilteredItems(
        props.items.edges.filter(item => item.node.category === category)
      )
    }
  }

  if (allItems.length) {
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title="menu" />
          {/* categories */}
          <div className="row mb-5">
            <div className="col-10 mx-auto text-center">
              {categories.map((category, index) => (
                <button
                  type="button"
                  className="btn btn-yellow text-lowercase m-2"
                  key={index}
                  onClick={() => handleItems(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          {/* items */}
          <div className="row">
            {filteredItems.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="col-11 col-md-6 my-2 d-flex mx-auto"
                >
                  <div>
                    <Img
                      fixed={node.image.fixed}
                      style={{ width: "80px", height: "80px" }}
                    />
                  </div>

                  {/* item text */}
                  <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-0 text-bold text-lowercase">
                        {node.title}
                      </h6>
                      <h6 className="mb-0 text-yellow">
                        {node.price.toFixed(2)}
                      </h6>
                    </div>

                    <p className="text-muted text-lowercase">
                      <small>{node.description.description}</small>
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  } else {
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title="menu" />
        </div>
        <div className="div row">
          <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
            <h1>there are no items to display</h1>
          </div>
        </div>
      </section>
    )
  }
}

export default Menu

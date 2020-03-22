import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Title from "../Globals/Title"
import Product from "./Product"

const productsQuery = graphql`
  {
    products: allContentfulCoffeeProduct {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxHeight: 426) {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Products = () => {
  return (
    <StaticQuery
      query={productsQuery}
      render={data => {
        return (
          <section className="py-5">
            <div className="container">
              <Title title={"products"} />
              <div className="row">
                {data.products.edges.map(({ node: product }) => {
                  return <Product key={product.id} product={product} />
                })}
              </div>
            </div>
          </section>
        )
      }}
    ></StaticQuery>
  )
}

export default Products

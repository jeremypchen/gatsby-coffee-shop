import React from "react"

const Footer = () => {
  return (
    <footer className="footer py-3">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 text-yellow text-center">
            <p
              style={{
                fontSize: 16,
                fontFamily: "Courier New, Courier, monospace",
              }}
            >
              all rights reserved &copy; {new Date().getFullYear().toString()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

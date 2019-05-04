import React from "react"
import useForm from "./useForm"

const Form = () => {
  const { values, handleChange, handleSubmit } = useForm(
    {
      email: "",
      password: "",
      note: "",
      agreed: false,
      answer: "Not sure",
      country: "Brazil"
    },
    login
  )

  function login() {
    console.log(values)
  }

  return (
    <div className="container py-4 px-1 px-md-3 px-lg-4 justify-content-center">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-primary">Registration Form</h5>
          <h6 className="card-subtitle mb-3 text-muted font-weight-light">
            Please fill the form below
          </h6>
          <form onSubmit={handleSubmit} className="">
            <div className="form-group">
              <label htmlFor="inputEmail">E-mail</label>
              <input
                type="email"
                className="form-control bg-light text-white"
                id="inputEmail"
                name="email"
                aria-describedby="emailHelp"
                placeholder="e-mail"
                onChange={handleChange}
                value={values.email}
                required
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword">Password</label>
              <input
                type="password"
                className="form-control bg-light text-white"
                id="inputPassword"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={values.password}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputNote">Note</label>
              <input
                type="text"
                className="form-control bg-light text-white"
                id="inputNote"
                name="note"
                placeholder="Note"
                onChange={handleChange}
                value={values.note}
              />
            </div>
            <div className="form-group">
              <label className="form-check-label mr-4" htmlFor="inlineRadio1">
                Have you visited us before?
              </label>
              <div className="form-check  form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="answer"
                  id="inlineRadio1"
                  value="Yes"
                  checked={values.answer === "Yes"}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  Yes
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="answer"
                  id="inlineRadio2"
                  value="No"
                  checked={values.answer === "No"}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  No
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="answer"
                  id="inlineRadio3"
                  value="Not sure"
                  checked={values.answer === "Not sure"}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="inlineRadio3">
                  Not sure
                </label>
              </div>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="agreed"
                id="agreed"
                onChange={handleChange}
                checked={values.agreed}
              />
              <label className="form-check-label" htmlFor="agreed">
                I agree to the term and conditions
              </label>
            </div>

            <div className="form-group mt-3">
              <label className="form-check-label mb-1" htmlFor="country">
                Please choose a country:
              </label>
              <select
                className="custom-select bg-light text-white"
                id="country"
                size="4"
                value={values.country}
                onChange={handleChange}
                name="country"
              >
                <option value="Argentina">Argentina</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Brazil">Brazil</option>
                <option value="Chile">Chile</option>
              </select>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form

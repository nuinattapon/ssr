import { useState } from "react"

const useForm = (initialValues, callback) => {
  const [values, setValues] = useState(initialValues)

  const handleSubmit = event => {
    if (event) event.preventDefault()
    callback()
  }

  const handleChange = event => {
    event.persist()
    const { name, value, type, checked } = event.target
    type === "checkbox"
      ? setValues(values => ({ ...values, [name]: checked }))
      : setValues(values => ({ ...values, [name]: value }))
  }

  return {
    handleChange,
    handleSubmit,
    values
  }
}

export default useForm

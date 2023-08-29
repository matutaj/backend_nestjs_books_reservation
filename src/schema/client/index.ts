import * as Yup from "yup"

const createClientSchema = Yup.object().shape({
    name: Yup.string().required()
})
export { createClientSchema }
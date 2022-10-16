import * as yup from 'yup'


const contactScheme = yup.object().shape({
    name:yup.string().required(),
    email:yup.string().email("Please provide a valid email...").required(),
    subject:yup.string().required().min(5),
    message:yup.string().required().min(15)
});

export default contactScheme
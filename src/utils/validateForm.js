import { object, string, mixed} from "yup";

let userSchema = object({
    fullname: string().required("The fullname is required."),
    email: string().email().required("Email is required."),
    phone: mixed().required("Phone number is required.")
});

const validateForm = async(dataForm) => {
    try {
        await userSchema.validate(dataForm);
        return { status: "success"};
    } catch (error) {
        return { status: "error", message: error.message} 
    }
}

export default validateForm;
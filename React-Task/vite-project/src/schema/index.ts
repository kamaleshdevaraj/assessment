import * as yup from "yup";

const yupValidate = Object.freeze({
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      "Invalid email format"
    ),
    string:yup.string(),
  loginPassword: yup.string().required("Password is required."),
  password: yup
    .string()
    .required("Password is required.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/^(?=.*[@$!%*#?&])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}/, {
      excludeEmptyString: true,
      message:
        "Password should contain combination of Uppercase, lowercase ,Number & special Characters.",
    }),
   
  mobile: yup.string().max(10).required("Phone number is required"),
  Name: yup.string().required('Name is Required'),
  role: yup.string(),
  YerasOfExperience:yup.number(),
  SportId:yup.string(),


  mail: yup
    .string()
    .email("Invalid email format")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      "Invalid email format"
    ),
});

const login = yup.object().shape({
  email: yupValidate.email,
  password: yupValidate.password,
});

const SignUp = yup.object().shape({
  name: yupValidate.Name,
  email: yupValidate.email,
  password: yupValidate.password,
  mobile: yupValidate.mobile,
  dob:yupValidate.string,
//   sportID:yupValidate.SportId,
  yearsOfExp:yupValidate.YerasOfExperience,
});

export const ResolverSchema = {
  login,
  SignUp,
};
export type ResolverSchemaType = typeof ResolverSchema;

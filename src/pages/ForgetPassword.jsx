import { useFormik } from "formik";
import {
  resetPasswordSchema,
  resetPasswordSchemaInitialValues,
} from "../utils/schemas/resetPasswordSchema";
import { Box, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "../styles/components/forget-password.modules.css";
export default function ForgetPassword() {
  const navigate = useNavigate();
  const onSubmit = (values) => {
    console.log(values);
  };
  const {
    values,
    errors,
    touched, // show error if you entered the input then go out [1) don't show error on first input enter 2) don't show error for other untouched inputs]
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: resetPasswordSchemaInitialValues,
    validationSchema: resetPasswordSchema,
    onSubmit,
  });
  return (
    <Box
      sx={{
        maxWidth: "440px",
        borderRadius: "10px",
        mx: "auto",
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        mb: "35px",
      }}
    >
      <CardMedia component={"img"} src="/allert.svg" />

      <Box
        sx={{
          textAlign: "center",
          lineHeight: "1.5",
        }}
      >
        <h2>Reset Password</h2>
        <p>
          Enter your registered email address, we will send instructions to help
          reset the password
        </p>
      </Box>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "4px" }}
        onSubmit={handleSubmit}
      >
        <h5>Email</h5>
        <input
          className="input-field"
          style={{ height: "40px", border: "1px solid #E5E7EB" }}
          type="text"
          placeholder="Email address"
          value={values.email}
        />
        <button
          onClick={() => {
            navigate("/");
          }}
          style={{
            marginTop: "12px",
            backgroundColor: "var(--brown)",
            color: "white",
            border: "none",
            padding: "12px 48px",
            fontWeight: "400",
            fontSize: "18px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Send Instruction
        </button>
      </form>
    </Box>
  );
}

import {
  Alert,
  Box,
  Button,
  Container,
  CssBaseline,
  Input,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import Styles from "./index.module.css";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { RouteConst } from "../../Routes/config";
import { ResolverSchema } from "../../schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Loginrequest } from "./Api";
import { useState } from "react";

export default function Login() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ResolverSchema.login),
    defaultValues: { email: "", password: "" },
    mode: "onBlur",
  });
  const Onsumbit = (data: any) => {
    Loginrequest(data, navigate, reset, setOpenSnackbar);
    console.log(data);
  };

  const handleSnackbarClose = (event: any, reason: string) => {
    setOpenSnackbar(false);
  };

  const navigate = useNavigate();
  return (
    <div className={Styles.ParentClass}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={Styles.ChildClass}>
          <Typography variant='h4' className={Styles.HeadingClass}>
            Login
          </Typography>
          <form onSubmit={handleSubmit(Onsumbit)}>
            <div className={Styles.InputClass}>
              <Controller
                name='email'
                control={control}
                defaultValue=''
                rules={{ required: "Email is Required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    placeholder='Enter your Email Address'
                    label='email'
                    type='email'
                    variant='outlined'
                    margin='normal'
                    fullWidth
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                )}
              />
              <Controller
                name='password'
                control={control}
                defaultValue=''
                rules={{ required: "Password is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    placeholder='Enter your Password '
                    label='Password'
                    type='password'
                    variant='outlined'
                    margin='normal'
                    fullWidth
                    error={!!errors.password}
                    helperText={errors.password?.message}
                  ></TextField>
                )}
              />
              <Button
                type='submit'
                variant='contained'
                color='secondary'
                fullWidth
              >
                Login
              </Button>
            </div>
          </form>
          <Box>
            <Typography className={Styles.Typography}>
              {" "}
              Didn’t have an account? &nbsp;{" "}
              <span
                className={Styles.Typography1}
                onClick={() => {
                  navigate(RouteConst.SignUp);
                }}
              >
                Sign Up
              </span>
            </Typography>
          </Box>
        </div>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={1000}
          onClose={handleSnackbarClose}
        >
          <Alert
            onClose={() => {
              setOpenSnackbar(false);
            }}
            severity={openSnackbar ? "success" : "error"}
            sx={{ width: "100%" }}
          >
            {openSnackbar ? "login Sucessfully" : "Network Error"}
          </Alert>
        </Snackbar>
      </Container>
    </div>
  );
}

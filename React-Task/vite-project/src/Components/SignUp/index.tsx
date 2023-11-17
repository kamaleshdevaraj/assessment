import {
  Container,
  CssBaseline,
  Typography,
  TextField,
  Button,
  Box,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  Alert,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { Controller, useForm } from "react-hook-form";
import Styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ResolverSchema } from "../../schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Signuprequest } from "./Api";

export default function Signup() {
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [user, SetUser] = useState<string>("");
  const handleSnackbarClose = (event: any, reason: string) => {
    setOpenSnackbar(false);
  };
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(ResolverSchema.SignUp),
    defaultValues: {},
    mode: "onBlur",
  });
  const navigate = useNavigate();

  const Onsumbit = (data) => {
    Signuprequest(
      { ...data, role: "user", machineId: "10" },
      setOpenSnackbar,
      SetUser,
      reset
    );
  };
  return (
    <div className={Styles.ParentClassSignup}>
      <Container component='main' maxWidth='xs'>
        <div className={Styles.ChildClass}>
          <Typography variant='h4' className={Styles.HeadingClass}>
            Sign up
          </Typography>
          <form onSubmit={handleSubmit(Onsumbit)}>
            <div className={Styles.InputClass}>
              <Controller
                name='name'
                control={control}
                defaultValue=''
                rules={{ required: "name is Required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    name='name'
                    placeholder='Enter your Email Address'
                    label='Name'
                    variant='outlined'
                    margin='normal'
                    size='small'
                    required
                    error={!!errors.name}
                    helperText={errors.name?.message}
                  />
                )}
              />
              <Controller
                name='email'
                control={control}
                defaultValue=''
                rules={{ required: "email is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    placeholder='Enter your email '
                    label='Email'
                    type='email'
                    size='small'
                    variant='outlined'
                    margin='normal'
                    fullWidth
                    required
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  ></TextField>
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
                    size='small'
                    variant='outlined'
                    margin='normal'
                    fullWidth
                    required
                    error={!!errors.password}
                    helperText={errors.password?.message}
                  ></TextField>
                )}
              />
              <Controller
                name='mobile'
                control={control}
                defaultValue=''
                rules={{ required: "Mobile is Required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    placeholder='Enter your Mobile'
                    label='Mobile'
                    variant='outlined'
                    type='number'
                    margin='normal'
                    size='small'
                    required
                    error={!!errors.mobile}
                    helperText={errors.mobile?.message}
                  />
                )}
              />
              <Controller
                name='dob'
                control={control}
                defaultValue=''
                rules={{ required: "Dob is Required" }}
                render={({ field }) => (
                  <TextField
                    InputLabelProps={{ shrink: true }}
                    {...field}
                    label='Dob'
                    placeholder='Enter your Dob'
                    type='date'
                    variant='outlined'
                    margin='normal'
                    size='small'
                    required
                    error={!!errors.dob}
                    helperText={errors.dob?.message}
                  />
                )}
              />
              <FormControl>
                <Controller
                  name='sportID'
                  control={control}
                  rules={{ required: "SportId is Required" }}
                  render={({ field }) => (
                    <>
                      <InputLabel id='demo-simple-select-helper-label'>
                        SportID
                      </InputLabel>
                      <Select
                        {...field}
                        size='small'
                        labelId='demo-simple-select-helper-label'
                        id='demo-simple-select-helper'
                        label='SportID'
                      >
                        <MenuItem value=''>
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                      </Select>
                    </>
                  )}
                />
              </FormControl>
              <Controller
                name='yearsOfExp'
                control={control}
                rules={{ required: " yearsOfExp is Required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    placeholder='Enter your Years of Experience'
                    label='Years of Experience'
                    variant='outlined'
                    margin='normal'
                    type='number'
                    size='small'
                    required
                    error={!!errors.yearsOfExp}
                    helperText={errors.yearsOfExp?.message}
                  />
                )}
              />
              <Button
                type='submit'
                variant='contained'
                color='secondary'
                fullWidth
                style={{ marginTop: "10px" }}
              >
                Sign Up
              </Button>
            </div>
          </form>
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

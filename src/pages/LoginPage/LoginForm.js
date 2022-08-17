import * as Yup from 'yup';
import Iconify from '../../components/Iconify';
import { useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import { Stack, TextField, IconButton, InputAdornment, Box, Button } from '@mui/material';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: (data) => {
     
    },
  });

  const { errors, touched, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Box sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "28vh 0"
        }}>
          <Stack spacing={3} sx={{
            width: "20%",
          }}>
            <TextField
              size="small"
              autoComplete="username"
              type="email"
              label="Email address"
              {...getFieldProps('email')}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
            />

            <TextField
              size="small"
              autoComplete="current-password"
              type={showPassword ? 'text' : 'password'}
              label="Password"
              {...getFieldProps('password')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword} edge="end">
                      <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
            />
            <Button variant='contained' sx={{ width: "100%" }}>Login</Button>

          </Stack>


        </Box>
      </Form>
    </FormikProvider>
  );
}
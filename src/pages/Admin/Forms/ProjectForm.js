import { Form, FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';
import CustomEditor from '../Editor/CustomEditor';
// material
import { LoadingButton } from '@mui/lab';
import { Box, Button, Card, Skeleton, Stack, TextField } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import DoneIcon from '@mui/icons-material/Done';
import { useState } from 'react';
import axios from 'axios';


// ----------------------------------------------------------------------

export default function ProjectForm({ EditRowPorps }) {
    // debugger
    const [selectedFile, setSelectedFile] = useState();
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    console.log('ProjectForm rerender', EditRowPorps);

    const LoginSchema = Yup.object().shape({
        title: Yup.string().required('Title is required'),
    });

    const formik = useFormik({
        initialValues: {
            title: EditRowPorps?.title,
        },
        validationSchema: LoginSchema,
        onSubmit: async (data) => {
            console.log(data, "data");
            setTitle(data.title)
            const formData = new FormData();
            formData.append('img', selectedFile)
            formData.append('title', ...data)
            formData.append('description', content)
            console.log("formData---->", formData);
            // debugger
            axios.post("http://localhost:5000/api/project/create",
                formData
                // {
                //     ...data,
                //     description: content,
                //     img
                // },
            )
                .then(function (response) {
                    console.log("response", response);
                })
                .catch(function (error) {
                    console.log("error", error);
                });
            // const formData = new FormData();
            // formData.append('file', selectedFile)
            // formData.append('title', ...data)
            // formData.append('description', content)
            // debugger
            // axios.post("http://localhost:5000/api/project/create", 
            // formData
            // // {
            // //     ...data,
            // //     description: content,
            // //     img
            // // },
            // )
            //     .then(function (response) {
            //         console.log("response",response);
            //     })
            //     .catch(function (error) {
            //         console.log("error", error);
            //     });

        },
    });

    const handleChange = (event) => {
        console.log(event.target.files);
        setSelectedFile(event.target.files[0])
    }

    const handleUpload = async () => {
        // if (!selectedFile) {
        //     alert("Please select a file");
        //     return
        // }

        // console.log("formData", img);


    }

    const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

    return (
        <>
            <FormikProvider value={formik}>
                <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <Stack spacing={3}>
                        <Stack spacing={3} justifyContent="center" direction={{ sm: "column", md: "row" }}>
                            <Box sx={{width: "100%"}}>
                                <TextField
                                    fullWidth
                                    size="small"
                                    autoComplete="username"
                                    type="title"
                                    label="Title"
                                    // defaultValue={EditRowPorps?.title}
                                    {...getFieldProps('title')}
                                    error={Boolean(touched.title && errors.title)}
                                    helperText={touched.title && errors.title}
                                />
                            </Box>
                            <Box sx={{width: "100%"}}>
                                <Button
                                    fullWidth
                                    variant="outlined"
                                    component="label"
                                    color={selectedFile ? "success" : "warning"}
                                    startIcon={!selectedFile ? <AddPhotoAlternateIcon /> : <DoneIcon />}
                                >
                                    Upload
                                    <input onChange={handleChange} hidden accept="image/*" multiple type="file" />
                                </Button>
                                <Skeleton variant="rounded" width="100%" height={80} />
                            </Box>
                        </Stack>
                        <CustomEditor getContent={setContent} defaultValue={EditRowPorps?.description} />
                        {/* <img alt="altmalt" src={selectedFile} /> */}
                    </Stack>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                        <Button
                            sx={{ width: '25%', textAlign: 'center' }}
                            size="medium"
                            // type="submit"
                            variant="contained"
                            onClick={handleUpload}
                        // loading={isSubmitting}
                        >
                            Upload
                        </Button>
                    </Box>
                </Form>
            </FormikProvider>
        </>
    );
}

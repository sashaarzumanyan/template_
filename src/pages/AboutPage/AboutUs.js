import React, { useEffect, useState } from 'react'
import './aboutPage.css'
import Picture1 from '../../assets/picture1.jpg'
import { Grid, Box, Typography, Paper } from '@mui/material';
import { useTranslation } from "react-i18next";
import { articleInfo } from '../../_mock/aboutPageContext';
import InfoArticle from '../../components/InfoArticle';
import EmployeeCard from '../../components/EmployeeCard';


const AboutUs = () => {
  const {t} = useTranslation()
  const [users, setUsers] = useState()
  console.log(users);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json))
  }, [])

  return (
    <>
      <div className=''>
        {articleInfo.map((item, index) => {
          return <InfoArticle image={item.image} text={index === 0 ? t("About_us"): item.text} title={item.title} index={index} />
        })}
      </div>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Paper className='sticky' sx={{ m: 2 }}>
              <Typography align='center' variant='h5' sx={{ fontWeight: "600", pt: 3, color: '#042E76' }} >Organisation and staff</Typography>
              <Typography sx={{ p: 3 }}>
                <strong>AGT International</strong>’s staff and technicians are assisted by highly-qualified experts available on short-term consultancy agreements. For this reason, <strong>AGT International</strong>&nbsp;manages a HR database, containing <strong>over 5000 qualified CVs.</strong>
                <strong>AGT International</strong>’s experts hold university degrees or higher education diplomas and are multilingual. They also have wide experience in project preparation and field work.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={9} sx={{ mt: 2}}>
            <Grid container spacing={4} sx={{display: "flex", justifyContent: 'center',alignItems: "start" }}>
              {users?.map((user, index) => {
                return <Grid item sx={4}>
                  <EmployeeCard fullName={user.name} position={user.company.bs} email={user.email} />
                </Grid>
              })}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default AboutUs




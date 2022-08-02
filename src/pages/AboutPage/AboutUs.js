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

  const cardText = [t("Tender_participation"), t("vodka_Prodaction"), t("Cargo_transportation"), t("Our_aim")]

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json))
  }, [])

  return (
    <>
      <div className=''>
        {articleInfo.map((item, index) => {
          return <InfoArticle image={item.image} text={cardText[index]} title={item.title} index={index} />
        })}
      </div>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Paper className='sticky' sx={{ m: 2 }}>
              <Typography align='center' variant='h5' sx={{ fontWeight: "600", pt: 3, color: '#042E76' }} >Our Team</Typography>
              <Typography sx={{ p: 3 }}>
                {t("Our_team")}
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




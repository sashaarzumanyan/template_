import React, { useEffect, useState } from 'react'
import './aboutPage.css'
import Picture1 from '../../assets/picture1.jpg'
import { Box, Grid, ListItem, ListItemIcon, ListItemText, Typography, Grow } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { useTranslation } from "react-i18next";
import { articleInfo } from '../../_mock/aboutPageContext';
import InfoArticle from '../../components/InfoArticle';
import EmployeeCard from '../../components/EmployeeCard';


const AboutUs = () => {
  const {t} = useTranslation()
  const [users, setUsers] = useState()

  const cardText = [t("Mission"), t("Vision")]
  const partnersList = t("partners_list", { returnObjects: true })
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json))
  }, [])

  return (
    <>
      <Grid item xs={12} md={5} lg={4} sx={{ padding: "4% 4% 10%" }}>
            <Typography variant='h2' sx={{ color: "#042E76", marginBottom: "100px" }}>
                <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...( { timeout: 1500 })}><div>ABOUT US</div></Grow>
            </Typography>
            <Typography variant="p"><Grow in={true} style={{ transformOrigin: '1 1 1' }} {...( { timeout: 1500 })}><div>{t("About_us")}</div></Grow></Typography>
            <div style={{ marginBottom: '50px'}}></div>
        {articleInfo.map((item, index) => {
          return <InfoArticle image={item.image} text={cardText[index]} title={item.title} index={index} />
        })}
      </Grid>
      <Typography variant='h4' sx={{ textAlign:"center", color: "#042E76", marginBottom: "100px" }}>
        <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...( { timeout: 1500 })}><div>Strategic Partners</div></Grow>
      </Typography>
      <Typography variant='p' sx={{ textAlign:"center", marginBottom: "100px" }}>
        <Grow in={true} style={{  padding: "4% 4%", transformOrigin: '1 0 0' }} {...( { timeout: 1500 })}><div>{t("Our_partners")}</div></Grow>
      </Typography>
      <Grid spacing={2} container xs={12} md={12} lg={12} sx={{ color: "#042E76", padding: "4% 4% 10%", margin: "50px 3%", width: "95%" }}>
          {partnersList.map((e, i) => {
              return (
                  <Grid item md={4} >
                      <Grow in={true} style={{ transformOrigin: '1 0 0' }} {...( { timeout: 1500 })}><ListItem disablePadding>
                          <ListItemIcon>
                              <CircleIcon fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary={e} />
                      </ListItem>
                      </Grow>
                  </Grid>
              )
          })}
      </Grid>
      <div>
        {/* <Grid container spacing={2}>
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
        </Grid> */}
      </div>
    </>
  )
}

export default AboutUs




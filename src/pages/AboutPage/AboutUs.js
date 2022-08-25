import CircleIcon from '@mui/icons-material/Circle';
import { Grid, Grow, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from "react-i18next";
import InfoArticle from '../../components/InfoArticle';
import { articleInfo } from '../../_mock/aboutPageContext';
import './aboutPage.css';


const AboutUs = () => {
  const {t} = useTranslation()

  const cardText = [t("Mission"), t("Vision")]
  const partnersList = t("partners_list", { returnObjects: true })

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
    </>
  )
}

export default AboutUs




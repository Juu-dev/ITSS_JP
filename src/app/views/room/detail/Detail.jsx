import * as React from "react";
import { Card, Grid, Box, styled, useTheme, Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import PropTypes from "prop-types";
import DetailTenant from "./DetailTenant";
import DetailDetail from "./DetailDetail";
import axiosInstance from "axios";

const Title = styled("div")(() => ({
  fontSize: "2rem",
  fontWeight: "500",
  marginRight: ".5rem",
  textTransform: "capitalize",
}));

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Detail = () => {
  const params = useParams();
  const room_id = params.room_id;
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axiosInstance
          .get(`http://localhost:8000/api/rooms/${room_id}`)
          .then((res) => {
            setData(res.data);
          });
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  const { palette } = useTheme();
  const textColor = palette.text.primary;

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <Container className="invoices">
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Card sx={{ px: 3, py: 2, mb: 3, textAlign: "center" }}>
            <Title>Room {room_id}</Title>
          </Card>
        </Grid>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example">
            <Tab label="Detail" {...a11yProps(0)} />
            <Tab label="Tenants" {...a11yProps(1)} />
            <Tab label="Invoices" {...a11yProps(2)} />
            <Tab label="Rent History" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <DetailDetail roomData={data} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <DetailTenant roomData={data} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Invoice
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          Rent History
        </CustomTabPanel>
      </Container>
    </Fragment>
  );
};

export default Detail;

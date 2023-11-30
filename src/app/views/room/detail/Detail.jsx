import {
  Card,
  Grid,
  Box,
  styled,
  useTheme,
  IconButton,
  Icon,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { Breadcrumb, SimpleCard } from "app/components";
import { topBarHeight } from "app/utils/constant";
import TenantCard from "./TenantCard";
import AddNewTenant from "./AddNewTenant";
import { useParams } from "react-router-dom";

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

const SearchContainer = styled("div")(({ theme }) => ({
  zIndex: 9,
  width: "100%",
  display: "flex",
  alignItems: "center",
  height: topBarHeight,
  background: "#fff",
  boxShadow: "0 1px 4px 0 rgb(0 0 0 / 24%)",
  color: theme.palette.text.primary,
  "&::placeholder": {
    color: theme.palette.text.primary,
  },
}));

const SearchInput = styled("input")(({ theme }) => ({
  width: "75%",
  border: "none",
  outline: "none",
  fontSize: "1rem",
  paddingLeft: "20px",
  height: "calc(100% - 5px)",
  background: "#fff",
  color: theme.palette.text.primary,
  "&::placeholder": { color: theme.palette.text.primary },
}));

const StyledAddNewTenant = styled(AddNewTenant)(({ theme }) => ({
  margin: theme.spacing(1),
  width: "25%",
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  spacing: "10px",
}));

const roomData = {
  apartment_id: 1,
  apartment_name: "A",
  room_number: 1,
  renter: "Nguyen Van A",
  rent_type: "Contracted for 6 months",
};

const tenantData = [
  {
    id: 1,
    name: "Nguyen Van A",
    phone: "0912345678",
    citizen_num: "1234567",
    owner: true,
    gender: "undefined",
    email: "lmao@gmail.com",
  },
  {
    id: 2,
    name: "Nguyen Van B",
    phone: "0912345678",
    citizen_num: "1234567",
    owner: true,
    gender: "undefined",
    email: "lmao@gmail.com",
  },
  {
    id: 3,
    name: "Nguyen Van C",
    phone: "0912345678",
    citizen_num: "1234567",
    owner: true,
    gender: "undefined",
    email: "lmao@gmail.com",
  },
  {
    id: 4,
    name: "Nguyen Van D",
    phone: "0912345678",
    citizen_num: "1234567",
    owner: true,
    gender: "undefined",
    email: "lmao@gmail.com",
  },
];

const Detail = () => {
  const params = useParams();
  const room_id = params.room_id;
  const id = params.id;
  const { palette } = useTheme();
  const textColor = palette.text.primary;

  return (
    <Fragment>
      <Container className="invoices">
        <Box className="breadcrumb">
          <Breadcrumb
            routeSegments={[
              { name: "Apartment", path: "/" },
              { name: "Room", path: "/material" },
            ]}
          />
        </Box>

        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Card sx={{ px: 3, py: 2, mb: 3, textAlign: "center" }}>
            <Title>Room {room_id}</Title>
          </Card>
        </Grid>
        <Grid container spacing={4} alignItems="flex-end">
          <Grid item xs={4}>
            <Item>
              <Typography variant="subtitle1" component="p">
                <strong>Apartment name:</strong> {roomData.apartment_name}
              </Typography>
              <Typography variant="subtitle1" component="p">
                <strong>Room:</strong> {roomData.room_number}
              </Typography>
              <Typography variant="subtitle1" component="p">
                <strong>Renter:</strong> {roomData.renter}
              </Typography>
              <Typography variant="subtitle1" component="p">
                <strong>Rent type:</strong> {roomData.rent_type}
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={8}>
            <SearchContainer>
              <SearchInput type="text" placeholder="Search here..." autoFocus />
              <IconButton sx={{ mx: 2, verticalAlign: "middle" }}>
                <Icon sx={{ color: textColor }}>close</Icon>
              </IconButton>
              <StyledAddNewTenant />
            </SearchContainer>{" "}
          </Grid>
          {tenantData?.map((tenant) => (
            <Grid item xs={6}>
              <TenantCard key={tenant.id} data={tenant} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Detail;

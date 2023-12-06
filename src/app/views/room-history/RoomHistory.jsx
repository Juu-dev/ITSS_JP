import {
  Card,
  Grid,
  Box,
  styled,
  useTheme,
  IconButton,
  Icon,
  Button,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { Breadcrumb, SimpleCard } from "app/components";
import { topBarHeight } from "app/utils/constant";
import TableCustom from "./TableCustom";

const Title = styled("div")(() => ({
  fontSize: "2rem",
  fontWeight: "500",
  marginRight: ".5rem",
  textTransform: "capitalize",
}));

const Content = styled("div")(({ theme }) => ({
  fontSize: "0.875rem",
  color: theme.palette.text.secondary,
}));

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const BoxCustom = styled(Box)(() => ({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex-end",
  cursor: "pointer",
  width: "100%",
  height: "100%",
  paddingLeft: 24,
}));

const BoxCustomButton = styled(Box)(() => ({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex-end",
  cursor: "pointer",
  width: "100%",
  height: "100%",
}));

const SearchContainer = styled("div")(({ theme }) => ({
  zIndex: 9,
  width: "80%",
  display: "flex",
  alignItems: "center",
  height: topBarHeight,
  background: "#fff",
  boxShadow: "0 1px 4px 0 rgb(0 0 0 / 24%)",
  color: theme.palette.text.primary,
  "&::placeholder": {
    color: theme.palette.text.primary,
  },
  marginBottom: "20px",
}));

const SearchInput = styled("input")(({ theme }) => ({
  width: "100%",
  border: "none",
  outline: "none",
  fontSize: "1rem",
  paddingLeft: "20px",
  height: "calc(100% - 5px)",
  background: "#fff",
  color: theme.palette.text.primary,
  "&::placeholder": { color: theme.palette.text.primary },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
}));

const RoomHistory = () => {
  const { palette } = useTheme();
  const textColor = palette.text.primary;

  return (
    <Fragment>
      <Container className="invoices">
        <Box className="breadcrumb">
          <Breadcrumb routeSegments={[{ name: "room", path: "/material" }]} />
        </Box>

        <Grid container spacing={5}>
          <Grid item lg={4} md={4} sm={4} xs={4}>
            <Card sx={{ px: 3, py: 2, mb: 3, textAlign: "center" }}>
              <Title>Room 501</Title>
            </Card>
            <Card sx={{ px: 3, py: 2, mb: 3, textAlign: "center" }}>
              <Content>Apartment: 1</Content>
              <Content>Room: 501</Content>
              <Content>Room Type: Luxury</Content>
            </Card>
          </Grid>
          <Grid item lg={6.8} md={6.8} sm={6.8} xs={6.8}>
            <BoxCustom>
              <SearchContainer>
                <SearchInput
                  type="text"
                  placeholder="Search here..."
                  autoFocus
                />
                <IconButton sx={{ mx: 2, verticalAlign: "middle" }}>
                  <Icon sx={{ color: textColor }}>close</Icon>
                </IconButton>
                <StyledButton variant="contained" color="primary">
                  Search
                </StyledButton>
              </SearchContainer>
            </BoxCustom>
          </Grid>
          <Grid item lg={1.2} md={1.2} sm={1.2} xs={1.2}>
            <BoxCustomButton>
              <StyledButton
                variant="contained"
                color="primary"
                sx={{ marginBottom: "20px" }}
              >
                Add/Insert
              </StyledButton>
            </BoxCustomButton>
          </Grid>
        </Grid>

        <SimpleCard title="Room">
          <TableCustom />
        </SimpleCard>

      </Container>
    </Fragment>
  );
};

export default RoomHistory;

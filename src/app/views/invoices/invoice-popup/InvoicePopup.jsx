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
import axiosInstance from "axios";

const Title = styled("div")(() => ({
  fontSize: "2rem",
  fontWeight: "500",
  marginRight: ".5rem",
  textTransform: "capitalize",
  textAlign: "left",
}));

const Content = styled("div")(({ theme }) => ({
  fontSize: "0.875rem",
  color: theme.palette.text.secondary,
  textAlign: "left",
}));

const TitleCard = styled("div")(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: "500",
  marginRight: ".5rem",
  textTransform: "capitalize",
  textAlign: "left",
  position: "relative",
  bottom: "-30px",
  left: "20px",
}));

const TitleWaning = styled("div")(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: "500",
  marginRight: ".5rem",
  textTransform: "capitalize",
  textAlign: "center",
  marginTop: "20px",
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
  alignItems: "center",
  justifyContent: "flex-start",
  cursor: "pointer",
  width: "100%",
  height: "100%",
}));

const BoxCustomButton = styled(Box)(() => ({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex-end",
  width: "55%",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
}));

const InvoicePopup = ({ handleClose, handleOpenModify, data }) => {
  const { palette } = useTheme();
  const textColor = palette.text.primary;

  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const handleDeleteClick = () => {
    setShowDeletePopup(true);
  };

  return (
    <Fragment>
      <Container className="invoices" style={{ width: "500px" }}>
        {/* <Box className="breadcrumb">
          <Breadcrumb routeSegments={[{ name: "Invoice", path: "/material" }]} />
        </Box> */}

        <Grid container spacing={5}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Card sx={{ px: 3, py: 2, mb: 3, textAlign: "center" }}>
              <BoxCustom item lg={12} md={12} sm={12} xs={12}>
                <Icon
                  sx={{
                    color: textColor,
                    position: "relative",
                    top: "-15px",
                    left: "-15px",
                  }}
                  onClick={handleClose}
                >
                  close
                </Icon>
                <Title>
                  {" "}
                  {data?.apartment_name || "Apart Num"} -{" "}
                  {data?.room_num || "Room Num"}
                </Title>
                <BoxCustomButton item lg={8} md={8} sm={8} xs={8}>
                  <Icon
                    sx={{
                      color: textColor,
                      marginRight: "10px",
                      cursor: "pointer",
                    }}
                    onClick={handleDeleteClick}
                  >
                    delete
                  </Icon>
                  <Icon
                    sx={{ color: textColor, cursor: "pointer" }}
                    onClick={handleOpenModify}
                  >
                    edit
                  </Icon>
                </BoxCustomButton>
              </BoxCustom>
              <TitleCard>Invoice Information</TitleCard>
              <Card
                sx={{
                  px: 3,
                  py: 2,
                  mb: 3,
                  textAlign: "center",
                  marginTop: "20px",
                }}
              >
                <Content>
                  Apartment Name: {data?.apartment_name || "Ora Baumbach"}
                </Content>
                <Content>Room Num: {data?.room_num || "3549"}</Content>
                <Content>
                  Payment method: {data?.payment_method || "Visa"}
                </Content>
                <Content>Tel: {data?.tel || "3030300303"}</Content>
                <Content>Total: {data?.total || "200000"}</Content>
                <Content>Pay At: {data?.pay_at || "Not yet"}</Content>
                <TitleCard>Detail</TitleCard>
                <Card
                  sx={{
                    px: 3,
                    py: 2,
                    mb: 3,
                    textAlign: "center",
                    marginTop: "20px",
                  }}
                >
                  <Content>Electricity: {data?.elect || "1231"}</Content>
                  <Content>Water: {data?.water || "3549"}</Content>
                  <Content>Others: {data?.service || "123123"}</Content>
                </Card>
              </Card>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {showDeletePopup && <DeletePopup showPopup={setShowDeletePopup} />}
    </Fragment>
  );
};

const DeletePopup = ({ showPopup }) => {
  const { palette } = useTheme();
  const textColor = palette.text.primary;

  return (
    <Fragment>
      <Container>
        <Grid container spacing={5}>
          <Grid item lg={4} md={4} sm={4} xs={4}>
            <Card
              sx={{
                px: 3,
                py: 2,
                mb: 3,
                textAlign: "center",
                position: "relative",
                height: "100%",
              }}
            >
              <TitleWaning>Do you want to delete this ternant</TitleWaning>
              <Icon
                sx={{
                  color: textColor,
                  cursor: "pointer",
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                }}
                onClick={() => showPopup(false)}
              >
                close
              </Icon>
              <Grid
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
                sx={{ marginTop: "20px" }}
              >
                <StyledButton
                  variant="contained"
                  color="primary"
                  onClick={() => showPopup(false)}
                >
                  YES
                </StyledButton>
                <StyledButton
                  variant="contained"
                  color="error"
                  onClick={() => showPopup(false)}
                >
                  NO
                </StyledButton>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default InvoicePopup;

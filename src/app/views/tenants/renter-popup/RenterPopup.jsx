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
import Modal from "@mui/material/Modal";

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

const RenterPopup = ({
  handleClose,
  handleOpenModify,
  data,
  handleRemoveTenant,
}) => {
  const { palette } = useTheme();
  const textColor = palette.text.primary;
  const [openDelete, setOpenDelete] = useState(true);

  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const handleDeleteClick = () => {
    setShowDeletePopup(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  return (
    <Fragment>
      <Container className="invoices" style={{ width: "500px" }}>
        {/* <Box className="breadcrumb">
          <Breadcrumb routeSegments={[{ name: "renter", path: "/material" }]} />
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
                <Title> {data.name || "Name Room"}</Title>
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
              <TitleCard>Personal Information</TitleCard>
              <Card
                sx={{
                  px: 3,
                  py: 2,
                  mb: 3,
                  textAlign: "center",
                  marginTop: "20px",
                }}
              >
                <Content>Gender: {data?.gender || "Fale"}</Content>
                <Content>Tel: {data?.tel || "123456789"}</Content>
                <Content>
                  Identification number: {data.id_number || "3030300303"}
                </Content>
                <Content>Email: {data.email || "anhdeptrai@gmail.com"}</Content>
              </Card>

              <TitleCard>Room Information</TitleCard>
              <Card
                sx={{
                  px: 3,
                  py: 2,
                  mb: 3,
                  textAlign: "center",
                  marginTop: "20px",
                }}
              >
                <Content>Room number: {data.room_number || "T102"}</Content>
                <Content>
                  Apartment name: {data.apartment_name || "CC01"}
                </Content>
                <Content>Room host: {data.room_host || "Nguyen Van A"}</Content>
              </Card>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {showDeletePopup && (
        <Modal
          open={openDelete}
          onClose={handleCloseDelete}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <DeletePopup
            showPopup={setShowDeletePopup}
            handleRemoveTenant={handleRemoveTenant}
          />
        </Modal>
      )}
    </Fragment>
  );
};

const DeletePopup = ({ showPopup, handleRemoveTenant }) => {
  const { palette } = useTheme();
  const textColor = palette.text.primary;

  return (
    <Fragment>
      <Container style={{ position: "absolute" }}>
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
                width: "20rem",
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
                  onClick={() => handleRemoveTenant()}
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

export default RenterPopup;

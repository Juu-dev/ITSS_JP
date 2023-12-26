import {
  Card,
  Grid,
  Box,
  styled,
  useTheme,
  Icon,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { set } from "lodash";
import { Fragment, useEffect, useState } from "react";
import Modal from "@mui/material/Modal";

const Title = styled("div")(() => ({
  fontSize: "1.5rem",
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

const InvoiceDetail = ({ handleClose, handleOpenModify, data }) => {
  const { palette } = useTheme();
  const textColor = palette.text.primary;

  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [openDelete, setOpenDelete] = useState(true);

  const [paidStatus, setPaidStatus] = useState(true);
  useEffect(() => {
    const checkPaid = () => {
      if (data?.pay_at === null) setPaidStatus(false);
    };
    checkPaid();
  });

  const handleDeleteClick = () => {
    setShowDeletePopup(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  return (
    <Fragment>
      <Container className="invoices" style={{ width: "500px" }}>
        <Grid container spacing={5}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Card sx={{ px: 3, py: 2, mb: 3, textAlign: "center" }}>
              <BoxCustom item lg={12} md={12} sm={12} xs={12}>
                <Icon
                  sx={{
                    color: textColor,
                    position: "relative",
                    left: "-15px",
                  }}
                  onClick={handleClose}
                >
                  close
                </Icon>
                <Title>
                  {" "}
                  {data?.name || "Name Room"} {data?.room || "1234"}{" "}
                  {data?.apartment_name || "ABCD"}
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
              <Card
                sx={{
                  px: 3,
                  py: 2,
                  marginTop: "20px",
                }}
              >
                {paidStatus ? (
                  <FormControlLabel
                    control={
                      <Checkbox checked disabled sx={{ textAlign: "left" }} />
                    }
                    label="Paid"
                    sx={{ textAlign: "left" }}
                  />
                ) : (
                  <FormControlLabel
                    control={<Checkbox disabled sx={{ textAlign: "left" }} />}
                    label="Paid"
                    sx={{ textAlign: "left" }}
                  />
                )}
              </Card>
              <TitleCard>Personal Information</TitleCard>
              <Card
                sx={{
                  px: 3,
                  py: 2,
                  textAlign: "center",
                  marginTop: "20px",
                }}
              >
                <Content>Room host: {data?.name || "Male"}</Content>
                <Content>Room: {data?.room || "1234"}</Content>
                <Content>
                  Apartment Name: {data?.apartment_name || "ABCD"}
                </Content>
                <Content>Phone number: {data?.tel || "0912337472"}</Content>
                <Content>
                  Email: {data?.email || "anhdeptrai@gmail.com"}
                </Content>
              </Card>

              <TitleCard>Invoice Information</TitleCard>
              <Card
                sx={{
                  px: 3,
                  py: 2,
                  textAlign: "center",
                  marginTop: "20px",
                }}
              >
                <Content>
                  Period statement from 2023/09/15 until 2023/10/15
                </Content>
                <Content>
                  Invoice Date: {data?.create_at || "2023/10/15"}
                </Content>
                <Content>Due date: {data?.deadline || "2023/10/15"}</Content>
              </Card>

              <TitleCard>Detail</TitleCard>
              <Card
                sx={{
                  px: 3,
                  py: 2,
                  textAlign: "center",
                  marginTop: "20px",
                }}
              >
                <Content>Water: {data?.water || "1000"}</Content>
                <Content>Service: {data?.service || "1000"}</Content>
                <Content>Rent: {data?.rent || "1000"}</Content>
                <Content>Electricity: {data?.electricity || "1000"}</Content>
                <Content>Total: {data?.total || "1000"}</Content>
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
          <DeletePopup showPopup={setShowDeletePopup} />
        </Modal>
      )}
    </Fragment>
  );
};

const DeletePopup = ({ showPopup }) => {
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
              <TitleWaning>Do you want to delete this invoice</TitleWaning>
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
                  onClick={() => window.location.reload()}
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

export default InvoiceDetail;

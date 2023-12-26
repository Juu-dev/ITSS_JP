import {
  Card,
  Grid,
  Box,
  styled,
  useTheme,
  Checkbox,
  Icon,
  Button,
  FormControlLabel,
} from "@mui/material";
import { Fragment, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { useEffect } from "react";

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));

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

const ContainerDelete = styled("div")(({ theme }) => ({
  margin: "30px",
  position: "absolute",
  border: "1px solid #000",
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

const label = { inputProps: { "aria-label": "Checkbox" } };

const InvoiceEdit = ({
  handleCloseModify,
  handleChange,
  handleChangeCheckbox,
  handleSubmit,
  data,
}) => {
  const { palette } = useTheme();
  const textColor = palette.text.primary;

  const [showDeletePopup, setShowDeletePopup] = useState(false);

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
                    top: "-15px",
                    left: "-15px",
                  }}
                  onClick={handleCloseModify}
                >
                  close
                </Icon>
                <Title>
                  {data?.name || "Name Room"} {data?.room || ""}
                  {data?.apartment_name || "aprtment name"}
                </Title>{" "}
                <BoxCustomButton item lg={8} md={8} sm={8} xs={8}>
                  <StyledButton
                    variant="contained"
                    color="primary"
                    sx={{ marginBottom: "20px" }}
                    onClick={handleSubmit}
                  >
                    Submit
                  </StyledButton>
                </BoxCustomButton>
              </BoxCustom>
              {/* <TitleCard>Personal Information</TitleCard>
              <Card
                sx={{
                  px: 3,
                  py: 2,
                  textAlign: "center",
                  marginTop: "20px",
                }}>
                <Content>Room host: {data?.name || "Male"}</Content>
                <Content>Room: {data?.room || "1234"}</Content>
                <Content>
                  Apartment Name: {data?.apartment_name || "ABCD"}
                </Content>
                <Content>Phone number: {data?.tel || "0912337472"}</Content>
                <Content>
                  Email: {data?.email || "anhdeptrai@gmail.com"}
                </Content>
              </Card> */}
              <TitleCard>Invoice Information</TitleCard>
              <ValidatorForm onError={() => null}>
                <Card
                  sx={{
                    px: 3,
                    py: 2,
                    mb: 3,
                    textAlign: "center",
                    marginTop: "20px",
                  }}
                >
                  {!paidStatus ? (
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="checkbox"
                          onChange={handleChangeCheckbox}
                        />
                      }
                      label="Paid"
                    />
                  ) : (
                    <Content></Content>
                  )}

                  <TextField
                    type="text"
                    name="create_at"
                    id="standard-basic"
                    value={data?.create_at || ""}
                    onChange={handleChange}
                    errorMessages={["this field is required"]}
                    label="Invoice Date"
                    validators={["required"]}
                  />
                  <TextField
                    type="text"
                    name="deadline"
                    id="standard-basic"
                    value={data?.deadline || ""}
                    onChange={handleChange}
                    errorMessages={["this field is required"]}
                    label="Deadline"
                    validators={["required"]}
                  />
                  <TextField
                    type="text"
                    name="water"
                    id="standard-basic"
                    value={data?.water || ""}
                    onChange={handleChange}
                    errorMessages={["this field is required"]}
                    label="Water"
                    validators={["required"]}
                  />
                  <TextField
                    type="text"
                    name="service"
                    id="standard-basic"
                    value={data?.service || ""}
                    onChange={handleChange}
                    errorMessages={["this field is required"]}
                    label="Service"
                    validators={["required"]}
                  />
                  <TextField
                    type="text"
                    name="rent"
                    id="standard-basic"
                    value={data?.rent || ""}
                    onChange={handleChange}
                    errorMessages={["this field is required"]}
                    label="Rent"
                    validators={["required"]}
                  />
                  <TextField
                    type="text"
                    name="electricity"
                    id="standard-basic"
                    value={data?.electricity || ""}
                    onChange={handleChange}
                    errorMessages={["this field is required"]}
                    label="Electricity"
                    validators={["required"]}
                  />
                  <Content>
                    <strong>
                      Total:{" "}
                      {parseInt(data?.rent) +
                        parseInt(data?.water) +
                        parseInt(data?.service) +
                        parseInt(data?.electricity) || "0"}
                    </strong>
                  </Content>
                </Card>
              </ValidatorForm>
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
      <ContainerDelete>
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
      </ContainerDelete>
    </Fragment>
  );
};

export default InvoiceEdit;

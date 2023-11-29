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
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

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

const RoomModifyPopup = () => {
  const { palette } = useTheme();
  const textColor = palette.text.primary;

  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const handleDeleteClick = () => {
    setShowDeletePopup(true);
  };

  const [gender, setGender] = useState("Fale");
  const [tel, setTel] = useState("0123456789");
  const [ident, setIdent] = useState("123456789");
  const [email, setEmail] = useState("deptraicogisai@gmail.com");
  const [username, setUsername] = useState("");

  const [roomNumber, setRoomNumber] = useState("501");
  const [apartmentName, setApartmentName] = useState("A1");
  const [roomHost, setRoomHost] = useState("Nguyen Van A");

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "gender":
        setGender(value);
        break;
      case "tel":
        setTel(value);
        break;
      case "ident":
        setIdent(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "roomNumber":
        setRoomNumber(value);
        break;
      case "apartmentName":
        setApartmentName(value);
        break;
      case "roomHost":
        setRoomHost(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <Fragment>
      <Container className="invoices">
        <Box className="breadcrumb">
          <Breadcrumb routeSegments={[{ name: "renter", path: "/material" }]} />
        </Box>

        <Grid container spacing={5}>
          <Grid item lg={4} md={4} sm={4} xs={4}>
            <Card sx={{ px: 3, py: 2, mb: 3, textAlign: "center" }}>
              <BoxCustom item lg={12} md={12} sm={12} xs={12}>
                <Icon
                  sx={{
                    color: textColor,
                    position: "relative",
                    top: "-15px",
                    left: "-15px",
                  }}
                >
                  close
                </Icon>
                <Title>Room 501</Title>
                {/* <BoxCustomButton item lg={8} md={8} sm={8} xs={8}>
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
                  <Icon sx={{ color: textColor, cursor: "pointer" }}>edit</Icon>
                </BoxCustomButton> */}
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
              <TitleCard>Personal Information</TitleCard>
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
                  <TextField
                    type="text"
                    name="gender"
                    id="standard-basic"
                    value={gender || ""}
                    onChange={handleChange}
                    errorMessages={["this field is required"]}
                    label="Gender"
                    validators={["required"]}
                  />
                  <TextField
                    type="text"
                    name="tel"
                    id="standard-basic"
                    value={tel || ""}
                    onChange={handleChange}
                    errorMessages={["this field is required"]}
                    label="Telephone"
                    validators={["required"]}
                  />
                  <TextField
                    type="text"
                    name="ident"
                    id="standard-basic"
                    value={ident || ""}
                    onChange={handleChange}
                    errorMessages={["this field is required"]}
                    label="Identification number"
                    validators={["required"]}
                  />
                  <TextField
                    type="text"
                    name="email"
                    id="standard-basic"
                    value={email || ""}
                    onChange={handleChange}
                    errorMessages={["this field is required"]}
                    label="Email"
                    validators={["required"]}
                  />
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
                  <TextField
                    type="text"
                    name="roomNumber"
                    id="standard-basic"
                    value={roomNumber || ""}
                    onChange={handleChange}
                    errorMessages={["this field is required"]}
                    label="Room number"
                    validators={["required"]}
                  />
                  <TextField
                    type="text"
                    name="apartmentName"
                    id="standard-basic"
                    value={apartmentName || ""}
                    onChange={handleChange}
                    errorMessages={["this field is required"]}
                    label="Apartment name"
                    validators={["required"]}
                  />
                  <TextField
                    type="text"
                    name="roomHost"
                    id="standard-basic"
                    value={roomHost || ""}
                    onChange={handleChange}
                    errorMessages={["this field is required"]}
                    label="Room host"
                    validators={["required"]}
                  />
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

export default RoomModifyPopup;

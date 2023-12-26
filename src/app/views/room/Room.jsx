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
import { Breadcrumb } from "app/components";
import { topBarHeight } from "app/utils/constant";
import { useParams } from "react-router-dom";
import axiosInstance from "axios";

const Title = styled("div")(() => ({
  fontSize: "2rem",
  fontWeight: "500",
  marginRight: ".5rem",
  textTransform: "capitalize",
}));

const SubTitle = styled("div")(({ theme }) => ({
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
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  width: "100%",
  paddingLeft: 24,
}));

const SearchContainer = styled("div")(({ theme }) => ({
  zIndex: 9,
  width: "60%",
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

const ImgaeCustom = styled("img")(() => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
}));

const Room = () => {
  const { palette } = useTheme();
  const textColor = palette.text.primary;
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axiosInstance.get(
        `http://134.209.101.17:8000/api/apartments/${id}`
      );
      let data = res.data;
      if (res.status === 200) {
        const res1 = await axiosInstance.get(
          `http://134.209.101.17:8000/api/apartments`
        );
        for (let apartment of res1.data) {
          if (apartment.id === data[0].apartment_id) {
            data[0].apartment_name = apartment.name;
          }
        }
        setData(data);
      }
    }
    fetchData();
  }, []);
  return (
    <Fragment>
      <Container className="room">
        <Box className="breadcrumb">
          <Breadcrumb routeSegments={[{ name: "room", path: "/material" }]} />
        </Box>

        <Grid container spacing={3}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Card sx={{ px: 3, py: 2, mb: 3, textAlign: "center" }}>
              <Title>{data[0]?.apartment_name}</Title>
            </Card>
          </Grid>

          <BoxCustom>
            <SearchContainer>
              <SearchInput type="text" placeholder="Search here..." autoFocus />
              <IconButton sx={{ mx: 2, verticalAlign: "middle" }}>
                <Icon sx={{ color: textColor }}>close</Icon>
              </IconButton>
            </SearchContainer>
          </BoxCustom>
          <BoxCustom>
            <StyledButton variant="contained" color="primary">
              Submit
            </StyledButton>
          </BoxCustom>

          {data.map((item, index) => (
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Card sx={{ px: 3, py: 2, mb: 3 }}>
                <Title>Number: {item.room_number}</Title>
                <SubTitle>Status: {item.rent_status}</SubTitle>
                <SubTitle>Type: {item.room_type.type}</SubTitle>
                <SubTitle>Description: {item.room_type.description}</SubTitle>
                <SubTitle>Additional: {item.additional_info}</SubTitle>
                <ImgaeCustom
                  src={item.room_medias[0].url}
                  alt="Anh phong ngu"
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Room;

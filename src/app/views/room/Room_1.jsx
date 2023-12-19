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

const ImgaeCustom = styled("img")(() => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
}));

// const invoiceStatus = true;
// const handleInvoices = () => {
//   if (invoiceStatus) {
//     invoiceStatus = false;
//   } else {
//     invoiceStatus = true;
//   }
// };

const Room_1 = () => {
  const { palette } = useTheme();
  const textColor = palette.text.primary;

  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const handleChangeSearch = () => {
    setSearchValue(inputValue);
  };

  const resetSearchValue = () => {
    setSearchValue("");
    setInputValue("");
  };

  return (
    <Fragment>
      <Container className="invoices">
        <Box className="breadcrumb">
          <Breadcrumb routeSegments={[{ name: "room", path: "/material" }]} />
        </Box>

        <Grid container spacing={5}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Card sx={{ px: 3, py: 2, mb: 3, textAlign: "center" }}>
              <Title>Room Management</Title>
            </Card>
          </Grid>

          <BoxCustom>
            <SearchContainer>
              <SearchInput
                type="text"
                placeholder="Search here..."
                autoFocus
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <IconButton sx={{ mx: 2, verticalAlign: "middle" }}>
                <Icon sx={{ color: textColor }} onClick={resetSearchValue}>
                  close
                </Icon>
              </IconButton>
              <StyledButton
                variant="contained"
                color="primary"
                onClick={handleChangeSearch}
              >
                Search
              </StyledButton>
            </SearchContainer>
          </BoxCustom>
        </Grid>

        <SimpleCard title="Room">
          <TableCustom searchValue={searchValue} />
        </SimpleCard>
      </Container>
    </Fragment>
  );
};

export default Room_1;

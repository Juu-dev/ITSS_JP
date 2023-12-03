import {
  Grid,
  styled,
  useTheme,
  IconButton,
  Icon,
  Typography,
  Paper,
} from "@mui/material";
import { Fragment } from "react";
import { topBarHeight } from "app/utils/constant";
import TenantCard from "./TenantCard";
import AddNewTenant from "./AddNewTenant";

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

export default function DetailTenant({ roomData }) {
  const roomDataDetail = roomData[0];
  const tenantData = roomDataDetail.tenants;

  const { palette } = useTheme();
  const textColor = palette.text.primary;

  return (
    <Fragment>
      <Grid container spacing={4} alignItems="flex-end">
        <Grid item xs={4}>
          <Item>
            <Typography variant="subtitle1" component="p">
              <strong>Apartment name:</strong> {roomDataDetail.apartment.name}
            </Typography>
            <Typography variant="subtitle1" component="p">
              <strong>Room:</strong> {roomDataDetail.room_number}
            </Typography>
            <Typography variant="subtitle1" component="p">
              <strong>Renter:</strong> {roomDataDetail.rent_status}
            </Typography>
            <Typography variant="subtitle1" component="p">
              <strong>Rent type:</strong> {roomDataDetail.rent_status}
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
    </Fragment>
  );
}

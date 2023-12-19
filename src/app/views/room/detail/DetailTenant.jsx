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
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import axiosInstance from "axios";
import RenterPopup from "./renter-popup/RenterPopup";
import RoomModifyPopup from "./renter-modify-popup/RenterModifyPopup";

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
  const params = useParams();
  const room_id = params.room_id;
  const roomDataDetail = roomData[0];
  const tenantData = roomDataDetail.tenants;
  const tenantDataReal = [];
  tenantData?.map((tenant) => {
    if (tenant?.pivot.deleted_at === null) {
      tenantDataReal.push(tenant);
    }
  });

  const { palette } = useTheme();
  const textColor = palette.text.primary;

  const [idPopup, setIdPopup] = useState(null);
  const [openModify, setOpenModify] = useState(false);
  const [open, setOpen] = useState(false);
  const [dataPopup, setDataPopup] = useState({
    name: "",
    gender: "",
    tel: "",
    id_number: "",
    email: "",
    room_number: "",
    apartment_name: "",
    room_host: "",
  });

  const handleChange = (event) => {
    const dataExp = { ...dataPopup, [event.target.name]: event.target.value };
    setDataPopup(dataExp);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const dataPatch = {
      name: dataPopup.name,
      phone_number: dataPopup.tel,
      citizen_number: dataPopup.id_number,
      gender: dataPopup.gender,
      email: dataPopup.email,
    };

    // patch data
    const patchData = async () => {
      await axiosInstance
        .patch(`http://127.0.0.1:8000/api/tenants/${idPopup}`, dataPatch)
        .then((res) => {
          handleClose();
        });
    };
    patchData();
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenModify = () => setOpenModify(true);
  const handleCloseModify = () => setOpenModify(false);

  useEffect(() => {
    async function fetchData() {
      await axiosInstance
        .get(`http://127.0.0.1:8000/api/tenants/${idPopup}`)
        .then((res) => {
          const dataSource = res?.data[0];
          const dataExp = {
            name: dataSource?.name,
            gender: dataSource?.gender,
            tel: dataSource?.phone_number,
            id_number: dataSource?.citizen_number,
            email: dataSource?.email,
            room_number: dataSource?.rooms[0]?.room_number,
            apartment_name: dataSource?.rooms[0]?.apartment?.name,
            room_host: dataSource?.rooms[0]?.pivot?.room_host,
          };
          setDataPopup(dataExp);
        });
    }
    if (idPopup) {
      fetchData();
      console.log(dataPopup);
    }
  }, [idPopup]);

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
        {tenantDataReal?.map((tenant) => (
          <Grid item xs={6}>
            <TenantCard
              key={tenant.id}
              data={tenant}
              handleShowPopup={handleOpen}
              setIdPopup={setIdPopup}
            />
          </Grid>
        ))}

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {openModify ? (
            <RenterPopup
              handleClose={handleClose}
              handleOpenModify={handleOpenModify}
              data={dataPopup}
            />
          ) : (
            <RoomModifyPopup
              handleCloseModify={handleClose}
              data={dataPopup}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          )}
        </Modal>
      </Grid>
    </Fragment>
  );
}

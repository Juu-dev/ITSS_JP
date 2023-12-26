import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  TextField,
  Button,
  styled,
  IconButton,
  Icon,
  Box,
  Typography,
  FormControlLabel,
  Grid,
} from "@mui/material";
import { Subtitles } from "@mui/icons-material";
import { useApiData } from "../../apartments-management/useApiData";
import axiosInstance from "axios";

const Title = styled("div")(() => ({
  fontSize: "2rem",
  fontWeight: "500",
  marginRight: ".5rem",
  textTransform: "capitalize",
}));

const FormContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(4),
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(1),
  right: theme.spacing(1),
}));

const ResidentPopup = ({ open, onClose }) => {
  const [isResidenceChecked, setIsResidenceChecked] = useState(false);
  const { data } = useApiData();
  const [apartments, setApartments] = useState([]);
  const [rooms, setRooms] = useState([]);

  const [valueForm, setValueForm] = useState({
    name: "",
    phone_number: "",
    citizen_number: "",
    gender: "",
    email: "",
    room_ids: [
      {
        room_id: 2,
        room_host: true,
        rent_type: "Owned",
        living_status: true,
      },
    ],
  });

  const handleResidenceCheckboxChange = (event) => {
    setIsResidenceChecked(event.target.checked);
  };

  const handleClose = () => {
    const shouldClose = window.confirm("Are you sure you want to close?");
    if (shouldClose) {
      onClose();
    }
  };

  useEffect(() => {
    if (data) {
      setApartments(
        data.map((apartment) => ({
          name: apartment.name,
          id: apartment.id,
          rooms: apartment.rooms,
        }))
      );
    }
  }, [data]);

  const handleSelectItem = (e) => {
    const selectedApartment = data.find(
      (apartment) => apartment.name === e.target.value
    );
    setRooms(selectedApartment.rooms);
  };

  const handleChangeRoom = (e) => {
    const selectedRoom = rooms.find(
      (room) => room.room_number === e.target.value
    );
    setValueForm({
      ...valueForm,
      room_ids: [
        {
          room_id: selectedRoom.id,
          room_host: true,
          rent_type: "Owned",
          living_status: true,
        },
      ],
    });
  };

  const handleChangeRoomhost = (e) => {
    setValueForm({
      ...valueForm,
      room_ids: [
        {
          ...valueForm.room_ids[0],
          room_host: e.target.checked,
        },
      ],
    });
  };

  const handleSubmitForm = (e) => {
    console.log(valueForm);
    e.preventDefault();
    async function submitForm() {
      await axiosInstance
        .post(`http://134.209.101.17:8000/api/tenants`, valueForm)
        .then((res) => {
          onClose();
          alert("Add new tenant successfully!");
        });
    }
    submitForm();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <FormContainer>
        <CloseButton onClick={handleClose}>
          <Icon>close</Icon>
        </CloseButton>
        <Title>Add New Tenant</Title>
        <DialogContent>
          {/* Personal Information */}
          <Box mb={2}>
            <Typography variant="h6" sx={{ marginBottom: "10px" }}>
              Personal Information
            </Typography>
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={4}>
                  <InputLabel htmlFor="name">Name</InputLabel>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    id="name"
                    variant="outlined"
                    fullWidth
                    value={valueForm?.name}
                    onChange={(e) =>
                      setValueForm({ ...valueForm, name: e.target.value })
                    }
                  />
                </Grid>
              </Grid>
            </FormControl>
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={4}>
                  <InputLabel htmlFor="gender">Gender</InputLabel>
                </Grid>
                <Grid item xs={8}>
                  <Select
                    id="gender"
                    variant="outlined"
                    fullWidth
                    value={valueForm?.gender}
                    onChange={(e) =>
                      setValueForm({ ...valueForm, gender: e.target.value })
                    }
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                  </Select>
                </Grid>
              </Grid>
            </FormControl>
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={4}>
                  <InputLabel htmlFor="tel">Telephone</InputLabel>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    id="tel"
                    variant="outlined"
                    fullWidth
                    value={valueForm?.phone_number}
                    onChange={(e) =>
                      setValueForm({
                        ...valueForm,
                        phone_number: e.target.value,
                      })
                    }
                  />
                </Grid>
              </Grid>
            </FormControl>
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={4}>
                  <InputLabel htmlFor="idNumber">
                    Identification Number
                  </InputLabel>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    id="idNumber"
                    variant="outlined"
                    fullWidth
                    valueForm={valueForm?.citizen_number}
                    onChange={(e) =>
                      setValueForm({
                        ...valueForm,
                        citizen_number: e.target.value,
                      })
                    }
                  />
                </Grid>
              </Grid>
            </FormControl>
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={4}>
                  <InputLabel htmlFor="email">Email</InputLabel>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    id="email"
                    variant="outlined"
                    fullWidth
                    value={valueForm?.email}
                    onChange={(e) =>
                      setValueForm({ ...valueForm, email: e.target.value })
                    }
                  />
                </Grid>
              </Grid>
            </FormControl>
          </Box>

          {/* Room Information */}
          <Box mb={2}>
            <Typography variant="h6" sx={{ marginBottom: "10px" }}>
              Room Information
            </Typography>
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={4}>
                  <InputLabel htmlFor="apartment">Apartment</InputLabel>
                </Grid>
                <Grid item xs={8}>
                  <Select
                    id="apartment"
                    variant="outlined"
                    fullWidth
                    onChange={handleSelectItem}
                  >
                    {apartments.map((apartment) => (
                      <MenuItem value={apartment.name}>
                        {apartment.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>
            </FormControl>
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={4}>
                  <InputLabel htmlFor="roomNumber">Room Number</InputLabel>
                </Grid>
                <Grid item xs={8}>
                  <Select
                    id="roomNumber"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => handleChangeRoom(e)}
                  >
                    {rooms.map((room) => (
                      <MenuItem value={room.room_number}>
                        {room.room_number}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>
            </FormControl>

            <FormControlLabel
              control={<Checkbox onChange={(e) => handleChangeRoomhost(e)} />}
              label="Room Host"
              sx={{ marginBottom: 1 }}
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={isResidenceChecked}
                  onChange={handleResidenceCheckboxChange}
                />
              }
              label="Residence"
              sx={{ marginBottom: 1 }}
            />
            {isResidenceChecked && (
              <FormControl fullWidth sx={{ marginBottom: 2 }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid>
                    <InputLabel htmlFor="residenceDate"></InputLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="residenceDate"
                      variant="outlined"
                      type="date"
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </FormControl>
            )}
          </Box>

          {/* Save Button */}
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmitForm}
          >
            Save
          </Button>
        </DialogContent>
      </FormContainer>
    </Dialog>
  );
};

export default ResidentPopup;

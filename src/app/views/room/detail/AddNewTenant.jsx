import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, Stack } from "@mui/material";
import Icon from "@mui/material/Icon";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Input } from "@mui/material";
import { useParams } from "react-router-dom";
import axiosInstance from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  // color: theme.palette.text.secondary,
  marginBottom: "10px",
}));

const FormControlLabelCustom = styled(FormControlLabel)(({ theme }) => ({
  marginTop: "10px" + "!important",
}));
const dataDefault = {
  name: "",
  phone_number: "",
  citizen_number: "",
  gender: "", // ['Male', 'Other', 'Female']
  email: "abc@gmail.com",
  room_host: 0, //Có phải chủ phòng hay không
  rent_type: "Rented", // ['Rented', 'Owned']
  living_status: 0, //Có đang sống ở đấy hay không
};

export default function AddNewTenant() {
  const params = useParams();

  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState(dataDefault);
  const handleChange = (event) => {
    const dataExp = { ...data, [event.target.name]: event.target.value };
    setData(dataExp);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    async function postData() {
      try {
        const res = await axiosInstance
          .post(`http://localhost:8000/api/rooms/${params.room_id}/tenant`, {
            data,
          })
          .then((res) => {
            console.log(res.data);
            window.location.reload();
          });
      } catch (err) {
        console.log(err);
      }
    }
    postData();
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { palette } = useTheme();
  const textColor = palette.text.primary;

  const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
  }));

  return (
    <div>
      <StyledButton variant="contained" color="primary" onClick={handleOpen}>
        <Icon>add</Icon>
        Add
      </StyledButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={6}>
              <Typography id="modal-modal-title" variant="h5" component="h2">
                <strong>New resident</strong>
              </Typography>
            </Grid>
            <Grid item xs={6} textAlign="right">
              <IconButton size="large" onClick={handleClose}>
                <Icon>close</Icon>
              </IconButton>
            </Grid>
          </Grid>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1 },
            }}
            noValidate
            autoComplete="off">
            <Item>
              <Stack spacing={4}>
                <Typography variant="subtitle1" component="h6">
                  <strong>Personal Information</strong>
                </Typography>
                <FormControl variant="standard">
                  <InputLabel htmlFor="component-simple" required>
                    Name
                  </InputLabel>
                  <Input
                    id="component-simple"
                    name="name"
                    required
                    value={data.name}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl variant="standard">
                  <InputLabel htmlFor="component-simple" required>
                    Gender
                  </InputLabel>
                  <Input
                    name="gender"
                    id="component-simple"
                    required
                    value={data.gender}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl variant="standard">
                  <InputLabel htmlFor="component-simple" required>
                    Tel
                  </InputLabel>
                  <Input
                    name="phone_number"
                    id="component-simple"
                    required
                    value={data.phone_number}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl variant="standard">
                  <InputLabel htmlFor="component-simple" required>
                    Citizen num
                  </InputLabel>
                  <Input
                    name="citizen_number"
                    id="component-simple"
                    required
                    value={data.citizen_number}
                    onChange={handleChange}
                  />
                </FormControl>
              </Stack>
            </Item>
            <Item>
              <Stack spacing={4}>
                <Typography variant="subtitle1" component="h6">
                  <strong>Room Information</strong>
                </Typography>
                <Typography variant="subtitle1" component="h6">
                  Apartment: {params.id}
                </Typography>
                <Typography variant="subtitle1" component="h6">
                  Room: {params.room_id}
                </Typography>
                <FormControlLabelCustom
                  control={
                    <Checkbox
                      defaultChecked
                      name="rent_type"
                      onChange={handleChange}
                    />
                  }
                  label="Room host"
                />
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <FormControlLabelCustom
                      control={<Checkbox defaultChecked />}
                      label="Residence"
                      required
                    />
                  </Grid>
                  <Grid item xs={8}>
                    {" "}
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker />
                    </LocalizationProvider>
                  </Grid>
                </Grid>
              </Stack>
            </Item>
            <Stack
              spacing={4}
              direction="row"
              alignItems="flex-end"
              justifyContent="center">
              <Button variant="outlined" onClick={handleClose}>
                Cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}>
                Save
              </Button>
            </Stack>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

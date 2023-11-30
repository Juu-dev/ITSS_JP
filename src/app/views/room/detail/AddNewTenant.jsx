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
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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

const FormControlCustom = styled(FormControl)(({ theme }) => ({
  marginTop: "10px" + "!important",
}));

const FormControlLabelCustom = styled(FormControlLabel)(({ theme }) => ({
  marginTop: "10px" + "!important",
}));

export default function AddNewTenant() {
  const [open, setOpen] = React.useState(false);
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
                <TextField
                  size="small"
                  variant="standard"
                  required
                  id="filled-required"
                  label="Name"
                  fullWidth
                />
                <TextField
                  size="small"
                  variant="standard"
                  required
                  id="filled-required"
                  label="Gender"
                  fullWidth
                />
                <TextField
                  size="small"
                  variant="standard"
                  required
                  id="standard-required"
                  label="Tel"
                  fullWidth
                />
                <TextField
                  size="small"
                  variant="standard"
                  id="standard-required"
                  label="Indentity Num"
                  fullWidth
                />
              </Stack>
            </Item>
            <Item>
              <Stack spacing={4}>
                <Typography variant="subtitle1" component="h6">
                  <strong>Room Information</strong>
                </Typography>
                <FormControlCustom variant="standard">
                  <InputLabel id="demo-simple-select-standard-label">
                    Apartment
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="apartment"
                    label="Apartment">
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControlCustom>
                <FormControlCustom variant="standard">
                  <InputLabel id="demo-simple-select-standard-label">
                    Room name
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="room"
                    label="Room name">
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControlCustom>
                <FormControlLabelCustom
                  control={<Checkbox defaultChecked />}
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
              <Button variant="contained" color="primary">
                Save
              </Button>
            </Stack>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

import React, { useState } from "react";
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

    const handleResidenceCheckboxChange = (event) => {
        setIsResidenceChecked(event.target.checked);
    };

    const handleClose = () => {
        const shouldClose = window.confirm("Are you sure you want to close?");
        if (shouldClose) {
            onClose();
        }
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <FormContainer>
                <CloseButton onClick={handleClose}>
                    <Icon>close</Icon>
                </CloseButton>
                <Title>New Resident</Title>
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
                                    <TextField id="name" variant="outlined" fullWidth />
                                </Grid>
                            </Grid>
                        </FormControl>
                        <FormControl fullWidth sx={{ marginBottom: 2 }}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={4}>
                                    <InputLabel htmlFor="gender">Gender</InputLabel>
                                </Grid>
                                <Grid item xs={8}>
                                    <Select id="gender" variant="outlined" fullWidth>
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
                                    <TextField id="tel" variant="outlined" fullWidth />
                                </Grid>
                            </Grid>
                        </FormControl>
                        <FormControl fullWidth sx={{ marginBottom: 2 }}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={4}>
                                    <InputLabel htmlFor="idNumber">Identification Number</InputLabel>
                                </Grid>
                                <Grid item xs={8}>
                                    <TextField id="idNumber" variant="outlined" fullWidth />
                                </Grid>
                            </Grid>
                        </FormControl>
                        <FormControl fullWidth sx={{ marginBottom: 2 }}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={4}>
                                    <InputLabel htmlFor="email">Email</InputLabel>
                                </Grid>
                                <Grid item xs={8}>
                                    <TextField id="email" variant="outlined" fullWidth />
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
                                    <Select id="apartment" variant="outlined" fullWidth>
                                        {/* Add your apartment options here */}
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
                                    <Select id="roomNumber" variant="outlined" fullWidth>
                                        {/* Add your room number options here */}
                                    </Select>
                                </Grid>
                            </Grid>
                        </FormControl>
                        <FormControlLabel
                            control={<Checkbox />}
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
                            sx={{ marginBottom: 2 }}
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
                    <Button variant="contained" color="primary" onClick={onClose}>
                        Save
                    </Button>
                </DialogContent>
            </FormContainer>
        </Dialog>
    );
};

export default ResidentPopup;

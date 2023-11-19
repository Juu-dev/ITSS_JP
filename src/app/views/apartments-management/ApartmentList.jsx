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
import { Fragment } from "react";
import { Breadcrumb } from "app/components";
import { topBarHeight } from "app/utils/constant";

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

const Apartments = () => {
    const { palette } = useTheme();
    const textColor = palette.text.primary;

    const data = [1, 2, 3, 4, 5];

    return (
        <Fragment>
            <Container className="apartments">
                <Box className="breadcrumb">
                    <Breadcrumb
                        routeSegments={[{ name: "apartments", path: "/material" }]}
                    />
                </Box>

                <Grid container spacing={3}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Card sx={{ px: 3, py: 2, mb: 3, textAlign: "center" }}>
                            <Title>Apartment List</Title>
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

                    <Grid item lg={12} md={12} sm={12} xs={12}>

                        <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid #ddd' }}>
                                    <th style={{ borderRight: '1px solid #ddd', padding: '10px' }}>ID</th>
                                    <th style={{ borderRight: '1px solid #ddd', padding: '10px' }}>Name</th>
                                    <th style={{ borderRight: '1px solid #ddd', padding: '10px' }}>Room</th>
                                    <th style={{ padding: '10px' }}>Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((apartment, index) => (
                                    <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ borderRight: '1px solid #ddd', padding: '10px' }}>{index + 1}</td>
                                        <td style={{ borderRight: '1px solid #ddd', padding: '10px' }}>D9{apartment.name}</td>
                                        <td style={{ borderRight: '1px solid #ddd', padding: '10px' }}>401{apartment.roomNumber}</td>
                                        <td style={{ padding: '10px' }}>So 1 Dai Co Viet{apartment.address}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Grid>

                </Grid>
            </Container>
        </Fragment >
    );
};

export default Apartments;

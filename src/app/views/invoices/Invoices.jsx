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
import { Breadcrumb, SimpleCard } from "app/components";
import { topBarHeight } from "app/utils/constant";
import PaidInvoices from "./PaidInvoices";
import UnpaidInvoices from "./UnpaidInvoices";
import React, { useState } from "react";
import axiosInstance from "axios";
import Modal from "@mui/material/Modal";
import InvoiceDetail from "./popup/InvoiceDetail";
import InvoiceEdit from "./popup/InvoiceEdit";

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
  marginLeft: "17%",
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

const BoxCustomButton = styled(Box)(() => ({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex-end",
  cursor: "pointer",
  width: "100%",
  height: "100%",
}));

const Invoices = () => {
  const [viewUnpaid, setInvoice] = useState(false);

  const [openModify, setOpenModify] = useState(false);
  const [open, setOpen] = useState(false);
  const [dataPopup, setDataPopup] = useState({
    id: "",
    name: "",
    room: "",
    apartment_name: "",
    tel: "",
    email: "",
    create_at: "",
    deadline: "",
    water: "",
    service: "",
    rent: "",
    electricity: "",
    total: "",
    pay_at: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const total =
      parseInt(dataPopup?.water) +
      parseInt(dataPopup?.service) +
      parseInt(dataPopup?.rent) +
      parseInt(dataPopup?.electricity);

    const dataPatch = {
      room_id: dataPopup?.room_id,
      deadline: dataPopup?.deadline,
      pay_at: null,
      water: dataPopup?.water,
      service: dataPopup?.service,
      rent: dataPopup?.rent,
      total: total,
      payment_method: "MasterCard",
    };

    console.log("check", dataPatch);

    // patch data
    const patchData = async () => {
      await axiosInstance
        .post(`http://134.209.101.17:8000/api/payments`, dataPatch)
        .then((res) => {
          handleClose();
        });
    };
    patchData();
    handleCloseModify();
  };

  const handleChange = (event) => {
    const dataExp = { ...dataPopup, [event.target.name]: event.target.value };
    setDataPopup(dataExp);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenModify = () => setOpenModify(true);
  const handleCloseModify = () => {
    handleClose();
    setOpenModify(false);
  };

  const handleInvoices = () => {
    setInvoice(!viewUnpaid);
  };
  const { palette } = useTheme();
  const textColor = palette.text.primary;

  const data = [1, 2, 3, 4, 5];

  const handleCreateInvoice = () => {
    handleOpen();
  };

  return (
    <Fragment>
      <Container className="invoices">
        <Box className="breadcrumb">
          <Breadcrumb
            routeSegments={[{ name: "invoices", path: "/material" }]}
          />
        </Box>

        <Grid container spacing={5}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Card sx={{ px: 3, py: 2, mb: 3, textAlign: "center" }}>
              <Title>Invoices Management</Title>
            </Card>
          </Grid>

          <Grid item lg={10} md={10} sm={10} xs={10}>
            <BoxCustom>
              <SearchContainer>
                <SearchInput
                  type="text"
                  placeholder="Search here..."
                  autoFocus
                />
                <IconButton sx={{ mx: 2, verticalAlign: "middle" }}>
                  <Icon sx={{ color: textColor }}>close</Icon>
                </IconButton>
                <StyledButton variant="contained" color="primary">
                  Search
                </StyledButton>
              </SearchContainer>
            </BoxCustom>
          </Grid>

          <Grid item lg={2} md={2} sm={2} xs={2}>
            <BoxCustomButton>
              <StyledButton
                variant="contained"
                color="primary"
                sx={{ marginBottom: "20px" }}
                onClick={handleCreateInvoice}
              >
                Add/Insert
              </StyledButton>
            </BoxCustomButton>
          </Grid>

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
            <InvoiceEdit
              handleCloseModify={handleCloseModify}
              data={dataPopup}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </Modal>

          <BoxCustom>
            {!viewUnpaid && (
              <StyledButton
                variant="contained"
                color="primary"
                onClick={handleInvoices}
              >
                View unpaid invoices
              </StyledButton>
            )}
            {viewUnpaid && (
              <StyledButton
                variant="contained"
                color="primary"
                onClick={handleInvoices}
              >
                View paid invoices
              </StyledButton>
            )}
          </BoxCustom>
        </Grid>
        {!viewUnpaid && (
          <SimpleCard title="Paid Invoices">
            <PaidInvoices />
          </SimpleCard>
        )}
        {viewUnpaid && (
          <SimpleCard title="Unpaid Invoices">
            <UnpaidInvoices />
          </SimpleCard>
        )}
      </Container>
    </Fragment>
  );
};

export default Invoices;

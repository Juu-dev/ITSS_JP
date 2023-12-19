import {
  Box,
  Icon,
  IconButton,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useApiData } from "./useApiData";
import InvoicePopup from "./invoice-popup/InvoicePopup";
import InvoiceModifyPopup from "./invoice-modify-popup/InvoiceModifyPopup";
import Modal from "@mui/material/Modal";
import axiosInstance from "axios";

const StyledTable = styled(Table)(() => ({
  whiteSpace: "pre",
  "& thead": {
    "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
  },
  "& tbody": {
    "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
  },
}));

const UnpaidInvoice = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [idPopup, setIdPopup] = useState(null);
  const [openModify, setOpenModify] = useState(false);
  const { unpaidData, paidData } = useApiData();
  const [open, setOpen] = useState(false);
  const [dataPopup, setDataPopup] = useState({
    gender: "",
    tel: "",
    id_number: "",
    email: "",
    room_num: "",
    apartment_name: "",
    payment_method: "",
    pay_at: "",
    elect: "",
    service: "",
    water: "",
    total: "",
  });

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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
        .patch(`http://127.0.0.1:8000/api/payments/${idPopup}`, dataPatch)
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
        .get(`http://127.0.0.1:8000/api/payments/${idPopup}`)
        .then((res) => {
          const dataSource = res?.data[0];

          console.log(dataSource);

          const dataExp = {
            gender: dataSource?.gender,
            tel: dataSource?.phone_number,
            id_number: dataSource?.citizen_number,
            email: dataSource?.email,
            room_num: dataSource?.room?.room_number,
            apartment_name: dataSource?.room?.apartment?.name,
            payment_method: dataSource?.payment_method,
            pay_at: dataSource?.pay_at,

            elect: dataSource?.elect,
            service: dataSource?.service,
            water: dataSource?.water,
            total: dataSource?.total,
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
    <Box width="100%" overflow="auto">
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell align="left">Apartment Name</TableCell>
            <TableCell align="center">Room Num</TableCell>
            <TableCell align="center">Deadline</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {unpaidData
            ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            ?.map((subscriber, index) => (
              <TableRow
                key={index}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  handleOpen();
                  setIdPopup(subscriber.id);
                }}
              >
                <TableCell align="left">{subscriber.name}</TableCell>
                <TableCell align="center">{subscriber.room_number}</TableCell>
                <TableCell align="center">{subscriber.deadline}</TableCell>
                <TableCell align="center">{subscriber.total}</TableCell>
                <TableCell align="right">
                  <IconButton>
                    <Icon color="error">close</Icon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </StyledTable>

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
        {!openModify ? (
          <InvoicePopup
            handleClose={handleClose}
            handleOpenModify={handleOpenModify}
            data={dataPopup}
          />
        ) : (
          <InvoiceModifyPopup
            handleCloseModify={handleCloseModify}
            data={dataPopup}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        )}
      </Modal>

      <TablePagination
        sx={{ px: 2 }}
        page={page}
        component="div"
        rowsPerPage={rowsPerPage}
        count={unpaidData?.length}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[5, 10, 25]}
        onRowsPerPageChange={handleChangeRowsPerPage}
        nextIconButtonProps={{ "aria-label": "Next Page" }}
        backIconButtonProps={{ "aria-label": "Previous Page" }}
      />
    </Box>
  );
};

export default UnpaidInvoice;

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
import axiosInstance from "axios";
import Modal from "@mui/material/Modal";
import InvoiceDetail from "./popup/InvoiceDetail";
import InvoiceEdit from "./popup/InvoiceEdit";

const StyledTable = styled(Table)(() => ({
  whiteSpace: "pre",
  "& thead": {
    "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
  },
  "& tbody": {
    "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
  },
}));

const UnpaidInvoice = ({ searchValue }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const { data, loading, error } = useApiData();
  const [paidData, setPaidData] = useState([]);

  useEffect(() => {
    const { paidData, unpaidData } = data;
    setPaidData(paidData);
  }, [data]);

  const [idPopup, setIdPopup] = useState(null);
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
        .patch(`http://134.209.101.17:8000/api/payments/${idPopup}`, dataPatch)
        .then((res) => {
          handleClose();
        });
    };
    patchData();
    handleCloseModify();
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenModify = () => setOpenModify(true);
  const handleCloseModify = () => setOpenModify(false);

  useEffect(() => {
    async function fetchData() {
      await axiosInstance
        .get(`http://134.209.101.17:8000/api/payments/${idPopup}`)
        .then((res) => {
          const dataSource = res?.data[0];
          const dataExp = {
            room_id: dataSource?.room_id,
            name: dataSource?.room.tenants[0]?.name,
            room: dataSource?.room.room_number,
            apartment_name: dataSource?.room.apartment.name,
            tel: dataSource?.room.tenants[0]?.phone_number,
            email: dataSource?.room.tenants[0]?.email,
            create_at: dataSource?.created_at,
            deadline: dataSource?.deadline,
            water: dataSource?.water,
            service: dataSource?.service,
            rent: dataSource?.rent,
            electricity: dataSource?.electricity,
            total: dataSource?.total,
            pay_at: dataSource?.pay_at,
          };
          setDataPopup(dataExp);
        });
    }
    if (idPopup) {
      fetchData();
      console.log(dataPopup);
    }
  }, [idPopup]);

  // filter data.paidData with searchValue and then set to setPaidData
  useEffect(() => {
    const filterData = data?.paidData?.filter((item) => {
      return (
        item?.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item?.room_number.toLowerCase().includes(searchValue.toLowerCase()) ||
        item?.deadline.toLowerCase().includes(searchValue.toLowerCase()) ||
        item?.total.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
    setPaidData(filterData);
  }, [searchValue]);

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
        {loading ? (
          "Loading..."
        ) : (
          <TableBody>
            {paidData
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
        )}
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
          <InvoiceDetail
            handleClose={handleClose}
            handleOpenModify={handleOpenModify}
            data={dataPopup}
          />
        ) : (
          <InvoiceEdit
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
        count={paidData?.length}
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

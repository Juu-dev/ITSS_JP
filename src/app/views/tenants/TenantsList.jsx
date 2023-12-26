import { Paid } from "@mui/icons-material";
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
import Modal from "@mui/material/Modal";
import axiosInstance from "axios";
import RenterPopup from "./renter-popup/RenterPopup";
import RoomModifyPopup from "./renter-modify-popup/RenterModifyPopup";

const StyledTable = styled(Table)(() => ({
  whiteSpace: "pre",
  "& thead": {
    "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
  },
  "& tbody": {
    "& tr": { "& td": { paddingLeft: 0 } },
  },
}));

const TenantsList = ({ searchValue }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

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

  const { data } = useApiData();
  const [dataDisplay, setDataDisplay] = useState(data);

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
        .patch(`http://134.209.101.17:8000/api/tenants/${idPopup}`, dataPatch)
        .then((res) => {
          handleClose();
        });
    };
    patchData();
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenModify = () => setOpenModify(true);
  const handleCloseModify = () => {
    setOpen(false);
    setOpenModify(false);
  };

  useEffect(() => {
    async function fetchData() {
      await axiosInstance
        .get(`http://134.209.101.17:8000/api/tenants/${idPopup}`)
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

  const handleRemoveTenant = (e, id) => {
    if (e) e.stopPropagation();
    async function fetchData() {
      await axiosInstance
        .delete(`http://134.209.101.17:8000/api/tenants/${id}`)
        .then((res) => {
          console.log(res);
          window.location.reload();
        });
    }
    fetchData();
  };

  useEffect(() => {
    console.log("check: ", searchValue);
    if (searchValue && searchValue !== "") {
      const dataSearch = data;
      const dataNew = dataSearch?.filter((item) => {
        return (
          item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.phone_number.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.email.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.rooms[0].room_number
            .toLowerCase()
            .includes(searchValue.toLowerCase()) ||
          item.rooms[0].pivot.rent_type
            .toLowerCase()
            .includes(searchValue.toLowerCase())
        );
      });
      console.log("check data: ", dataNew.length);
      setDataDisplay(dataNew);
    } else {
      setDataDisplay(data);
    }
  }, [searchValue, data]);

  return (
    <Box width="100%" overflow="auto">
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center">Host Type</TableCell>
            <TableCell align="center">Room</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataDisplay
            ?.filter((item) => !item.deleted_at)
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
                <TableCell align="center">{subscriber.phone_number}</TableCell>
                <TableCell align="center">
                  {subscriber.rooms[0].pivot.rent_type}
                </TableCell>
                <TableCell align="center">
                  {subscriber.rooms[0].room_number}
                </TableCell>
                <TableCell align="center">{subscriber.email}</TableCell>
                <TableCell align="right">
                  <IconButton
                    onClick={(e) => {
                      setIdPopup(subscriber.id);
                      handleRemoveTenant(e, subscriber.id);
                    }}
                  >
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
          <RenterPopup
            handleClose={handleClose}
            handleOpenModify={handleOpenModify}
            data={dataPopup}
            handleRemoveTenant={() => handleRemoveTenant(null, idPopup)}
          />
        ) : (
          <RoomModifyPopup
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
        count={dataDisplay?.length}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[5, 10, 25]}
        onRowsPerPageChange={handleChangeRowsPerPage}
        nextIconButtonProps={{ "aria-label": "Next Page" }}
        backIconButtonProps={{ "aria-label": "Previous Page" }}
      />
    </Box>
  );
};

export default TenantsList;

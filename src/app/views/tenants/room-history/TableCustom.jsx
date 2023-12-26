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
import { useState } from "react";
import axiosInstance from "axios";
import { useParams } from "react-router-dom";
import { Fragment, useEffect } from "react";

const StyledTable = styled(Table)(() => ({
  whiteSpace: "pre",
  "& thead": {
    "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
  },
  "& tbody": {
    "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
  },
}));

const TableCustom = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [data, setData] = useState([]);
  const { id } = useParams();

  const parseData = (data) => {
    let result = [];
    for (let i = 0; i < data.length; i++) {
      result.push({
        id: data[i].id,
        apartment_id: data[i].apartment_id,
        room_number: data[i].room_number,
        rent_status: data[i].rent_status,
        room_type: data[i].room_type,
        additional_info: data[i].additional_info,
      });
    }
    return result;
  };

  useEffect(() => {
    async function fetchData() {
      const res = await axiosInstance.get(
        `http://134.209.101.17:8000/api/rooms/${id}`
      );
      let data = res.data;
      if (res.status === 200) {
        const res1 = await axiosInstance.get(
          `http://134.209.101.17:8000/api/rooms`
        );
        for (let apartment of res1.data) {
          if (apartment.id === data[0].apartment_id) {
            data[0].apartment_name = apartment.name;
          }
        }
        setData(data);
        console.log("data: ", data[0].tenants);
      }
    }
    fetchData();
  }, []);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box width="100%" overflow="auto">
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell align="left">Renter Name</TableCell>
            <TableCell align="center">Tel</TableCell>
            <TableCell align="center">Start</TableCell>
            <TableCell align="center">Gender</TableCell>
            <TableCell align="right">Contact</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data[0]?.tenants
            ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            ?.map((subscriber, index) => (
              <TableRow key={index}>
                <TableCell align="left">{subscriber?.name}</TableCell>
                <TableCell align="center">{subscriber?.phone_number}</TableCell>
                <TableCell align="center">{subscriber?.created_at}</TableCell>
                <TableCell align="center">{subscriber?.gender}</TableCell>
                <TableCell align="center">{subscriber?.email}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </StyledTable>

      <TablePagination
        sx={{ px: 2 }}
        page={page}
        component="div"
        rowsPerPage={rowsPerPage}
        count={data?.length}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[5, 10, 25]}
        onRowsPerPageChange={handleChangeRowsPerPage}
        nextIconButtonProps={{ "aria-label": "Next Page" }}
        backIconButtonProps={{ "aria-label": "Previous Page" }}
      />
    </Box>
  );
};

export default TableCustom;

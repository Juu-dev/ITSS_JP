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

  useEffect(() => {
    async function fetchData() {
      const res = await axiosInstance.get(
        `http://localhost:8000/api/apartments/${id}`
      );
      let data = res.data;
      if (res.status === 200) {
        const res1 = await axiosInstance.get(
          `http://localhost:8000/api/apartments`
        );
        for (let apartment of res1.data) {
          if (apartment.id === data[0].apartment_id) {
            data[0].apartment_name = apartment.name;
          }
        }
        console.log(data);
        setData(data);
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
            <TableCell align="center">Room Number</TableCell>
            <TableCell align="center">Rental status</TableCell>
            <TableCell align="center">Room type</TableCell>
            <TableCell align="right">Additional imformation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data
            ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            ?.map((subscriber, index) => (
              <TableRow key={index}>
                <TableCell align="left">{subscriber.apartment_name}</TableCell>
                <TableCell align="center">{subscriber.room_number}</TableCell>
                <TableCell align="center">{subscriber.rent_status}</TableCell>
                <TableCell align="center">
                  {subscriber.room_type.type}
                </TableCell>
                <TableCell align="center">
                  {subscriber.additional_info}
                </TableCell>
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

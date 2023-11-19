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
import { useState } from "react";

const StyledTable = styled(Table)(() => ({
  whiteSpace: "pre",
  "& thead": {
    "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
  },
  "& tbody": {
    "& tr": { "& td": { paddingLeft: 0 } },
  },
}));

const subscribarList = [
  {
    name: "Sophie Turner",
    phone: "1234567890",
    host: "Yes",
    room: "456",
    email: "sophie@gmail.com",
  },
  {
    name: "Ethan Parker",
    phone: "9876543210",
    host: "No",
    room: "789",
    email: "ethan@yahoo.com",
  },
  {
    name: "Olivia Brown",
    phone: "5551234567",
    host: "Yes",
    room: "123",
    email: "olivia@hotmail.com",
  },
  {
    name: "Liam Johnson",
    phone: "7894561230",
    host: "No",
    room: "234",
    email: "liam@gmail.com",
  },
  {
    name: "Mia Davis",
    phone: "3219876540",
    host: "Yes",
    room: "567",
    email: "mia@gmail.com",
  },
  {
    name: "Noah Smith",
    phone: "1112223333",
    host: "Yes",
    room: "890",
    email: "noah@gmail.com",
  },
  {
    name: "Ava Wilson",
    phone: "4445556666",
    host: "No",
    room: "123",
    email: "ava@gmail.com",
  },
  {
    name: "Liam Harris",
    phone: "9998887777",
    host: "Yes",
    room: "456",
    email: "liam@yahoo.com",
  },
  {
    name: "Emma Martinez",
    phone: "6667778888",
    host: "Yes",
    room: "789",
    email: "emma@hotmail.com",
  },
  {
    name: "William Taylor",
    phone: "2223334444",
    host: "No",
    room: "234",
    email: "william@gmail.com",
  },
];

const TenantsList = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

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
            <TableCell align="left">Name</TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center">Host</TableCell>
            <TableCell align="center">Room</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {subscribarList
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((subscriber, index) => (
              <TableRow key={index}>
                <TableCell align="left">{subscriber.name}</TableCell>
                <TableCell align="center">{subscriber.phone}</TableCell>
                <TableCell align="center">{subscriber.host}</TableCell>
                <TableCell align="center">{subscriber.room}</TableCell>
                <TableCell align="center">{subscriber.email}</TableCell>
                <TableCell align="right">
                  <IconButton>
                    <Icon color="error">close</Icon>
                  </IconButton>
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
        count={subscribarList.length}
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

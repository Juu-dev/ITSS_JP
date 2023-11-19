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
    "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
  },
}));

const subscribarList = [
  {
    name: "John Doe",
    date: "18 January, 2019",
    amount: 1000,
    deadline: "18 January, 2019",
    apartment: "ABC Fintech LTD.",
  },
  {
    name: "Jane Smith",
    date: "22 February, 2020",
    amount: 1500,
    deadline: "22 February, 2020",
    apartment: "XYZ Investments Inc.",
  },
  {
    name: "Michael Johnson",
    date: "10 March, 2021",
    amount: 750,
    deadline: "10 March, 2021",
    apartment: "Financial Innovators LLC",
  },
  {
    name: "Sarah Williams",
    date: "5 May, 2022",
    amount: 2000,
    deadline: "5 May, 2022",
    apartment: "Global Capital Group",
  },
  {
    name: "David Brown",
    date: "12 June, 2020",
    amount: 1200,
    deadline: "12 June, 2020",
    apartment: "MoneyMakers Ltd.",
  },
  {
    name: "Emily Davis",
    date: "8 August, 2019",
    amount: 800,
    deadline: "8 August, 2019",
    apartment: "WealthBuilders Inc.",
  },
  {
    name: "Robert Wilson",
    date: "17 September, 2021",
    amount: 950,
    deadline: "17 September, 2021",
    apartment: "FinPro Solutions",
  },
  {
    name: "Olivia Garcia",
    date: "21 October, 2020",
    amount: 1350,
    deadline: "21 October, 2020",
    apartment: "Capital Connectors Corp.",
  },
  {
    name: "William Taylor",
    date: "14 November, 2018",
    amount: 1100,
    deadline: "14 November, 2018",
    apartment: "Investment Insights LLC",
  },
  {
    name: "Ava Martinez",
    date: "30 December, 2022",
    amount: 1750,
    deadline: "30 December, 2022",
    apartment: "Profit Producers Ltd.",
  },
  {
    name: "James Anderson",
    date: "9 April, 2021",
    amount: 980,
    deadline: "9 April, 2021",
    apartment: "Money Masters Inc.",
  },
  {
    name: "Sophia Hernandez",
    date: "7 July, 2020",
    amount: 890,
    deadline: "7 July, 2020",
    apartment: "Investment Innovations",
  },
  {
    name: "Liam Wilson",
    date: "3 February, 2023",
    amount: 1600,
    deadline: "3 February, 2023",
    apartment: "Wealth Wizards Ltd.",
  },
  {
    name: "Mia Lopez",
    date: "19 June, 2019",
    amount: 700,
    deadline: "19 June, 2019",
    apartment: "Profit Partners Inc.",
  },
  {
    name: "Benjamin Turner",
    date: "25 October, 2018",
    amount: 1250,
    deadline: "25 October, 2018",
    apartment: "Global Finance Solutions",
  },
  {
    name: "Charlotte Clark",
    date: "15 September, 2021",
    amount: 1050,
    deadline: "15 September, 2021",
    apartment: "Capital Gains Group",
  },
  {
    name: "Henry Adams",
    date: "6 August, 2022",
    amount: 1450,
    deadline: "6 August, 2022",
    apartment: "Money Managers LLC",
  },
  {
    name: "Amelia Baker",
    date: "11 November, 2020",
    amount: 850,
    deadline: "11 November, 2020",
    apartment: "Financial Wizards Inc.",
  },
  {
    name: "Daniel Lewis",
    date: "2 March, 2019",
    amount: 1150,
    deadline: "2 March, 2019",
    apartment: "Investment Insights LLC",
  },
  {
    name: "Grace Scott",
    date: "28 May, 2021",
    amount: 940,
    deadline: "28 May, 2021",
    apartment: "Profit Producers Ltd.",
  },
  {
    name: "Joseph Hill",
    date: "13 December, 2018",
    amount: 1300,
    deadline: "13 December, 2018",
    apartment: "Money Masters Inc.",
  },
  {
    name: "Lily Carter",
    date: "4 April, 2022",
    amount: 750,
    deadline: "4 April, 2022",
    apartment: "Investment Innovations",
  },
  {
    name: "Samuel Young",
    date: "20 July, 2020",
    amount: 1650,
    deadline: "20 July, 2020",
    apartment: "Wealth Wizards Ltd.",
  },
  {
    name: "Ella Turner",
    date: "9 January, 2023",
    amount: 720,
    deadline: "9 January, 2023",
    apartment: "Profit Partners Inc.",
  },
  {
    name: "Alexander Garcia",
    date: "16 February, 2019",
    amount: 1180,
    deadline: "16 February, 2019",
    apartment: "Global Finance Solutions",
  },
];

const UnpaidInvoices = () => {
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
            <TableCell align="center">Apartment</TableCell>
            <TableCell align="center">Start Date</TableCell>
            <TableCell align="center">Deadline</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {subscribarList
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((subscriber, index) => (
              <TableRow key={index}>
                <TableCell align="left">{subscriber.name}</TableCell>
                <TableCell align="center">{subscriber.apartment}</TableCell>
                <TableCell align="center">{subscriber.date}</TableCell>
                <TableCell align="center">{subscriber.deadline}</TableCell>
                <TableCell align="center">${subscriber.amount}</TableCell>
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

export default UnpaidInvoices;

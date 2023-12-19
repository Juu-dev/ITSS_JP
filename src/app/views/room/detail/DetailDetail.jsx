import { Grid, Card, Typography } from "@mui/material";
import { Fragment } from "react";
import { ImageList, ImageListItem } from "@mui/material";

export default function DetailDetail({ roomData }) {
  const data = roomData[0];
  return (
    <Fragment>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Card sx={{ px: 3, py: 2, mb: 3, textAlign: "left" }}>
          <Typography variant="subtitle1" component="p">
            <strong>Basic Info</strong>
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="subtitle1" component="p">
                Apartment name: {data?.apartment_id}
              </Typography>
              <Typography variant="subtitle1" component="p">
                Room:{data?.room_number}
              </Typography>{" "}
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1" component="p">
                Renter: {data?.tenants[0].name}
              </Typography>
              <Typography variant="subtitle1" component="p">
                Rent type: {data?.rent_status}
              </Typography>
            </Grid>
          </Grid>
        </Card>
        <Card sx={{ px: 3, py: 2, mb: 3, textAlign: "left" }}>
          <Typography variant="subtitle1" component="p">
            <strong>Media</strong>
          </Typography>
          <ImageList cols={data?.room_medias.length} rowHeight={500}>
            {data?.room_medias.map((item) => (
              <ImageListItem key={item.id}>
                <img
                  srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.id}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Card>
      </Grid>
      <Card sx={{ px: 3, py: 2, mb: 3, textAlign: "left" }}>
        <Typography variant="subtitle1" component="p">
          <strong>Description</strong>
        </Typography>
        <Typography variant="subtitle1" component="p">
          {data?.room_type.description}
        </Typography>
      </Card>
    </Fragment>
  );
}

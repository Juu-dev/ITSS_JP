import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid, IconButton } from "@mui/material";
import Icon from "@mui/material/Icon";
import DeleteWarning from "./DeleteWarning";

export default function TenantCard({ data }) {
  const tenantData = data;
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Tenant
        </Typography>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={6}>
            <Grid item xs>
              <Typography variant="h5" component="div">
                <strong>{tenantData.name}</strong>
              </Typography>
              <Typography variant="body2" component="div">
                {tenantData.phone}
              </Typography>
              <Grid item container>
                <Grid item xs={6}>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    <strong>Citizen Num:</strong>
                    {tenantData.citizen_num}
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    <strong>Room's Owner:</strong>
                    {tenantData.room_owner}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    <strong>Gender:</strong> {tenantData.gender}
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    <strong>Email</strong> {tenantData.email}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <IconButton>
              <Icon>edit</Icon>
            </IconButton>
            <DeleteWarning data={tenantData} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

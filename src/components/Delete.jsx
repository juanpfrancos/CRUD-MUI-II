import React from 'react';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

export default function DeleteDial(props) {
  
  const peticionDelete=async()=>{
    await axios.delete(props.baseURL+props.selRow.id+'/')
    .then(response=>{
      props.setRows(props.rows.filter(row=>row.id!==props.selRow.id)) /*Actualiza el state excluyendo el campo eliminado*/
      props.setOpen(false);
      props.setSnack(true);
    })
  }

  return (
    <>
      <Dialog open={props.open}>
        <DialogContent>
          <Grid container>
            <Grid item xs={12}>            
                <Typography variant="h3" component="h2" align="center">
                    ¿Deseas eliminar {props.selRow.name + ' ' + props.selRow.reference}?
                </Typography> 
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => peticionDelete()} color="primary">
            Si
          </Button>
          <Button onClick={() => props.setOpen(false)} color="primary">
            No
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

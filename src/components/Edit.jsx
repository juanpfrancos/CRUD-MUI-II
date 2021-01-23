import React from 'react'
import TextField from '@material-ui/core/TextField'
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function Edit(props){
    const sendPutData = async(event) =>{
        event.preventDefault();
        await axios.put(props.baseURL+props.selRow.id+'/', props.selRow)
        .then(function(){
          let dataNueva=props.rows;
          dataNueva = dataNueva.map(rows=>{
            if(props.selRow.id===rows.id){
              rows.name=props.selRow.name;
              rows.price=props.selRow.price;
              rows.reference=props.selRow.reference;
            }
            return rows;
          })
          console.table(dataNueva);
          props.setRows(dataNueva);
          props.setSnackEdit(true);
        })
        .catch(function (error)  {
          console.log(error);
        })
      }

      const inputEditChange = (event) =>{
        props.setSelRow({
          ...props.selRow,
          [event.target.name]:event.target.value,
        })
      }
    return(
        <>
          <Typography variant="h3">Modificar Producto</Typography>
          <form className={props.styles.root} noValidate autoComplete="off" onSubmit={sendPutData}>
              <TextField className={props.styles.mg} id="outlined-basic" label="Producto" variant="outlined" name="name" onChange={inputEditChange} value={props.selRow.name} />
              <TextField className={props.styles.mg} id="outlined-basic" label="Precio" variant="outlined" name="price" onChange={inputEditChange} value={props.selRow.price} />
              <TextField className={props.styles.mg} id="outlined-basic" label="Referencia" variant="outlined" name="reference" onChange={inputEditChange} value={props.selRow.reference} />
              <Button className={props.styles.mg} variant="contained" color="primary" type="submit" size={'large'}>
                Guardar
              </Button>
          </form>
      </>
    )
}

export default Edit;
import React from 'react'
import TextField from '@material-ui/core/TextField'
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function Add(props){

    const sendData = (event) =>{
        event.preventDefault();
        axios.post(props.baseURL, props.data)
        .then(function(response){
          console.log(response);
          console.log(props.data);
          props.setRows(props.rows.concat(response.data))
          event.target.reset()
          props.setSnackAdd(true);
        })
        .catch(function (error)  {
          console.log(error);
        })
      }
    
      const inputChange = (event) =>{
        props.setData({
          ...props.data,
          [event.target.name]:event.target.value,
        })
      }

    return(
        <>
        <Typography variant="h3">Agregar Producto</Typography>
        <form className={props.styles.root} noValidate autoComplete="off" onSubmit={sendData}>
          <TextField className={props.styles.mg} id="outlined-basic" label="Producto" variant="outlined" name="name" onChange={inputChange} />
          <TextField className={props.styles.mg} id="outlined-basic" label="Precio" variant="outlined" name="price" onChange={inputChange}/>
          <TextField className={props.styles.mg} id="outlined-basic" label="Referencia" variant="outlined" name="reference" onChange={inputChange}/>
          <Button className={props.styles.mg} variant="contained" color="primary" type="submit" size={'large'}>
            Guardar
          </Button>
        </form>
      </>
    )
}

export default Add;
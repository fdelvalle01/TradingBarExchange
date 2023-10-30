import React , { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Button,  FormControl,  InputAdornment, InputLabel, OutlinedInput, TableCell, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import useMediaQuery from '@mui/material/useMediaQuery';
import {firestore} from '../../services/firebase'; // Importa tu configuración de Firebase
import { collection, doc, query, setDoc, getDocs,} from "firebase/firestore";

const Buy = () => {
  //Variables globales, como useState, etc. 
  const [rows, setRows] = useState([]);
  const isMobile = useMediaQuery('(max-width: 600px)'); // Cambia el valor según lo que consideres como "móvil"
  //metodo de obtencion de datos al seleccionar Comprar
  const { control, handleSubmit, formState: { errors } } = useForm();


    const columns = [
    { field: 'id', 
      headerName: 'ID', 
      width: 10 
    },
    {
      field: 'Producto',
      headerName: 'Producto',
      width: 130,
    },
    {
      field: 'Precio',
      headerName: 'Precio',
      width: 110,
    },
    {
      field: 'Cantidad',
      headerName: 'Cantidad',
      width: 130,
    },
    {
      field: 'Monto',
      headerName: 'Monto',
      width: 120,
    }
  ];

  
  const getColData = async () => {
    try {
      const q = query(collection(firestore, 'Pedidos'));
      const snapshot = await getDocs(q);
      if (snapshot.size === 0) {
        console.log('No Results');
      }
      setRows(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    } catch (error) {
      console.log(error);
    }
  };
  const onSubmitRegister = handleSubmit(async (data) => {
    // Llamar a buyItem aquí para que se ejecute cuando se envíe el formulario
    await buyItem(data.Producto, data.Cantidad, data.Precio);
    // Resto del código para manejar la respuesta
  });

  
  useEffect(() => {
    getColData();
  }, []); 


  /*
    Metodo que debe agregar los productos comprado por el usuario a la BD y luego mostrarlos en la grilla.
  */ 
  const buyItem = async (producto, cantidad, precio) => {
    console.log(`${producto} ${cantidad} ${precio}`);
    try {
      const userRef = doc(collection(firestore, "Pedidos"));
      await setDoc(userRef, {
        id: userRef.id,
        Producto: producto,
        Cantidad: cantidad,
        Precio: precio,
        Monto: 500,
        createdAt: new Date(),
      });
      getColData();
      return {
        success: true,
        message: 'Pedido realizado',
        data: {
          id: userRef.id,
          Producto: producto,
          Cantidad: cantidad,
          Precio: precio,
          Monto: 500,
          createdAt: new Date(),
        }
      };
    } catch (error) {
      return {
        success: false,
        message: 'Error al Realizar Pedido',
        error: error.message
      };
    }
  };

  return (
    <div > 
        <Box sx={{ display: 'flex', height: '100%'}}>
        <form onSubmit={onSubmitRegister}>
          <Box  sx={{alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
              <TableCell>
              <FormControl fullWidth>
                <InputLabel htmlFor="outlined-adornment-amount">Producto</InputLabel>
                <Controller
                  name="Producto"
                  control={control}
                  rules={{ required: 'Seleccione el producto' }}
                  render={({ field }) => (
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      size="small"
                      label="Producto"
                      variant="outlined"
                      startAdornment={<InputAdornment position="start"></InputAdornment>}
                      {...field}
                    />
                  )}
                />
              </FormControl>
              </TableCell>
              <TableCell>
              <FormControl fullWidth >
                  <InputLabel htmlFor="outlined-adornment-amount">Cantidad</InputLabel>
                  <Controller
                  name="Cantidad"
                  control={control}
                  rules={{ required: 'Ingrese la Cantidad' }}
                  render={({ field }) => (
                      <OutlinedInput
                      id="outlined-adornment-amount"
                      size="small"
                      startAdornment={<InputAdornment position="start">$</InputAdornment>}
                      label="Amount"
                      {...field}
                    />
                  )}
                  />
                </FormControl>
              </TableCell>
              <TableCell>
              <FormControl fullWidth >
                  <InputLabel htmlFor="outlined-adornment-amount">Precio</InputLabel>
                  <Controller
                  name="Precio"
                  control={control}
                  rules={{ required: 'Ingrese la Precio' }}
                  render={({ field }) => (
                      <OutlinedInput
                      id="outlined-adornment-amount"
                      size="small"
                      startAdornment={<InputAdornment position="start">$</InputAdornment>}
                      label="Precio"
                      {...field}
                    />
                  )}
                  />
                </FormControl>
              </TableCell>
                  {errors.Producto && (
                  <Typography color="error" variant="caption">
                    {errors.Producto.message}
                  </Typography>
                )}
                <TableCell>
                <Button variant="contained" onClick={onSubmitRegister}>Comprar</Button>
              </TableCell>   
         
          </Box>
          </form> 
        </Box>
        <Box  sx={{ height: 650, marginTop: 5, overflowX: 'auto', overflowY: 'auto', maxWidth: '100%', // Establece un ancho máximo predeterminado
            '@media (max-width: 600px)': {
              maxWidth: 270, // Cambia el ancho máximo en dispositivos móviles
            },
          }}>
            <DataGrid
               rows={rows}
               columns={columns}
               initialState={{
                 pagination: {
                   paginationModel: {
                     pageSize: 10,
                   },
                 },
               }}
               pageSizeOptions={[10]}
               disableRowSelectionOnClick
               localeText={{
                noRowsLabel: 'No hay datos disponibles', // Cambia el texto aquí
              }}
               />
          </Box>
    </div>
  )
}

export default Buy
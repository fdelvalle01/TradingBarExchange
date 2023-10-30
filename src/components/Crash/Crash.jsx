import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

import useMediaQuery from '@mui/material/useMediaQuery';


const columns_bears = [
  { field: 'Beers', 
    headerName: 'Beers',
    width: 130 
  },
  { field: 'Price', 
    headerName: 'Price',
    width: 130 
  },
];

const columns_Shots = [
  { field: 'Shots', 
    headerName: 'Shots',
    width: 130 
  },
  { field: 'Price', 
    headerName: 'Price',
    width: 130 
  },
]
const columns_Cocktails = [
  { field: 'cocktails', 
    headerName: 'Cocktails',
    width: 130 
  },
  { field: 'Price', 
    headerName: 'Price',
    width: 130 
  },
]

const rows = [
  { id: 1, Beers: 'Austral Lager', Price: '4500' },
  { id: 2, Beers: 'Kustman', Price: '4500'},
  { id: 3, Beers: 'Cusqueña', Price: '4500'},
];

const rows_bears = [
  { id: 1, Beers: 'Austral Lager', Price: '4500' },
  { id: 2, Beers: 'Kustman', Price: '4500'},
  { id: 3, Beers: 'Cusqueña', Price: '4500'},
];
const rows_Shots= [
  { id: 1, Shots: 'Black Rusian', Price: '6990' },
  { id: 2, Shots: 'Coca Wiskey', Price: '5990'},
  { id: 3, Shots: 'Sprit Wiskey', Price: '3990'},
];
const rows_Cocktails= [
  { id: 1, cocktails: 'Margarita', Price: '6990' },
  { id: 2, cocktails: 'Mojito', Price: '5990'},
  { id: 3, cocktails: 'Gin Tonic', Price: '3990'},
];

const Crash = () => {

  const isMobile = useMediaQuery('(max-width: 600px)'); // Cambia el valor según lo que consideres como "móvil"

  return (
    <div style={{ display: 'flex',  flexDirection: isMobile ? 'column' : 'row' }}>
      <Box sx={{ height: 700, width: '100%' }}>
            <DataGrid
              rows={rows_bears}
              columns={columns_bears}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 20,
                  },
                },
              }}
              pageSizeOptions={[20]}
              disableRowSelectionOnClick
            />
        </Box>
      <Box sx={{ height: 700, width: '100%' }}>
          <DataGrid
            rows={rows_Shots}
            columns={columns_Shots}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 20,
                },
              },
            }}
            pageSizeOptions={[20]}
            disableRowSelectionOnClick
          />
        </Box>
        <Box sx={{ height: 700, width: '100%' }}>
          <DataGrid
            rows={rows_Cocktails}
            columns={columns_Cocktails}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 20,
                },
              },
            }}
            pageSizeOptions={[20]}
            disableRowSelectionOnClick
          />
        </Box>
        <Box sx={{ height: 700, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns_bears}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 20,
                },
              },
            }}
            pageSizeOptions={[20]}
            disableRowSelectionOnClick
          />
        </Box>
        <Box sx={{ height: 700, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns_bears}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 20,
                },
              },
            }}
            pageSizeOptions={[20]}
            disableRowSelectionOnClick
          />
        </Box>
    </div>

    
  )
}

export default Crash
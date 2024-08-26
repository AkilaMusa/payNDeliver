
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const Table = (tableRows,columns,searchTerm)=>{


    return(<>
          <DataGrid
        rows={tableRows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        filterModel={{
          items: [
            {
              field: "name",
              operator: "contains",
              value: searchTerm,
            },
          ],
        }}
/>
    </>)
}
export default Table
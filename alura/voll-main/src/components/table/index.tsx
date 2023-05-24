import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

function TableS(){
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 700}} aria-label="tabela customizada">
                    <TableHead>
                        <TableRow>
                            <TableCell>Data</TableCell>
                            <TableCell>Horário</TableCell>
                            <TableCell>Profissional</TableCell>
                            <TableCell>Especialidade</TableCell>
                            <TableCell>Paciente</TableCell>
                            <TableCell>Modalidade</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">22/03/2022</TableCell>
                            <TableCell component="th" scope="row">08:30</TableCell>
                            <TableCell component="th" scope="row">L</TableCell>
                            <TableCell component="th" scope="row">L</TableCell>
                            <TableCell component="th" scope="row">L</TableCell>
                            <TableCell component="th" scope="row">L</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default TableS
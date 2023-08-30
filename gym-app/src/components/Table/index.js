import { TableWrapper, StyledTable, StyledTh, StyledTd } from './styles'


const Table = ({ data , headers }) => {

    return (
        <TableWrapper>
            <StyledTable>
                <thead>
                    <tr>
                        {headers.map((item)=>(
                            <StyledTh>{item.description}</StyledTh>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <StyledTd>{item.id}</StyledTd>
                            <StyledTd>{item.nome}</StyledTd>
                            <StyledTd>{item.status}</StyledTd>
                            <StyledTd>Detalhes</StyledTd>
                        </tr>
                    ))}
                </tbody>
            </StyledTable>
        </TableWrapper>
    )

}

export default Table
import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination'
import Checkbox from '@material-ui/core/Checkbox'
import {CategoryChips, GenreChips} from '../chips/Chips'
import {filmsData} from '../../films'
import './Table.scss'

function FilmsTable (){
    const history = useHistory()
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(11)
    const [tablecells, setTablecells] = useState([])

    useEffect(() => {
        setTablecells(filmsData.slice(page, rowsPerPage))
    }, [])

    const handlePageChange = (event, newPage) => {
        setTablecells(filmsData.slice(newPage*rowsPerPage, (newPage + 1)*rowsPerPage))
        setPage(newPage)
    }

    const handleClick = (film) => {
        history.push(`/details/${film.film}`)
    }
   return(
       <div className='table'>
           <Table size='small'>
               <TableHead className='table-header'>
                   <TableRow>
                       <TableCell><Checkbox /></TableCell>
                       <TableCell className='table-header-title'>FILM NAME</TableCell>
                       <TableCell className='table-header-title'>FILMMAKER</TableCell>
                       <TableCell className='table-header-title'>CATEGORY</TableCell>
                       <TableCell className='table-header-title'>GENRE</TableCell>
                       <TableCell className='table-header-title'>LENGTH</TableCell>
                       <TableCell className='table-header-title'>TIME</TableCell>
                   </TableRow>
               </TableHead>
               <TableBody className='table-body'>
                   {tablecells.map(film => (
                    <TableRow className='table-body-row' onClick={() => handleClick(film)}>
                        <TableCell className='table-body-cell'><Checkbox /></TableCell>
                        <TableCell className='table-body-cell'>{film.film}</TableCell>
                        <TableCell className='table-body-cell'>{film.filmmaker}</TableCell>
                        <TableCell className='table-body-cell'><CategoryChips text={film.category.toUpperCase()} /></TableCell>
                        <TableCell className='table-body-cell'><GenreChips text={film.genre.toUpperCase()} /></TableCell>
                        <TableCell className='table-body-cell'>{film.length}</TableCell>
                        <TableCell className='table-body-cell'>{film.time}</TableCell>
                    </TableRow>
                   ))}
               </TableBody>
           </Table>
           <TablePagination
                component='div'
                count={filmsData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handlePageChange} />

       </div>
   )
}

export default FilmsTable

import React, { useState } from 'react'
import {Button, Container, Grid, Paper, TextField} from '@material-ui/core';
import {MdPauseCircleOutline, MdPlayCircleOutline}  from 'react-icons/md';
import { AiOutlineSelect } from 'react-icons/ai';
import CustomerSearch from '../../CustomerSearchPage/CustomerSearch';

const SelectCustomer = () => {

  const [limiteCredito, setLimiteCredito] = useState(0);
  const [openSearchCustomerForm, setOpenSearchCustomerForm] = useState(false);

  return (
    <Container maxWidth="lg">
        <Paper elevation={3}>
            <Container>
                <Grid container xs={12}>
                    <Grid item xs={6}>
                        <h1>Realizar venda</h1>
                    </Grid>
                </Grid> 
            </Container>
            <Container>
                <Grid container xs={12}>
                    <Grid item xs={9}>
                        <TextField type='text' variant="filled" disabled fullWidth color='primary'
                                id="cliente" label="Selecionar Cliente - clique no botão selecionar"  
                            />
                    </Grid>
                    <Grid item xs={3}>
                            <Button variant='outlined' type="submit" color='primary'
                                onClick={() => {setOpenSearchCustomerForm(true);} }
                            >
                                <AiOutlineSelect style={{fontSize: '24px'}}/>
                                Selecionar
                            </Button>
                    </Grid>
                </Grid>
                {/*Checa se clicou no botão e apresenta o formulário de selecionar cliente */}
                {openSearchCustomerForm &&
                <Grid container xs={12}>
                    <Grid item xs={12}>
                        <CustomerSearch setOpenSearchCustomerForm={setOpenSearchCustomerForm}/>
                    </Grid>
                </Grid> 
                }

            </Container>
            <Container>
                <Grid container xs={12}>
                    <Grid item xs={4}>
                        <Button variant='outlined' type="submit" color='primary' >
                            <MdPlayCircleOutline style={{fontSize: '24px'}}/>
                            Iniciar
                        </Button>
                        <Button variant='outlined' type="submit" color='primary' >
                            <MdPauseCircleOutline style={{fontSize: '24px'}}/>
                            Pausar
                        </Button>
                    </Grid>

                    <Grid item xs={2}>
                        <TextField variant='standard' color='secondary' label='Lim.Créd' value={limiteCredito} />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField variant='standard' color='primary' label='Últ.Compra' value={limiteCredito} />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField variant='standard' color='primary' label='Meta_Venda' value={limiteCredito} />
                    </Grid>

                </Grid> 
            </Container>

        </Paper>
    </Container>   
  )
}

export default SelectCustomer

import { Autocomplete, Box, InputAdornment, Modal, TextField, Typography } from "@mui/material"
import { CadastroRemedioForm } from "./cadastro-receita.style"
import { Button } from "../../components/button/button"
import { useCallback, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { useSearchParams } from "react-router-dom";
import { GenericService } from "../../assets/api/service/GenericService.js";
import { useFetchMedicine } from "../../hooks/useFetchMedicine.js";
import axios from "axios";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1200,
    height: 700,
    bgcolor: 'var(--white)',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    borderRadius: 'var(--border-radius)',
}

export const RenderModal = ({ handleClose, open }) => {
    const [formData, setFormData] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [value, setValue] = useState('');
    const [remedio, setRemedio] = useState([]);

    const { error, medicine } = useFetchMedicine('api/medicine/list-all');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData);
    }

    const memoizedMedicine = useCallback(() => medicine, [medicine]);

    // const getImage = async () => {
    //     const response = await axios.get('https://www.googleapis.com/customsearch/v1', {
    //         params: {
    //             key: 'AIzaSyBl_t_8322eAhMntYmlQvpYFElrL9lbvxA',
    //             cx: '31135ccc7bb374f3a',
    //             q: 'paracetamol ems',
    //             num: 5,
    //             searchType: 'image',
    //         },
    //     });
    //     console.log(response)

    // }
    // useEffect(() => {
    //     getImage();
    // }, [])

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box
                sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Adicionar Medicamento
                </Typography>

                <Autocomplete
                    id="country-select-demo"
                    sx={'width: 100%; background-color: var(--blueish-gray); border-radius: var(--border-radius)'}
                    options={memoizedMedicine}
                    onChange={handleChange}
                    autoHighlight
                    isOptionEqualToValue={(option, value) => option.id === value.id}
                    getOptionLabel={(option) => option.name ? option.name : option.cpf}
                    renderOption={(props, option) => (
                        console.log(option),
                        <Box component="li" key={option.id} sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                            {option.name ? option.name : option.cpf}
                        </Box>
                    )}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Escolha um medicamento"
                            inputProps={{
                                ...params.inputProps,
                                autoComplete: 'new-password',
                            }}
                        />
                    )}
                />

                <Typography id="modal-modal-title" variant="h6" component="h2" sx={'text-decoration: underline'}>
                    Informações adicionais
                </Typography>

                <p>Nome do medicamento: PACO</p>
                <p>Princípio ativo: Paracetamol + Fosfato de Codeína</p>
                <p>Administração: VIA ORAL</p>
                <p>Fabricante: Eurofarma Laboratórios S.A</p>
                <p>Categoria: Genérico</p>

                <CadastroRemedioForm>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <Box>
                            <TextField
                                label='Dose'
                                type="number"
                                name="dose"
                                onChange={handleChange}
                                InputProps={{ endAdornment: <InputAdornment position="end">mg</InputAdornment> }}
                                sx={'width: 30%; background-color: var(--blueish-gray); border-radius: var(--border-radius)'} />
                            <TextField
                                label='Periodicidade do medicamento'
                                type="number"
                                name="usage_interval"
                                onChange={handleChange}
                                InputProps={{ endAdornment: <InputAdornment position="end">horas</InputAdornment> }}
                                sx={'width: 30%; background-color: var(--blueish-gray); border-radius: var(--border-radius)'} />
                        </Box>
                        <Box>
                            <TextField
                                label='Duração de tratamento'
                                type="number"
                                name="usage_duration"
                                onChange={handleChange}
                                InputProps={{ endAdornment: <InputAdornment position="end">dias</InputAdornment> }}
                                sx={'width: 30%; background-color: var(--blueish-gray); border-radius: var(--border-radius)'} />
                            <TextField
                                label='Comprimidos'
                                type="number"
                                name="quantity"
                                onChange={handleChange}
                                InputProps={{ endAdornment: <InputAdornment position="end">und</InputAdornment> }}
                                sx={'width: 30%; background-color: var(--blueish-gray); border-radius: var(--border-radius)'} />
                        </Box>
                    </Box>

                    <Box sx={{ backgroundColor: 'green', width: 50, height: 50 }} onClick={() => {
                        console.log('teste')
                    }}>

                    </Box>

                    <Button
                        type="submit"
                        text='Adicionar à Receita'
                        color={'var(--black)'}
                        bgColor={'var(--turquoise)'} />

                </CadastroRemedioForm>
            </Box>
        </Modal>
    )
}

RenderModal.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
}
import { Autocomplete, Box, InputAdornment, Modal, TextField, Typography } from "@mui/material"
import { CadastroRemedioForm } from "./cadastro-receita.style"
import { Button } from "../../components/button/button"
import { useState } from "react";
import PropTypes from 'prop-types';
import { useSearchParams } from "react-router-dom";
import { GenericService } from "../../assets/api/service/GenericService.js";

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


    // const [searchParams, setSearchParams] = useSearchParams({
    //     nome_produto: '',
    // });


    const fetchMedicamento = async () => {
        try {
            const medicamento = await GenericService.findAll('api/medicine/get-medicines-by-name', `nome_produto=${inputValue}`);
            if (medicamento) {
                if (medicamento && medicamento.data) {
                    console.log('Medicamento fetched successfully:', medicamento.data);
                    setRemedio(medicamento.data);
                }
            }
        } catch (error) {
            throw new Error('Erro ao buscar medicamento. Por favor, tente novamente.');
        }

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData);
    }
    const handleInputValue = (event, newInputValue) => {
        event.preventDefault();
        setInputValue(newInputValue);
        fetchMedicamento();
    }

    const handleValue = (event, newValue) => {
        setValue(newValue);
        console.log(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Enviando dados...');
    }

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
                    defaultValue={''}
                    value={value}
                    onChange={handleValue}
                    inputValue={inputValue}
                    onInputChange={handleInputValue}
                    options={remedio}
                    sx={'width: 100%; background-color: var(--blueish-gray); border-radius: var(--border-radius)'}
                    renderInput={(params) => <TextField {...params} label="Nome do Medicamento" />} />

                <Typography id="modal-modal-title" variant="h6" component="h2" sx={'text-decoration: underline'}>
                    Informações adicionais
                </Typography>

                <p>Nome do medicamento: PACO</p>
                <p>Princípio ativo: Paracetamol + Fosfato de Codeína</p>
                <p>Administração: VIA ORAL</p>
                <p>Fabricante: Eurofarma Laboratórios S.A</p>
                <p>Categoria: Genérico</p>

                <CadastroRemedioForm>
                    <div>
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
                        <TextField
                            label='Duração de tratamento'
                            type="number"
                            name="usage_duration"
                            onChange={handleChange}
                            InputProps={{ endAdornment: <InputAdornment position="end">dias</InputAdornment> }}
                            sx={'width: 30%; background-color: var(--blueish-gray); border-radius: var(--border-radius)'} />
                    </div>

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
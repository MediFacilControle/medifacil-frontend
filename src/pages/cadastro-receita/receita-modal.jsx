import { Autocomplete, Box, InputAdornment, Modal, TextField, Typography } from "@mui/material"
import { CadastroRemedioForm } from "./cadastro-receita.style"
import { Button } from "../../components/button/button"
import { useState } from "react";
import PropTypes from 'prop-types';
import { useSearchParams } from "react-router-dom";

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

const formData = {
    name: "Minha Receita22",
    data_expiration: "2025-12-31",
    pacient: "666f0a9a003fe13a87ea2a14",
    medicines: [
        {
            medicine: "666f1975d1634d8060239bfc",
            usage_duration: 2,
            usage_interval: "8 hours",
            treatment_start: "2024-11-31",
            next_dose: "2024-12-01",
            link_photo: "http://linkparafoto.com/medicine1.jpg",
            new_photo: "base64",
            quantity: "3 comprimidos"
        },
        {
            medicine: "666f1975d1634d80602393f6",
            usage_duration: 2,
            usage_interval: "8 hours",
            treatment_start: "2024-11-31",
            next_dose: "2024-12-01",
            link_photo: "http://linkparafoto.com/medicine1.jpg",
            new_photo: "base64",
            quantity: "3 comprimidos"
        }
    ]
};

export const RenderModal = ({ handleClose, open, ...props }) => {
    const [formData, setFormData] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [value, setValue] = useState('');

    const [searchParams, setSearchParams] = useSearchParams({
        nome_produto: '',
    });
    const nome_produto = searchParams.get('nome_produto');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData);
    }

    const handleNewInput = (e) => {
        setInputValue(e.target.value);
        setSearchParams({ nome_produto: e.target.value }, { replace: true })
        console.log(inputValue);
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
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    defaultValue={''}
                    inputValue={nome_produto}
                    onInputChange={handleNewInput}
                    options={['Medicamento 1', 'Medicamento 2', 'Medicamento 3']}
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
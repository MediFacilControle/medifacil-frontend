import { Autocomplete, Box, IconButton, ListItem, ListItemText, Modal, TextField, Typography } from "@mui/material"
import { PrimaryLayout } from "../../components/layout/primary-layout/primary-layout"
import { CadastroReceitaContainer, CadastroReceitaForm } from "./cadastro-receita.style.ts"
import { Button } from "../../components/button/button.jsx"
import { BackArrow } from "../../components/back-arrow/back-arrow.jsx"
import { useState, useTransition } from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1500,
    height: 700,
    bgcolor: 'var(--white)',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
}

function renderItem({ item, handleRemoveFruit }) {
    return (
        <ListItem
            secondaryAction={
                <IconButton
                    edge="end"
                    aria-label="delete"
                    title="Delete"
                    onClick={() => handleRemoveFruit(item)}
                >
                    <DeleteIcon />
                </IconButton>
            }
        >
            <ListItemText primary={item} />
        </ListItem>
    );
}

export const CadastroReceita = () => {
    const [isPeding, startTransition] = useTransition();
    const [formData, setFormData] = useState('');
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null);
        console.log('Enviando dados...');
        startTransition(async () => {
            try {
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

                const newReceita = await GenericService.create('api/recipe/register-recipe', formData);
                if (newReceita.status >= 200 && newReceita.status < 300) {
                    if (newReceita && newReceita.data) {
                        console.log('Receita created successfully:', newReceita.data);
                        navigate('/home');
                    } else {
                        console.error('Failed to create user. Unexpected response:', newReceita);
                    }
                }
            } catch (error) {
                setError('Error creating user. Please try again.');
                console.error('Error creating user:', error);
            }
        })
    }

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [inputValue, setInputValue] = useState('');

    const [medicamento, setMedicamento] = useState([]);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <PrimaryLayout>
            <CadastroReceitaContainer>
                <BackArrow />
                <CadastroReceitaForm>
                    <h2>Cadastro de Receita</h2>
                    <TextField
                        label='Nome'
                        sx={'width: 100%; background-color: var(--blueish-gray); border-radius: var(--border-radius)'} />

                    <Autocomplete
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => {
                            setInputValue(newInputValue)
                            console.log(newInputValue);
                        }}
                        options={['Mayara', 'Gabriela', 'Victor']}
                        sx={'width: 100%; background-color: var(--blueish-gray); border-radius: var(--border-radius)'}
                        renderInput={(params) => <TextField {...params} label="Nome do Paciente" />}
                    />

                </CadastroReceitaForm>
                <h2>Medicamentos</h2>

                <Button
                    text='Adicionar Medicamento'
                    onClick={handleOpen} />

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
                            onChange={handleChange}
                            options={['Medicamento 1', 'Medicamento 2', 'Medicamento 3']}
                            sx={'width: 100%; background-color: var(--blueish-gray); border-radius: var(--border-radius)'}
                            renderInput={(params) => <TextField {...params} label="Nome do Medicamento" />} />

                        <TextField
                            sx={'width: 100%; background-color: var(--blueish-gray); border-radius: var(--border-radius)'} />
                    </Box>
                </Modal>


            </CadastroReceitaContainer>
        </PrimaryLayout>
    )
}

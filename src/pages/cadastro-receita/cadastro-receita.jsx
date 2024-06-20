import { Autocomplete, Box, IconButton, ListItem, ListItemText, Modal, TextField, Typography } from "@mui/material"
import { PrimaryLayout } from "../../components/layout/primary-layout/primary-layout"
import { CadastroReceitaContainer, CadastroReceitaForm } from "./cadastro-receita.style.ts"
import { Button } from "../../components/button/button.jsx"
// import { BackArrow } from "../../components/back-arrow/back-arrow.jsx"
import { BackArrow } from "../../components/back-arrow/back-arrow.jsx"
import { useState } from "react"
import DeleteIcon from '@mui/icons-material/Delete';
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

function handleChange(e) {
    console.log(e.target.value);
    console.log(e)
    // setMedicamentos(event.target.value);
}

export const CadastroReceita = () => {
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

import { Autocomplete, IconButton, ListItem, ListItemText, TextField } from "@mui/material"
import { PrimaryLayout } from "../../components/layout/primary-layout/primary-layout"
import { CadastroReceitaContainer, CadastroReceitaForm } from "./cadastro-receita.style.ts"
import { Button } from "../../components/button/button.jsx"
import { BackArrow } from "../../components/back-arrow/back-arrow.jsx"
import { useState, useTransition } from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate, useSearchParams } from "react-router-dom"
import { GenericService } from "../../assets/api/service/GenericService.js"
import { RenderModal } from "./receita-modal.jsx"


function renderItem({ item, handleRemoveMed }) {
    return (
        <ListItem
            secondaryAction={
                <IconButton
                    edge="end"
                    aria-label="delete"
                    title="Delete"
                    onClick={() => handleRemoveMed(item)}
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
    const [isPending, startTransition] = useTransition();
    const [formData, setFormData] = useState('');
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();
    const [remedios, setRemedios] = useState([]);

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Enviando dados...');
        startTransition(async () => {
            try {
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
                throw new Error('Erro no cadastro da receita. Por favor, tente novamente.');
            }
        })
    }

    return (
        <PrimaryLayout>
            <CadastroReceitaContainer>
                <BackArrow />
                <CadastroReceitaForm>
                    <h2>Cadastro de Receita</h2>
                    <TextField
                        label='Nome da receita'
                        name="nome-receita"
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
                        name="paciente"
                        sx={'width: 100%; background-color: var(--blueish-gray); border-radius: var(--border-radius)'}
                        renderInput={(params) => <TextField {...params} label="Nome do Paciente" />}
                    />

                </CadastroReceitaForm>
                <h2>Medicamentos</h2>

                <Button
                    text='Adicionar Medicamento'
                    onClick={handleOpen} />

                <RenderModal handleClose={handleClose} open={open} />

            </CadastroReceitaContainer>
        </PrimaryLayout>
    )
}


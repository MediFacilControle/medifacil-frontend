import { PrimaryLayout } from "../../components/layout/primary-layout/primary-layout"
import { Box, Typography } from "@mui/material"
import { useFetchClientRecipes } from "../../hooks/useFetchClientRecipes";
import { useCallback } from "react";
import { Button } from "../../components/button/button";
import { GenericService } from "../../assets/api/service/GenericService";

export const Receitas = () => {
    // para pegar todos as receitas relacionado ao médico (pessoa logada)
    const { recipe } = useCallback(useFetchClientRecipes('api/recipe/get-recipes'));
    const handleClickToPDF = async (id) => {
        const response = await GenericService.findAllList(`/api/pdf/generate-pdf/${id}`)
        console.log(response)
    }

    return (
        <PrimaryLayout>
            <Box sx={{ margin: '1rem', backgroundColor: 'var(--turquoise)', borderRadius: 'var(--border-radius)', padding: '1rem' }}>
                {recipe.map((recipe) => {
                    return (
                        <Box key={recipe._id} sx={{ margin: '1rem 0', padding: '1rem', backgroundColor: 'var(--white)', borderRadius: 'var(--border-radius)' }}>
                            <Typography sx={{ width: '100%' }}>
                                <Typography sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <h3>{recipe.name}</h3>
                                    <p>Válida até: {new Date(recipe.data_expiration).toLocaleDateString('pt-BR')}</p>
                                </Typography>
                                {recipe.medicines.map((medicine) => {
                                    return (
                                        <Box key={medicine._id} sx={{ display: 'flex', gap: '2rem', padding: '1rem', border: '1px solid var(--black)', borderRadius: 'var(--border-radius)', margin: '1rem 0' }}>
                                            <img id="medicine-information-photo" src={medicine.link_photo} alt="Imagem do medicamento" />
                                            <Typography>
                                                <p>Nome do medicamento: {medicine.medicine.nome_produto}</p>
                                                <p>Duração do tratamento: {medicine.usage_duration} dias</p>
                                                <p>Intervalo: {medicine.usage_interval}</p>
                                                <p>Quantidade: {medicine.quantity}</p>
                                                <p>Início do tratamento: {new Date(medicine.treatment_start).toLocaleDateString('pt-BR') ? new Date(medicine.treatment_start).toLocaleDateString('pt-BR') : 'Tratamento não iniciado'}</p>
                                            </Typography>
                                        </Box>
                                    )
                                })}
                            </Typography>
                            <Button
                                text='Gerar PDF'
                                onClick={() => handleClickToPDF(recipe._id)} />
                        </Box>
                    )
                })}
            </Box>
        </PrimaryLayout>
    )
}

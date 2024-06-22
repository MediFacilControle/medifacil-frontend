import { useState, useEffect } from 'react';
import { GenericService } from '../assets/api/service/GenericService';

export function useFetchClientRecipes(url) {
    const [recipe, setRecipe] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchClientRecipes = async () => {
            setIsLoading(true);
            try {
                const response = await GenericService.findAllList(url);
                console.log(response.data);
                if (!response.data) {
                    throw new Error('Não foi possível buscar os dados');
                }
                // const filteredUsers = response.data.filter(recipe => recipe.id === id);
                setRecipe(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchClientRecipes();
    }, [url]);

    return { recipe, isLoading, error };
}
import { useEffect, useState } from "react"
import { GenericService } from "../assets/api/service/GenericService"

export const useFetchMedicine = (route, params) => {
    const [medicine, setMedicine] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMedicine = async () => {
            try {
                const response = await GenericService.findAll(route, params)
                if (!response.data) {
                    throw new Error('Não foi possível buscar os dados')
                }
                setMedicine(response.data)
                console.log(response)
            } catch (error) {
                setError(error.message);
            }
        }
        fetchMedicine()
    }, [route, params])

    return { medicine, error }
}

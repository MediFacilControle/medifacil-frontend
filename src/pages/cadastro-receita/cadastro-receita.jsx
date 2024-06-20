import React, { useState, useTransition } from 'react'
import { SecondaryLayout } from '../../components/layout/secondary-layout/secondary-layout.jsx';
import { GenericService } from '../../assets/api/service/GenericService.jsx';
import { useNavigate } from 'react-router-dom';

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

    // {
    //     "name": "Minha Receita",
    //     "data_expiration":"2025-12-31",
    //     "pacient": "666f0a9a003fe13a87ea2a14",
    //     "medicines": [
    //         {
    //             "medicine": "666f1975d1634d8060239bfc",
    //             "usage_duration": 2,
    //             "usage_interval": "8 hours",
    //             "treatment_start": "2024-11-31",
    //             "next_dose": "2024-12-01",
    //             "link_photo": "http://linkparafoto.com/medicine1.jpg",
    //             "new_photo": "base64",
    //             "quantity": "3 comprimidos"
    //         },
    //         {
    //             "medicine": "666f1975d1634d80602393f6",
    //             "usage_duration": 2,
    //             "usage_interval": "8 hours",
    //             "treatment_start": "2024-11-31",
    //             "next_dose": "2024-12-01",
    //             "link_photo": "http://linkparafoto.com/medicine1.jpg",
    //             "new_photo": "base64",
    //             "quantity": "3 comprimidos"
    //         }
    //     ]
    // }
    return (
        <SecondaryLayout>
            <form onSubmit={handleSubmit}>
            <button
                    disabled={isPeding}>Cadastrar</button>
            </form>
            {error && <p>{error}</p>}
        </SecondaryLayout>
    )
}

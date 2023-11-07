import { useEffect, useState } from "react";
import yelp from "../api/yelp";


export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')
    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp ('/search', {
                params: {
                    limit:50,
                    term: searchTerm,
                    location: 'İstanbul',
                },
            });
            setResults(response.data.businesses);
            setErrorMessage('');
        } catch (error) {
            setErrorMessage('Connection Error')
        }
        
    };


useEffect(() => {
    searchApi('Kebab');
}, []);

return [searchApi, results, errorMessage];
};
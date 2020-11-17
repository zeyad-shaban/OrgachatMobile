import { useEffect, useState } from "react";

const useApi = apiFunc => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        const response = await apiFunc();
        setLoading(false);

        if (!response.ok) return setError(true);
        setData(response.data);
    };
    useEffect(() => { fetchData() }, []);
    return { data, setData, error, loading, setLoading };
};

export default useApi;
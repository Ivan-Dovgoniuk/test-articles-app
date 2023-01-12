
export const useHttp = () => {

    const request = async (url:string, method = 'GET', body:BodyInit | null | undefined = null, headers:HeadersInit = {'Content-Type': 'application/json'}) => {

        try {
            const response = await fetch(url, {method, body, headers});
            if (!response.ok) {
                const error = await response.json();
                alert(error.message)
            }
            const data = await response.json();
            return data;
        } catch(e) {
            throw e;
        }
    };

    return {request}
}
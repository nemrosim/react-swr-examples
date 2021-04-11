/**
 * If the status code is not in the range 200-299,
 * we still try to parse and throw it.
 * @param response
 */
const errorHandler = async (response: Response) => {
    if (!response.ok) {
        const error = new Error('An error occurred while fetching the data.');
        // Attach extra info to the error object.
        (error as any).info = await response.json();
        (error as any).status = response.status
        throw error
    }
}

export const fetcher = async (url: string, method: 'GET' | 'POST', token: string) => {
    const res = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token || '',
        },
    })


    await errorHandler(res);

    return res.json()
}

const toBase64 = (file: File | Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

export const fileFetcher = async (url: string, file: File) => {

    const base64 = await toBase64(file) as string;

    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        body: base64
    })

    await errorHandler(res);

    return await res.text();
}

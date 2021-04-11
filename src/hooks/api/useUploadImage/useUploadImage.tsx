import useSWR from "swr";
import { imageUploadFetcher } from "../../../utils/fetcher";
import { useEffect, useState } from "react";

interface ErrorResponseProps {
    status: number;
    message: string,
}

export const useUploadImage = (file: File | undefined) => {
    const args = file ? ['http://localhost:8000/api/file', file] : null;

    const [isLoading, setIsLoading] = useState(false);

    const {
        data,
        error,
    } = useSWR<string, ErrorResponseProps>(
        args,
        imageUploadFetcher,
        {
            // will send another request if focus on page
            revalidateOnFocus: false,
            // we user blocks computer and opens again
            revalidateOnReconnect: false,
            revalidateOnMount: true,
            refreshInterval: 0,
            errorRetryInterval: 0,
            dedupingInterval: 0,
            refreshWhenHidden: false,
            refreshWhenOffline: false,
            shouldRetryOnError: false,
            errorRetryCount: 0,
            onErrorRetry: () => {
                console.log("RETRY")
            },
        }
    );

    useEffect(() => {
        if (file && !data && !error) {
            setIsLoading(true);
        } else {
            setIsLoading(false);
        }
    }, [file, data, error])

    return {
        data,
        error,
        isLoading
    }
}

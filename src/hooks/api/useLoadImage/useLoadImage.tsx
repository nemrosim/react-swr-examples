import useSWR from "swr";
import { imageLoadFetcher, imageUploadFetcher } from "../../../utils/fetcher";

interface ErrorResponseProps {
    status: number;
    message: string,
}

export const useLoadImage = () => {
    const {
        data,
        error,
    } = useSWR<string, ErrorResponseProps>('http://localhost:8000/api/file', imageLoadFetcher);

    const isLoading = !data && !error

    return {
        data,
        error,
        isLoading
    }
}

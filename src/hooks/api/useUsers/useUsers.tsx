import useSWR from "swr";
import { fetcher } from "../../../utils/fetcher";
import { useAuthorizationContext } from "../../../context/auth/AuthorizationContextProvider";

interface UsersProps {
    id: number
    avatar: string;
    firstName: string;
    lastName: string;
    email: string;
}

interface ResponseProps {
    data: Array<UsersProps>
}

interface ErrorResponseProps {
    status: number;
    message: string,
}

export const useUsers = () => {

    const {token} = useAuthorizationContext();

    const args = token ? ['http://localhost:8000/api/users', "GET", token] : null;

    const {
        data,
        error,
    } = useSWR<ResponseProps, ErrorResponseProps>(
        args,
        fetcher,
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

    const isLoading = !data && !error;

    return {
        data,
        error,
        isLoading
    }


}

import React from 'react';
import { useLoadImage } from "../../hooks/api";

export const LoadImage: React.FC = () => {

    const {data, error, isLoading} = useLoadImage();

    if (error) {
        return (
            <>
                <div className="alert alert-danger" role="alert">
                    Oops! Something went wrong
                </div>
                <div className="alert alert-danger" role="alert">
                    Message: {error.message}
                </div>
            </>
        )
    }

    return (
        <div className="container m-3">
            {
                isLoading && (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )
            }
            {
                data && (
                    <img src={data} className="img-fluid" alt="..."/>

                )
            }
        </div>
    )
}

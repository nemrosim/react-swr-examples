import React, { useState } from 'react';
import { useImage } from "../../hooks";

export const Image: React.FC = () => {

    const [selectedFile, setSelectedFile] = useState<File>();


    const {data, error, isLoading} = useImage(selectedFile as any);

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = (event.target.files as FileList)[0];
        setSelectedFile(file)
    };

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
            <div className="m-3">
                <input className="form-control" type="file" onChange={changeHandler}/>
            </div>
            {
                data && (
                    <img src={data} className="img-fluid" alt="..."/>

                )
            }
            {
                isLoading && (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

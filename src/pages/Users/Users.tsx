import React from 'react';
import { useUsers } from "../../hooks";
import { useAuthorizationContext } from "../../context/auth/AuthorizationContextProvider";

export const Users: React.FC = () => {
    const {data, error} = useUsers();
    const {isAuthorized} = useAuthorizationContext();

    if (!isAuthorized) {
        return (
            <div className="alert alert-warning" role="alert">
                Please login
            </div>
        )
    }

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

    if (!data) {
        return (
            <div className="position-static">
                <div className="position-absolute top-50 start-50 translate-middle">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Avatar</th>
                    <th scope="col">FirstName</th>
                    <th scope="col">LastName</th>
                    <th scope="col">Email</th>
                </tr>
                </thead>
                <tbody>
                {data?.data?.map((e) => {
                    return (

                        <tr key={e.id}>
                            <th scope="row">{e.id}</th>
                            <td>
                                <img src={e.avatar} style={{
                                    width: '30px',
                                    height: '30px',
                                    borderRadius: '100px',
                                    objectFit: 'cover',
                                }} alt='Avatar image'/>
                            </td>
                            <td>{e.firstName}</td>
                            <td>{e.lastName}</td>
                            <td>{e.email}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                        <a className="page-link" href="#" aria-disabled="true">Previous</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </>

    );
}

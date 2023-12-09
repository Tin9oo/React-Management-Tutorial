import React from "react";

function CustomerDelete(props) {

    const deleteCustomer = (id) => {
        console.log(props);
        const url = '/api/customers/' + id;
        fetch(url, {
            method: 'DELETE'
        })
            .then(() => {
                props.stateRefresh();
            })
            .catch(err => console.log(err));
    };

    return (
        <button onClick={() => {deleteCustomer(props.id)}}>삭제</button>
    )
}

export default CustomerDelete;
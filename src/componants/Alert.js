import React from 'react'

export default function Alert(props) {
    return (
        props.alert &&<div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.type}</strong>:{props.alert.msg}
            {/* <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button> */}
        </div>

    )
}

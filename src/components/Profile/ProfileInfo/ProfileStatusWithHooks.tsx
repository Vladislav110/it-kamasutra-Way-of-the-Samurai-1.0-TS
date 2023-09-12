import React, {ChangeEvent, useEffect, useState} from 'react';


type StatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: StatusPropsType) => {

    useEffect(() => {
        if (status) {
            setStatus(props.status)
        }
    }, [props.status])

    const [status, setStatus] = useState(props.status);
    const [editMode, setEditMode] = useState(false)


    const activateMode = () => {
        setEditMode(true)
    }

    const deactivateMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        setStatus(event.currentTarget.value)
    }
    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateMode}>{props.status || "Enter Status"}</span>
                </div>}
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateMode}
                           value={status}/>
                </div>
            }
        </div>
    )
}



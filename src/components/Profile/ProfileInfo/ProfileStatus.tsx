import React, {ChangeEvent} from 'react';
import s from "./ProfileInfo.module.css";


type StatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}


class ProfileStatus extends React.Component<StatusPropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: event.currentTarget.value})
    }

    componentDidUpdate(prevProps: Readonly<StatusPropsType>, prevState: Readonly<{}>) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateMode}>{this.props.status || "Enter Status"}</span>
                    </div>}
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateMode}
                               value={this.state.status}/>
                    </div>
                }
            </div>
        );
    }

};

export default ProfileStatus;
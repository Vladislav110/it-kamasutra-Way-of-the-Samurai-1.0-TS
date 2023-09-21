import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input, Textarea} from ".././../common/FormsControls/FormsControls";
import {Contact} from "./RrofileInfo";


export type FormType = {
    profile: any
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
}


export const ProfileDataForm: React.FC<InjectedFormProps<FormType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <button>save</button>
        </div>
        <div>
            <b>Full name</b>: <Field placeholder={"Full name"} name={"fullName"} component={Input} validate={[]}/>
        </div>
        <div>
            <b>Looking for a job</b>: <Field type={"checkbox"} placeholder={""} name={"lookingForAJob"}
                                             component={Input} validate={[]}/>
        </div>
        <div>
            <b>My professionals skills</b>: <Field placeholder={"Enter professional skills"}
                                                   name={"lookingForAJobDescription"} component={Textarea}
                                                   validate={[]}/>
        </div>

        <div><b>About me</b>: <Field type={"textarea"} placeholder={"About me"} name={"aboutMe"}
                                     component={Textarea} validate={[]}/>

        </div>

        {/*<div><b>Contacts</b>:{props.initialValues.profile.contacts && Object.keys(props.initialValues.profile.contacts).map((key) => {*/}
        {/*    return <Contact key={key} contactTitle={key} contactValue={props.initialValues.profile.contacts[key]}/>*/}
        {/*})}</div>*/}
    </form>
}


 const ProfileDataFormReduxForm = reduxForm<FormType>({form: "edit-profile"})(ProfileDataForm)

export default ProfileDataFormReduxForm


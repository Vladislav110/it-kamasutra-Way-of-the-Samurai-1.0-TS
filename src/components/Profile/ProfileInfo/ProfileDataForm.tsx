import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input, Textarea} from ".././../common/FormsControls/FormsControls";
import s from "./ProfileInfo.module.css"
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux_store";
import style from "../../../components/common/FormsControls/FormsControls.module.css";
import {ContactsPropsType} from "../../../redux/profile_reducer";


export type FormData = {
    fullName: string;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    aboutMe: string;
    contacts: ContactsPropsType
}


export const ProfileDataForm: React.FC<InjectedFormProps<FormData>> = ({handleSubmit, error}) => {
    const contacts = useSelector((state: AppStateType) => state.profilePage.profile.contacts);

    return <form onSubmit={handleSubmit}>
        <div>
            <button>save</button>
        </div>
        {error && <div className={style.formSummaryError}>{error}</div>}

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

        <div><b>Contacts</b>:{contacts && Object.keys(contacts).map((key) => {
            return <div key={key} className={s.contact}>
                <b> {key}: <Field placeholder={key} name={"contacts." + key}
                                  component={Input} validate={[]}/></b>
            </div>

        })}</div>
    </form>
}


const ProfileDataFormReduxForm = reduxForm<FormData>({form: "edit-profile"})(ProfileDataForm)

export default ProfileDataFormReduxForm


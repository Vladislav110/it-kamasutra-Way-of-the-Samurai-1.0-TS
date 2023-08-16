import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {login} from "../../redux/auth_reducer";
import {useAppDispatch, useAppSelector} from "../../redux/redux_store";
import {Redirect} from "react-router-dom";



export type FormDataType = {
    login: string,
    password: string,
    rememberMe: boolean
}


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"email"} name={"email"} component={Input} validate={[required]}/>
                </div>
                <div>
                    <Field type={"password"} placeholder={"Password"} name={"password"} component={Input}
                           validate={[required]}/>
                </div>
                <div>
                    <Field type={"checkbox"} name={"rememberMe"} component={Input}/>remember me
                </div>
                <div>
                    <button>Log in</button>
                </div>
            </form>
        </>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({form: "login"})(LoginForm)

export const Login = () => {


    const dispatch = useAppDispatch()
    const isLoggedIn = useAppSelector((state) => state.auth.isAuth)


    const onSubmit = (formData: FormDataType) => {
        dispatch(login(formData))
    }

    if (isLoggedIn) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};




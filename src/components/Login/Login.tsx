import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {login} from "../../redux/auth_reducer";
import {useAppDispatch, useAppSelector} from "../../redux/redux_store";
import {Redirect} from "react-router-dom";
import style from "./../common/FormsControls/FormsControls.module.css"



export type FormDataType = {
    login: string,
    password: string,
    rememberMe: boolean,
    captchaURL:string
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    const captchaURL = useAppSelector ((state)=> state.auth.captcha)
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
                {captchaURL && <img src={captchaURL}/>}
                <div>
                    <Field  placeholder={"Symbols from image"} name={"captcha"} component={Input}
                           validate={[required]}/>
                </div>
                { props.error && <div className={style.formSummaryError}>{props.error}</div>}
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
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
};




import React, { useState } from 'react'

export default function Login() {
    const [form, setForm] = useState({ username: "", password: "" });
    // const [formValid, setValid] = useState(false);
    const [invalidMsg, setMsg] = useState("");



    const onChangeHandler = (e) => {
        let name = e.target.name
        let val = e.target.value
        if (name == "password") {
            var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/;
            if (regularExpression.test(val)) {
                // setValid(true)
                setMsg("")
            } else {
                // setValid(false)
                setMsg("Password Invalid")
            }
            setForm({ ...form, [name]: val })
        } else {
            setForm({ ...form, [name]: val })
        }
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        alert("Form Submit")
        setForm({ username: "", password: "" })
    }

    return (
        <>
            <h2>Manish</h2>
            <form onSubmit={onSubmitHandler} >
                <div className="row">
                    {(invalidMsg != "") ? <h3 className='error'>{invalidMsg}</h3> : <></>}
                    <div className="vl">
                        <span className="vl-innertext">or</span>
                    </div>
                    <div className="col">
                        <input type="text" value={form.username} onChange={onChangeHandler} name="username" placeholder="Username" />
                        <input type="password" value={form.password} onChange={onChangeHandler} name="password" placeholder="Password" />
                        <input type="submit" value="Login" />
                    </div>

                </div>
            </form>

        </>
    )
}

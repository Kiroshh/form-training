import React, {useState} from 'react';
import './App.css';
import Test from "./Test";

function CustomInput(props) {
    let [value, setValue] = useState("");
    let {type, isRealTimeUpdateShown, onInputChange} = props;
    return (
        <>
            <label>{props.label}</label>
            <input
                type={type}
                onChange={e => {
                    setValue(e.target.value);
                    if (onInputChange) {
                        onInputChange(e.target.value);
                    }
                }}
            />
            {isRealTimeUpdateShown ? <p>{value}</p> : null}
        </>
    );
}

function FuncApp(props) {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    return (
        <div className='App'>
            Function Component
            <header className="App-header">
                <CustomInput
                    onInputChange={value => {
                        setUsername(value);
                    }}
                    label="Type in your user name"
                    type="text"
                    isRealTimeUpdateShown={true}
                />
                <CustomInput
                    onInputChange={value => {
                        setPassword(value);
                    }}
                    label={"Password for " + username}
                    type="password"
                    isRealTimeUpdateShown={false}
                />
            </header>
            <button onClick={() => {
                console.log("username: "+username, "passwod: "+ password);
            }}>CLICK ME
            </button>

        </div>
    );
}

function EnactorForm() {
    return (
        <div>
            <FuncApp/>
        </div>
    )
}
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <EnactorForm/>
            </header>
        </div>
    );
}

export default App;

import { useRef, useState } from "react";

const FormPage = () => {
  // uncotrolled compinent/input
  const inputRef = useRef<HTMLInputElement>(null);
  const inputEmailRef = useRef<HTMLInputElement>(null);

  //controlled component/input
  const [fullNameInput, setFullNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const [usernameErrorMassage, setUsernameErrorMassage] = useState("");
  const [passwordErrorMassage, setPasswordErrorMassage] = useState("");

  const handleSubmit = () => {
    // const fullNameFormValue = inputRef.current?.value;
    // const emailFormValue = inputEmailRef.current?.value;

    // alert("From Submitted: " + fullNameFormValue + " " + emailFormValue);

    const fullNameValidation = fullNameInput.length < 3;
    const passwordValidation = passwordInput.length < 8;

    if (fullNameValidation) {
      setUsernameErrorMassage("Username minimal 3 karakter");
    }

    if (passwordValidation) {
      setPasswordErrorMassage("Username minimal 8 karakter");
    }

    //...
  };

  return (
    <div>
      <h1>Form Page</h1>

      <h3>Fullname : {fullNameInput}</h3>
      <h3>Email : {passwordInput}</h3>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          maxWidth: "300px",
        }}
      >
        <label htmlFor="full-name">Username</label>
        <input
          onChange={(event) => {
            setFullNameInput(event.target.value);

            const fullNameValidation = event.target.value.length < 3;

            if (fullNameValidation) {
              setUsernameErrorMassage("Username minimal 3 karakter");
            } else {
              setUsernameErrorMassage("");
            }
          }}
          id="full-name"
          type="text"
          value={fullNameInput}
        />
        <span style={{ color: "red" }}>{usernameErrorMassage}</span>

        <label htmlFor="password">Password</label>
        <input
          onChange={(event) => setPasswordInput(event.target.value)}
          id="password"
          type="password"
          value={passwordInput}
        />
        <span style={{ color: "red" }}>{passwordErrorMassage}</span>

        {/* <input ref={inputEmailRef} id="email" type="text" /> */}

        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default FormPage;

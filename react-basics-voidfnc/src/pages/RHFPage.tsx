import { useForm } from "react-hook-form";

const RHFPage = () => {
    const form = useForm();

    const handleRegisterUser = () => {
        alert("form submitted");
    }

  return (
    <div>
      <h1>React Hook Form</h1>

      <form
      onSubmit={form.handleSubmit(handleRegisterUser)}
        action=""
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px"
        }}
      >
        <label>
          Username:
          <input type="text" {...form.register("username")} />
        </label>

        <label>
          Password:
          <input type="password" {...form.register("password")} />
        </label>

        <button style={{width: "fit-content"}}>Register User</button>
      </form>
    </div>
  );
};

export default RHFPage;

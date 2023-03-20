import { useState } from "react";

export default function Forms() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState("");
  const [emailErrors, setEmailErrors] = useState("");
  const handleUsernameChange = (
    event: React.SyntheticEvent<HTMLInputElement>
  ) => {
    const {
      currentTarget: { value },
    } = event;
    setUsername(value);
  };
  const handleEmailChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setEmailErrors("");
    setEmail(value);
  };
  const handlePasswordChange = (
    event: React.SyntheticEvent<HTMLInputElement>
  ) => {
    const {
      currentTarget: { value },
    } = event;
    setPassword(value);
  };
  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username === "" || email === "" || password === "") {
      setFormErrors("All fiels are required");
    }
    if (!email.includes("@")) {
      setEmail("email is required");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={username}
        onChange={handleUsernameChange}
        type="text"
        placeholder="Username"
        required
        minLength={5}
      />
      <input
        value={email}
        onChange={handleEmailChange}
        type="email"
        placeholder="Email"
      />
      {emailErrors}
      <input
        value={password}
        onChange={handlePasswordChange}
        type="password"
        placeholder="Password"
      />
      <input type="submit" value="제출" />
    </form>
  );
}

<script>
  let user_info = {
    full_name: null,
    work_email: null,
    company: null,
    password: null,
  }

  function on_error(validation_array) {

  }

  function post(obj, url_to_post, on_error) {

  }
</script>

<form on:submit|preventDefault={() => post(user_info)}>
  <h2>Create account!</h2>
  <input type="text" placeholder="Full name" bind:value={user_info.full_name} />
  <input type="email" placeholder="Work email" bind:value={user_info.work_email}/>
  <input type="text" placeholder="Company" bind:value={user_info.company}/>
  <h3>Create password:</h3>
  <input type="password" placeholder="Password" bind:value={user_info.password}/>
  <input type="password" placeholder="Repeat password"  bind:value={user_info.repeat_password} />
  <button type="submit">Next</button>
  <input type="checkbox" id="remember-user" />
  <label for="remember-user">Remember me</label>
  <a href="#forgot-password">Forgot password</a>
</form>

<style>
  form {
    width: 100%;
    max-width: 400px;
    padding: 3.3em 2.5em 1.2em;
    margin: 0 auto;
  }

  h2 {
    margin-bottom: 1.2em;
    font-size: 1.8rem;
  }

  input:not([type="checkbox"]),
  button {
    margin-bottom: 1.1em;
    width: 100%;
    height: 45px;
    font-size: 1rem;
  }
  
  input {
    padding: 0 1.4em 0.4em;
    background-color: #EDEDED;
  }

  input:nth-child(4) {
    margin-bottom: 2.3em;
  }

  input:nth-child(7) {
    margin-bottom: 4.7em;
  }

  input:hover {
    background-color: #E6E6E6;
  }

  button {
    margin-bottom: 2.2em;
    background-color: #000000;
    color: #ffffff;
  }

  button:hover {
    box-shadow: 0 1px 4px 0 rgba(0,0,0, 0.6);
  }

  h3 {
    margin-bottom: 0.9em;
    font-size: 1.1rem;
    font-weight: normal;
  }

  label {
    position: relative;
    top: 0;
    left: 2%;
    text-transform: capitalize;
    font-size: 1rem;
  }

  input[type="checkbox"] {
    display: none;
  }

  label::after {
    position: absolute;
    top: calc(50% - 6px);
    left: -18%;
    width: 12px;
    height: 12px;
    background-color:  #e6e6e6;
    font-size: 0.8rem;
    border: 1px solid #808080;
    border-radius: 25%;
    content: "";
  }

  input[type=checkbox]:checked + label::after {
    content: "\2713";
  }

  label + a {
    margin-left: 25%;
  }
</style>

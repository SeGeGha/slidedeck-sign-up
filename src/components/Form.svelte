<script>
  import formInputInfo from '../configs/formInput';
  import requestToServer from '../utils/requestToServer';
  import signUpForm from '../models/signUp';
  import {INVALID_VALUE} from '../constants/className';

  let [contactInfo, passwordInfo] = Object.values(formInputInfo);
  let errorsMessage = [];

  const onError = (validationArray) => {
    validationArray.forEach((error) => { 
      const propId = contactInfo.concat(passwordInfo).findIndex((input) => input.name === error.property);
      
      if (propId < contactInfo.length) {
        contactInfo[propId].className = INVALID_VALUE;
      } else {
        passwordInfo[propId - contactInfo.length].className = INVALID_VALUE;
      }

      errorsMessage.push(error.constraints.length);
    });

    errorsMessage = errorsMessage;
  };

  const post = (obj, urlToPost, onError) => {
    const jsonData = JSON.stringify(obj);

    requestToServer(jsonData, urlToPost)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          onError(data);
        } else {
          document.location.search = '';
          document.location.hash = '';
          document.location.pathname='/home';
        }
      })
      .catch(() => {
        errorsMessage = errorsMessage.concat(['Server request error']);
      });
  };

  const onSubmit = () => {
    const formInfo = {};
    const deleteInvalidClass = (input) => {
      input.className = '';

      return input;
    };

    errorsMessage.length = 0;
    contactInfo = contactInfo.map(deleteInvalidClass);
    passwordInfo = passwordInfo.map(deleteInvalidClass);
  
    document.querySelectorAll('input[required]').forEach(({ name, value }) => {
      formInfo[name] = value;
    });

    signUpForm.setFieldInfo(formInfo);
    post(signUpForm.fieldsInfo, 'https://test-url.com', onError);
  };
</script>

<form on:submit|preventDefault={onSubmit} autocomplete="off">
  <h2>Create account!</h2>
  <div class="errors">
    {#each errorsMessage as message (message)}
      <p>{message}</p>
    {/each}
  </div>
  {#each contactInfo as { name, type, className } (name)}
    <input class={className} {type} placeholder={name} {name} required/>
  {/each}
  <h3>Create password:</h3>
  {#each passwordInfo as { name, type, className } (name)}
    <input class={className} {type} placeholder={name} {name} required/>
  {/each}
  <button type="submit">Next</button>
  <div class="helpers">
    <input type="checkbox" id="remember-user" />
    <label for="remember-user">Remember me</label>
    <a href="#forgot-password">Forgot password</a>
  </div>
</form>

<style>
  form {
    width: 100%;
    max-width: 400px;
    padding: 3.3em 2.5em 1.2em;
    margin: 0 auto;
  }

  .errors {
    margin: 1em auto;
    max-width: 400px;
    background: rgba(255, 0, 0, 0.4);
    font-weight: 600;
    text-align: justify;
  }

  .errors p{
    padding: 0.5em;
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

  input:nth-child(5) {
    margin-bottom: 2.3em;
  }

  input:nth-child(8) {
    margin-bottom: 4.7em;
  }

  .input--invalid {
    border: 1px solid red;
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

  .helpers {
    display: flex;
    justify-content: space-between;
  }
</style>

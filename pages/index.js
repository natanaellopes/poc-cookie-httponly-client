import { parseCookies } from 'nookies'

const HomePage = () => {
  const onAuth = async () => {
    try {

      const response = await fetch(`http://localhost:3333/token`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      const data = await response.json();

      console.log('POST /token', data);

      } catch(e) {
      console.error(e)
    }
  };

  const onCookiesPrint = async () => {
    console.log('parseCookies', parseCookies())
  }

  const onCookiesVerify = async () => {
    try {
      const response = await fetch('http://localhost:3333/cookies', {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      const data = await response.json();

      console.log('GET /cookies', data);

      } catch(e) {
      console.error(e)
    }
  }

  return (
    <div>
      <h1>POC - Cookie HttpOnly</h1>
      <button type="button" onClick={onAuth}>Autenticar-se</button>
      <button type="button" onClick={onCookiesVerify}>Verificar cookies (api)</button>
      <button type="button" onClick={onCookiesPrint}>Imprimir cookies (local)</button>

      <iframe src="http://127.0.0.1:8080/"></iframe>

    </div>
  )
}

export default HomePage;
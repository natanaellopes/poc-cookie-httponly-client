import { parseCookies } from 'nookies'

const HomePage = () => {

  const onAuth = async () => {
    await onFetch('/token', 'POST');
  };

  const onCookiesPrint = async () => {
    console.log('parseCookies', parseCookies())
  }

  const onCookiesVerify = async () => {
    await onFetch('/cookies', 'GET', 'include');
  }

  const onFetch = async (url, method = 'GET', include = 'none') => {
    try {
      const response = await fetch(`http://localhost:3333${url}`, {
        method: method,
        include,
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      const data = await response.json();

      console.log(method, url, data);
  
      return data;
    } catch(e) {
      console.error(e)
    }
    
  }

  return (
    <div>
      <h1>POC - Cookie HttpOnly</h1>
      <button type="button" onClick={onAuth}>Autenticar-se</button>
      <button type="button" onClick={onCookiesVerify}>Verificar cookies</button>
      <button type="button" onClick={onCookiesPrint}>Imprimir cookies</button>
    </div>
  )
}

export default HomePage;
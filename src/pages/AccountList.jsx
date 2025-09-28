import React, { useState, useEffect } from 'react';

function AccountList() {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {

    fetch('https://localhost:7200/api/Account')
      .then(response => {
        if (!response.ok) {
          throw new Error('Nätverksfel: ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setAccounts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Laddar konton...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="account-list">
      <header id="title">
        <h2>Kontolista</h2>
      </header>

      <section className="artiklar">
        {accounts.length > 0 ? (
          accounts.map(account => (
            <article key={account.id} className="konto">
              <h3>ID: {account.id}</h3>
              <p>Användarnamn: {account.userName}</p>
              <p>Roll: {account.role ? account.role.roleName : 'N/A'}</p>
            </article>
          ))
        ) : (
          <p>Inga konton hittades.</p>
        )}
      </section>
    </div>
  );
}

export default AccountList;

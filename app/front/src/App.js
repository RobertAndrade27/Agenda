import React, { useEffect, useState } from 'react';
import './styles.css';
import api from './services/api';

export default function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    api.get('/people').then(
      resp => {
        setUser(resp.data.results);
      },
      error => console.log('Deu não meu bom ')
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        Nome Salão:
        {user.map((us, i) => {
          return (
            <table>
              <td><h1>{us.name}</h1></td>
              <td>
                <h1 
                style={{ color: `${us.eye_color}`, 
                fontSize: '12px' 
                }}>
                  {us.birth_year}
                </h1>
              </td>
            </table>
          );
        })}
      </header>
    </div>
  );
}
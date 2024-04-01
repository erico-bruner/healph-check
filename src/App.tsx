import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function App() {
  const [status, setStatus] = useState('Offline');


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://dd-vivo.ddns.net:3002/healph');
        if (response.status === 200) {
          setStatus('Online');
        } else {
          setStatus('Offline');
        }
      } catch (error) {
        setStatus('Offline');
      }
    };

    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <PageContainer>
      <Text>Api-request - Mac Mini 2</Text>
      <RoundBox>
        {status === "Online" ? (<Online>{status}</Online>) : (<Offline>{status}</Offline>)}
      </RoundBox>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  background-color: #222;
  height: 100vh; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RoundBox = styled.div`
  width: 70%;
  height: 10%;
  background-color: #333;
  border-radius: 20px; 
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); /* Sombra */
  display: flex;
  justify-content: center;
  align-items: center; 

  @media (min-width: 768px) {
    width: 20%;
    height: 15%;
  }
`;

const Online = styled.p`
  color: #00cc00; 
  font-size: 300%;
  font-weight: 500;
`;

const Offline = styled.p`
  color: #ff3f3f; 
  font-size: 300%;
  font-weight: 500;
`;

const Text = styled.p`
  color: #bebebe; 
  font-size: 150%;
  font-weight: 400;
  margin-bottom: 2vh;

  @media (min-width: 768px) {
    font-size: 150%;
  }
`;
import React from "react";
import axios from "axios";

const API = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character"
});

export default class App extends React.Component {
  state = {
    info: []
  };
  pegarPersonagens = async () => {
    const resposta = await API.get();
    console.log(resposta);

    const itensApi = resposta.data.results.map((item) => {
      return {
        ...item
      };
    });

    this.setState({
      info: itensApi
    });
  };

  componentDidMount() {
    this.pegarPersonagens();
  }

  render() {
    return (
      <>
        <h1>API RICKY AND MORTY</h1>
        {this.state.info.map((item) => (
          <>
            <h2>{item.name}</h2>
            <img src={item.image} alt="" />
            <p>{item.species}</p>
          </>
        ))}
      </>
    );
  }
}

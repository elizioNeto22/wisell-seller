import React, { useState, useEffect, useCallback } from "react";

let logoutTimer;

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  email: "",
  clienteId: 0,
  clienteNome: "",
  clienteUltimaComra: "",
  clienteMetaVenda: 0,
  fornecedorId: 0,
  fornecedorNome: "",
  pedido: null,
  login: (token, email, date) => {},
  logout: () => {},
  setCustomer: (id, nome, ultima_compra, meta_venda) => {},
  setFornecedor: (id, nome) => {},
  setPedido: (pedido) => {},
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remainingDuration = adjExpirationTime - currentTime;

  return remainingDuration;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedEmail = localStorage.getItem("email");
  const storedExpirationDate = localStorage.getItem("expirationTime");

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 3600) {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("expirationTime");
    return null;
  }

  return {
    token: storedToken,
    email: storedEmail,
    duration: remainingTime,
  };
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();

  let initialToken;
  let initialEmail;
  let initialClienteId;
  let initialClienteNome;
  let initialClienteUltimaCompra;
  let initialClienteMetaVenda;
  let initialFornecedorId;
  let initialFornecedorNome;
  let initialPedido;

  if (tokenData) {
    initialToken = tokenData.token;
    initialEmail = tokenData.email;
  }

  const [token, setToken] = useState(initialToken);
  const [email, setEmail] = useState(initialEmail);
  const [clienteId, setClienteId] = useState(initialClienteId);
  const [clienteNome, setClienteNome] = useState(initialClienteNome);
  const [clienteUltimaCompra, setClienteUltimaCompra] = useState(
    initialClienteUltimaCompra
  );
  const [clienteMetaVenda, setClienteMetaVenda] = useState(
    initialClienteMetaVenda
  );
  const [fornecedorId, setFornecedorId] = useState(initialFornecedorId);
  const [fornecedorNome, setFornecedorNome] = useState(initialFornecedorNome);

  const [pedido, setPedido] = useState(initialPedido);

  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("expirationTime");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token, email, expirationTime) => {
    setToken(token);
    setEmail(email);
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    localStorage.setItem("expirationTime", expirationTime);

    const remainingTime = calculateRemainingTime(expirationTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  const customerHandler = (id, nome, ultima_compra, meta_venda) => {
    setClienteId(id);
    setClienteNome(nome);
    setClienteUltimaCompra(ultima_compra);
    setClienteMetaVenda(meta_venda);
  };

  const fornecedorHandler = (id, nome) => {
    setFornecedorId(id);
    setFornecedorNome(nome);
  };

  const pedidoHandler = (pedido) => {
    console.log("Pedido no Ctx - ", pedido);
    setPedido(pedido);
  };

  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    email: email,
    clienteId: clienteId,
    clienteNome: clienteNome,
    clienteUltimaCompra: clienteUltimaCompra,
    clienteMetaVenda: clienteMetaVenda,
    fornecedorId: fornecedorId,
    fornecedorNome: fornecedorNome,
    pedido: pedido,
    login: loginHandler,
    logout: logoutHandler,
    setCustomer: customerHandler,
    setFornecedor: fornecedorHandler,
    setPedido: pedidoHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

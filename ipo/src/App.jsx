import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* Barra de navegação superior em bootstap 4 */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">IPO</Link>
          <div className="navbar-nav">
            <Link className="nav-link" to="/clientes">Clientes</Link>
            <Link className="nav-link" to="/veiculos">Veículos</Link>
            <Link className="nav-link" to="/inspeções">Inspeções</Link>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/clientes" element={<ClientesList />} />
          <Route path="/veiculos" element={<VeiculosList />} />
          <Route path="/inspeções" element={<InspeçõesList />} />
        </Routes>
      </div>
    </div>
  );
}
// Estas páginas serão criadas nas próximas etapas
function Inicio() {
  return (
    <div className="jumbotron text-center">
      <h1 className="text-center">Centro de inspeção de automóveis</h1>
      <p className="text-center">IPO-ESDS1</p>
    </div>
  );
}
function ClientesList() {
  return (
    <div>
      <h2>Página de Clientes</h2>
      <button className="btn btn-primary">
        <i className="fas fa-plus"></i> 
        novo cliente
      </button>
      <h2>Lista de Clientes</h2>
    </div>
  );
}
function VeiculosList() {
  return (<h2>Página de Veículos</h2>);
}
function InspeçõesList() {
  return (<h2>Página de Inspeções</h2>);
}
export default App
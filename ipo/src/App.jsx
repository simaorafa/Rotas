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
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
        <div>
          <h2 className="mb-1">Clientes</h2>
          <p className="text-muted mb-0">Página estática de clientes com botões de ação.</p>
        </div>
        <div className="mt-3 mt-md-0">
          <button type="button" className="btn btn-primary mr-2 mb-2">
            <i className="fa fa-plus mr-1" /> Novo cliente
          </button>
          <button type="button" className="btn btn-secondary mr-2 mb-2">
            <i className="fa fa-pencil mr-1" /> Editar
          </button>
          <button type="button" className="btn btn-danger mb-2">
            <i className="fa fa-trash mr-1" /> Eliminar
          </button>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Lista de clientes</h5>
        </div>
        <div className="table-responsive">
          <table className="table table-striped mb-0">
            <thead className="thead-dark">
              <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>NIF</th>
                <th>Opções</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>001</td>
                <td>Simao Rafael</td>
                <td>123456789</td>
                <td>
                  <button classname ="btn btn-dark"><i className="fa fa-trash"> </i></button>
                  <button classname ="btn btn-dark m1-2"><i class="fa fa-eye"></i></button>
                  <button classname ="btn btn-dark m1-2"><i className="fa fa-pencil"> </i></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
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
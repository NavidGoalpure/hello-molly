import { IOrganizationStructure } from './interfaces/employee';
import { QueryKeys } from './interfaces/query';
import Home from './pages/home';
import { useQuery } from 'react-query';
import { fetchOrganizationData } from './queries/fetchOrganizationData';

function App() {
  return <Home />;
}

export default App;

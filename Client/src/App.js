import './App.scss';
import { Routes, Route} from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import JoinUs from './routes/join-us/join-us.component';
import AuthorForm from './routes/author-form/author-form.component';

const App = () => 
  <Routes>
    <Route path='/' element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path='joinUs' element={<JoinUs />} />
      <Route path='authorForm' element={<AuthorForm />} />
    </Route>
  </Routes>

export default App;

import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LoadingIndicator from './LoadingIndicator'
const Home = React.lazy(() => import('./components/MainPages/Home'))
const SearchBody = React.lazy(() => import('./components/SearchPages/SearchBody'))
const CategoryBody = React.lazy(()=> import('./components/CategoriesPages/CategoryBody'))
function App() {
  
  return (
    <Router>
      <Suspense fallback={<LoadingIndicator/>}>
      <div className="App">
          <Switch>
            <Route exact path='/category/:id' component={CategoryBody}/>
            <Route exact path='/search' component={SearchBody} />
            <Route exact path='/' component={Home}/>
          </Switch>
     
       </div>
    </Suspense>
    </Router>
    
  );
}

export default App;

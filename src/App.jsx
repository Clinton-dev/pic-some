import {Switch, Route} from 'react-router-dom'

import Header from './components/Header'
import Cart from './pages/Cart'
import Photos from './pages/Photos'


function App() {

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Photos />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
      </Switch>
    </div>
  )
}

// Add routing to cart and photos page

export default App

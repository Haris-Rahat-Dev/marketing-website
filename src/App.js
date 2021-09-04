import React from 'react';
import {Hero, Text, Features, ContactButton, Footer, FeaturePage1, FeaturePage2, FeaturePage3, SignUpForm} from './components/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
    return(
       <Router>
           <Switch>
               <Route exact path="/">
                   <>
                       <Hero/>
                       <Text/>
                       <Features/>
                       <ContactButton/>
                   </>
               </Route>
               <Route exact path="/feature1">
                   <FeaturePage1/>
               </Route>
               <Route exact path="/feature2">
                   <FeaturePage2/>
               </Route>
               <Route exact path="/feature3">
                   <FeaturePage3/>
               </Route>
               <Route exact path="/form">
                   <SignUpForm/>
               </Route>
           </Switch>
           <Footer/>
       </Router>
    );
};

export default App;
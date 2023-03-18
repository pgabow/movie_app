import React from 'react'

import { Route, Switch, Redirect } from 'react-router-dom'

import Header from 'components/Header'
import Footer from 'components/Footer'
import ScrollUp from 'components/ScrollUp'

import MainPage, {routeMain as routeMainPage} from 'pages/MainPage'
import Contacts, { routeMain as routeContacts } from 'pages/Contacts'
import CategoryList, { routeMain as routeCategoryPage} from 'pages/CategoryList'
import ShowDetail, {routeMain as routeShowDetail} from 'pages/ShowDetail'
import SearchShowName, {routeMain as routeSearchShowName} from 'pages/SearchShowName'
// import routeWayUp from 'pages/MainPage'

import './style.scss'
import "assets/fonts/fonts.css"

const AppContent = () => {

   return (
      <div className="main__wrapp">
         <Header />
         <main>
            <Switch>
               <Route exact path={routeMainPage()} component={MainPage} />
               <Route exact path={routeCategoryPage()} component={CategoryList} />
               <Route exact path={routeContacts()} component={Contacts} />
               <Route exact path={routeShowDetail()} component={ShowDetail} />
               <Route exact path={routeSearchShowName()} component={SearchShowName} />
               <Redirect to={routeMainPage()} />
            </Switch>
         </main>
         <Footer />
			<ScrollUp />
      </div>
   )
}

export default AppContent

import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Cart from './pages/Cart'
import Dealer from './pages/Dealer'
import Details from './pages/Details'
import Accessories from './pages/Accessories'
import AddOns from './pages/AddOns'
import ExclusiveBenefits from './pages/exclusive-benefits/ExclusiveBenefits'
import PreApproved from './pages/preapproved/PreApproved'
import InsuranceQuote from './pages/insurance/InsuranceQuote'
import Merchandise from './pages/Merchandise'
import GoToMyBookingPage from './pages/GoToMyBookingPage'
import MoreDetailPages from './pages/MoreDetailPages'

function App() {
  return (
    <>
      <Routes>
        <Route path='/my-booking/listings' element={<GoToMyBookingPage />}></Route>
        <Route path='/own-online/finance/application/details/accessories' element={<Accessories />}></Route>
        <Route path='/own-online/finance/application/details/merchandise' element={<Merchandise />}></Route>
        <Route path='/own-online/finance/application/details/addons' element={<AddOns />}></Route>
        <Route path='/own-online/finance/application/details/exclusive-benefits' element={<ExclusiveBenefits />}></Route>
        <Route path='/own-online/finance/application/detail/expanded' element={<MoreDetailPages />}></Route>
        <Route path='/own-online/finance/pre-approved' element={<PreApproved />}></Route>
        <Route path='/own-online/finance/product-list' element={<InsuranceQuote />}></Route>
        <Route path='/scorpio-N/add-to-cart' element={<Cart />}></Route>
        <Route path='/scorpio-N/dealer' element={<Dealer />}></Route>
        <Route path='/scorpio-N/details-verification' element={<Details />}></Route>
        <Route exact path='/' element={<Home />}></Route>
      </Routes>
    </>
  )
}

export default App

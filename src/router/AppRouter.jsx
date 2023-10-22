import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { StatisticApp } from '../one-dimensional';

import { DiscreteHome } from '../discrete/DiscreteHome';
import { BinomialDistribution } from '../discrete/binomial-distibution';
import { BernoulliDistribution } from '../discrete/bernoulli-distribution/BernoulliDistribution';

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={ <StatisticApp /> } />

        <Route path='/discrete' element={ <DiscreteHome /> } />
        <Route path='/discrete/binomial-distribution' element={ <BinomialDistribution /> } />
        <Route path='/discrete/bernoulli-distribution' element={ <BernoulliDistribution /> } />

        <Route path='*' element={ <Navigate to={'/'} /> }  />
    </Routes>
  )
}

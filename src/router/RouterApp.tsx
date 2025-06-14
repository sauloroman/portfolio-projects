import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { PortfolioPage, ProjectPage, Projects } from '../pages'

export const RouterApp: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PortfolioPage />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/project/:id' element={<ProjectPage />} />
        <Route path='/*' element={<Navigate to={'/'} />} />
      </Routes>
    </BrowserRouter>
  )
}

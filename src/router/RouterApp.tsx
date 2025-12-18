import React, { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { PortfolioPage, ProjectPage, Projects } from '../pages'
import { useProjects, useUI } from '../hooks';

export const RouterApp: React.FC = () => {

  const { isDarkMode } = useUI()
  const { onGetProjects } = useProjects();

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      isDarkMode ? 'dark' : 'light'
    )
  }, [isDarkMode])
  
  useEffect(() => {
    onGetProjects()
  }, [])
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

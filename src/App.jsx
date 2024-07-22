import  { Suspense, lazy } from 'react';
import { Routes, Route, } from 'react-router-dom'
import css from './App.module.css'

export default function App() {

  const HomePage = lazy(()=> import("./pages/HomePage/HomePage"))
  const MoviesPages = lazy(()=> import("./pages/MoviesPage/MoviesPage"))
  const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage/MovieDetailsPage"))
  const MovieCast = lazy(()=> import("./components/MovieCast/MovieCast"))
  const MovieReviews = lazy(()=> import("./components/MovieReviews/MovieReviews"))
  const NotFoundPage = lazy(()=> import("./pages/NotFoundPage/NotFoundPage"))

return (
 <main className={css.container}>
  <Suspense fallback={<div>Loading...</div>}>
  <Routes>
  <Route path="/" element={<HomePage />}></Route>
  <Route path="/movies" element={<MoviesPages/>}></Route>
  <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
    <Route path="cast" element={<MovieCast />}></Route>
    <Route path="reviews" element={<MovieReviews />}></Route>
  </Route>
  <Route path="*" element={<NotFoundPage />} />
</Routes>
</Suspense>
</main>
)
}



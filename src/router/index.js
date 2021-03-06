import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import MoviesIndex from '@/components/MoviesIndex'
import MovieIndex from '@/components/MovieIndex'
import Movies from '@/components/Movies'
import Movie from '@/components/Movie'
import Seats from '@/components/Seats'
// import Order from '@/components/Order'
import BuyTic from '@/components/buyTic'
import FilmTime from '@/components/filmTime'
import Customer from '@/components/customer'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Hello
    }, {
      path: '/movies',
      component: MoviesIndex,
      children: [
        {
          path: '',
          name: 'Movies',
          component: Movies
        }, {
          path: ':id',
          component: MovieIndex,
          children: [
            {
              path: '',
              component: Movie
            }
          ]
        }
      ]
    }, {
      path: '/buyTic',
      component: BuyTic,
      children: [
        {
          path: '',
          name: 'FilmTime',
          component: FilmTime
        }, {
          path: 'seats',
          component: Seats,
          name: 'Seats'
        }, {
          path: 'customer',
          component: Customer,
          name: 'Customer'
        }
      ]
    }, {
      path: '/search',
      component: Search,
      name: 'Search'
    }
  ],
  mode: 'history',
  base: '/CSIETeamwork/'
})

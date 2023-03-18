import React, { useEffect } from 'react'

import routeMain from './routes'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { loadCategory } from 'store/category/actions'
import { selectCategory } from 'store/category/selectors'

import ShowList from 'components/ShowList'
import './style.scss'

const CategoryList = () => {
  const dispatch = useDispatch()
  const showCategory = useSelector(selectCategory)

  useEffect(() => {
    dispatch(loadCategory())
  }, [dispatch])

  return (
    <section className='main__page'>
      <ShowList list={showCategory} />
    </section>
  )
}

export { routeMain }
export default CategoryList

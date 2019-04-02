import React from 'react'
import { connect } from 'react-redux'
import cx from 'classnames'
import { setFilter } from '../redux/actions'

import { VISIBILITY_FILTERS } from '../constants'


const VisibilityFilters = ({ activeFilter, setFilter }) => {
  return (
    <div className="visibility-filters">
      {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const currentFilter = VISIBILITY_FILTERS[filterKey]
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className={cx('filter', currentFilter === activeFilter && 'filter--active')}
            onClick={() => {
              setFilter(currentFilter)
            }}
          >
            {currentFilter}
          </span>
        )
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return { activeFilter: state.visibilityFilter } // reducers/visibilityFilter.js 返回的 state
}

// connect 将 action 作为 props 绑定在组件上
export default connect(
  mapStateToProps,
  { setFilter }
)(VisibilityFilters)

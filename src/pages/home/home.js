import React, { useState } from 'react'
import Table from '../../components/Table/Table'
import './Home.scss'
import Layout from '../../containers/Layout'

function Home () {
    const [filter, setFilter] = useState('last 30 days')
    const [sort, setSort] = useState('last-submissions')
    return(
        <Layout>
            <div className='film-submissions'>
                <p className='film-submissions-title'>Film Submissions</p>
                <div className='film-submissions-row'>
                    <div className='film-submissions-filters'>
                        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                            <option value='last 30 days'>Last 30 Days</option>
                            <option value='last 1 week'>Last 1 Week</option>
                            <option value='last 1 year'>Last 1 Year</option>
                        </select>
                        <button>Modify Filters</button>
                    </div>
                    <div className='film-submissions-sort'>
                        <label>Sort by:</label>
                        <select value={sort} onChange={(e) => setSort(e.target.value)}>
                            <option value='last-submissions'>Last submissions</option>
                        </select>
                    </div>

                </div>
                <Table />
            </div>
        </Layout>
    )
}

export default Home

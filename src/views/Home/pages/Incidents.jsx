import React, { useState, useEffect, } from 'react'
import Table from 'rc-table'
import moment from 'moment'
import axios from 'axios'

const columns = [
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Details',
    dataIndex: 'details',
    key: 'details',
    render: (value, row) => {
      const truncate = value.substring(0, 75) + '...'

      return (
        <p className="mt-0 mb-0">
          {value.length < 75 ? value : truncate}
        </p>
      )
    }
  },
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
    render: (value) => {
      return moment(value).format('MMM DD, YYYY HH:mm').toString()
    }
  },
]

function Incidents(props) {
  const [incidents, setIncidents] = useState([])

  useEffect(() => {
    axios.get('http://sagipinas.herokuapp.com/incidents')
      .then(response => {
        setIncidents(response.data)
      })
  }, [])

  return (
    <div className="content">
      <h1 className="m-l-25">
        Incidents
      </h1>
      <div className="card-row m-l-25 m-r-25">
        <div className="card-stat">
          <h3 className="card-stat-title">
            Approved
          </h3>
          <h1 className="card-stat-value approved">
            0
          </h1>
        </div>
        <div className="card-stat">
          <h3 className="card-stat-title">
            Pending
          </h3>
          <h1 className="card-stat-value pending">
            0
          </h1>
        </div>
        <div className="card-stat">
          <h3 className="card-stat-title">
            Rejected
          </h3>
          <h1 className="card-stat-value rejected">
            0
          </h1>
        </div>
        <div className="card-stat">
          <h3 className="card-stat-title">
            Total
          </h3>
          <h1 className="card-stat-value">
            0
          </h1>
        </div>
      </div>

      <div className="inbox m-l-25 m-r-25 m-t-25 m-b-25">
        <div className="inbox-list">
          <Table
            data={incidents}
            columns={columns}
            className="inbox-list-table"
          />
        </div>
        <div className="inbox-view">

        </div>
      </div>
    </div>
  )
}

export default Incidents
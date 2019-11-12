import React, { useEffect, } from 'react'
import moment from 'moment'
import axios from 'axios'


function Incidents(props) {

  useEffect(() => {

  }, [])

  return (
    <div className="settings-page">
      <h1><i className="fa fa-list"></i> Incidents</h1>
      <div className="divider"></div>
      <p className="sub-title">Summary of all reported incidents are here</p>



      <input type="text" className="search-bar" placeholder="Search list" />

      <div className="table-delta">

        <table>

          <tbody>
            <tr>
              <td data-label="Category">Visa - 3412</td>
              <td data-label="Details">04/01/2016</td>
              <td data-label="Date Reported">$1,190</td>
              <td data-label="Action">03/01/2016 - 03/31/2016</td>
            </tr>

          </tbody>
        </table>

        <br />


        <table>
          <thead>
            <tr>
              <th scope="col">Category</th>
              <th scope="col">Details</th>
              <th scope="col">Date Reported</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Category">Visa - 3412</td>
              <td data-label="Details">04/01/2016</td>
              <td data-label="Date Reported">$1,190</td>
              <td data-label="Status">Unverified</td>
              <td data-label="Action">
                <button className="reject-btn">Reject</button>
              </td>
            </tr>

          </tbody>
        </table>

      </div>

    </div>
  )
}

export default Incidents
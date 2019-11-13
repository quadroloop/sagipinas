import React, { useEffect } from 'react'
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
              <td data-label="Total" className="text-total"><i className="fa fa-circle"></i> Total (8)</td>
              <td data-label="Pending" className="text-pending"><i className="fa fa-circle"></i> Pending (4)</td>
              <td data-label="Verified" className="text-verified"><i className="fa fa-circle"></i> Verified (2)</td>
              <td data-label="Rejected" className="text-rejected"><i className="fa fa-circle"></i> Rejected (1)</td>
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
              <th scope="col">Time Reported</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Category">Earthquake</td>
              <td data-label="Details">tulong po, na trap po kami sa builiding namin dito, strata 2000</td>
              <td data-label="Date Reported">11/10/2019</td>
              <td data-label="Time Reported">1:20 PM</td>
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
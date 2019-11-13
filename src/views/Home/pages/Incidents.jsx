import React, { useEffect } from 'react'

import moment from 'moment'
import axios from 'axios'
import swal from 'sweetalert2'



function Incidents(props) {

  function el(element) {
    return document.getElementById(element);
  }

  function searchIncidents() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search1");
    filter = input.value.toUpperCase();
    table = document.getElementById("incident-table");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      td = tr[i].innerText.replace(/(\r\n|\n|\r)/gm, "").replace(/\s+/g, '').toUpperCase();
      if (td) {
        txtValue = td;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  const renderTable = () => {
    axios.get('https://sagipinas.herokuapp.com/incidents')
      .then(res => {
        let tp = 0, tv = 0, tr = 0, statusClass = "";
        if (document.contains(document.getElementById('incidentList'))) {
          el('incidentList').innerHTML = '';
          res.data.reverse().forEach(report => {
            switch (report.status) {
              case 'verified':
                tv++;
                statusClass = 'text-verified';
                break;
              case 'unverified':
                tp++;
                statusClass = 'text-pending';
                break;
              case 'rejected':
                tr++;
                statusClass = 'text-rejected';
                break;
              default:

            }
            el('incidentList').innerHTML += `
          <tr class="animated fadeIn">
          <td data-label="Category"><span class="category">${report.type === 'others' ? 'accident' : report.type}<span></td>
          <td data-label="Details">${report.details}</td>
          <td data-label="Date Reported">${moment(report.timestamp).format('MM/DD/YYYY')}</td>
          <td data-label="Time Reported">${moment(report.timestamp).format('hh:mm:ss')}</td>
          <td data-label="Status" class="${statusClass}">${report.status === 'unverified' ? 'pending' : report.status}</td>
          <td data-label="Action">
             ${report.status !== 'verified' ?
                `
             <button class="reject-btn" ${report.status === 'rejected' ? "" : `onclick="rejectReport('${report.uid}')"`}>
               ${report.status === 'rejected' ? 'REJECTED' : 'Reject'}
             </button>
             `
                :
                `
                <button class="no-action">Verified</button>
             `
              }
          </td>
        </tr>

          `
          });
          el('ti').innerHTML = res.data.length;
          el('tp').innerHTML = tp;
          el('tv').innerHTML = tv;
          el('tr').innerHTML = tr;
        }
      })

  }

  const rejectReport = () => {
    swal.fire({
      title: "Are you sure?",
      text: "You are rejecting a report. this action cannot be undone.",
      icon: "warning",
    })
      .then(res => {
        if (res.value) {
          axios.get(`https://sagipinas.herokuapp.com/rejectIncident?uid=${localStorage.uid}`)
            .then(res => {
              swal.fire("Done", "Report has been rejected.", "success");
              renderTable()
            })
        }
      })
  }



  useEffect(() => {
    renderTable();
  })

  return (
    <div className="settings-page incidents-page">
      <h1><i className="fa fa-list"></i> Incidents</h1>
      <div className="divider"></div>
      <p className="sub-title">Summary of all reported incidents are here</p>

      <button onClick={() => { rejectReport() }} id="reject-report"></button>

      <input type="text" id="search1" className="search-bar" placeholder="Search list" onKeyUp={() => {
        searchIncidents()
      }} />

      <div className="table-delta">

        <table>
          <tbody>
            <tr>
              <td data-label="Total" className="text-total"><i className="fa fa-circle"></i> Total (<span id="ti">0</span>)</td>
              <td data-label="Pending" className="text-pending"><i className="fa fa-circle"></i> Pending (<span id="tp">0</span>)</td>
              <td data-label="Verified" className="text-verified"><i className="fa fa-circle"></i> Verified (<span id="tv">0</span>)</td>
              <td data-label="Rejected" className="text-rejected"><i className="fa fa-circle"></i> Rejected (<span id="tr">0</span>)</td>
            </tr>
          </tbody>
        </table>
        <br />
        <table id="incident-table">
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
          <tbody id="incidentList">
          </tbody>
        </table>

      </div>

    </div>
  )
}

export default Incidents
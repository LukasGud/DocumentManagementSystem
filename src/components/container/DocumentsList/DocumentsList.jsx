import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import filterFactory from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "./documentsList.css";

class DocumentsList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const bgStyle = {
      backgroundColor: "#519e8a"
    };
    const { SearchBar } = Search;
    const columns = [
      {
        dataField: "id",
        text: "Doc. Nr.",
        sort: true,
        headerStyle: bgStyle
      },
      {
        dataField: "name",
        text: "Vardas",
        sort: true,
        headerStyle: bgStyle
      },
      {
        dataField: "surname",
        text: "Pavardė",
        sort: true,
        headerStyle: bgStyle
      },
      {
        dataField: "type",
        text: "Šablonas",
        sort: true,
        headerStyle: bgStyle
      },
      {
        dataField: "status",
        text: "Statusas",
        sort: true,
        headerStyle: bgStyle
      },
      {
        dataField: "date",
        text: "Data",
        sort: true,
        headerStyle: bgStyle
      }
    ];
    const documents = [
      {
        id: 123,
        name: "Ana",
        surname: "Taurienė",
        type: "Atostogos",
        status: "Pateiktas",
        date: "2018-09-06"
      },
      {
        id: 191,
        name: "Daliene",
        surname: "Daliene",
        type: "Komandiruote",
        status: "Sukurtas",
        date: "2019-01-06"
      },
      {
        id: 161,
        name: "Marius",
        surname: "Karininkas",
        type: "šaukimas",
        status: "Atmestas",
        date: "2019-03-04"
      },
      {
        id: 761,
        name: "Vardeliokas",
        surname: "Pavardziokas",
        type: "Liga",
        status: "Atmestas",
        date: "2017-09-06"
      },
      {
        id: 91,
        name: "Kotletas",
        surname: "Kijevas",
        type: "Komandiruote",
        status: "Patvirtintas",
        date: "2018-12-09"
      },
      {
        id: 171,
        name: "Helio",
        surname: "Dasviduli",
        type: "Atostogos",
        status: "Pateiktas",
        date: "2018-11-25"
      },
      {
        id: 133,
        name: "Jurgis",
        surname: "Antanela",
        type: "Komandiruote",
        status: "Atmestas",
        date: "2017-04-07"
      },
      {
        id: 871,
        name: "Gedvilas",
        surname: "Grazulaitis",
        type: "Atostogos",
        status: "pateiktas",
        date: "2018-10-06"
      },
      {
        id: 124,
        name: "Tadas",
        surname: "Vailokas",
        type: "Atostogos",
        status: "Atmestas",
        date: "2018-11-23"
      },
      {
        id: 176,
        name: "Pumpurelis",
        surname: "Pumpurelis",
        type: "Komandiruote",
        status: "Atmestas",
        date: "2019-01-22"
      },
      {
        id: 189,
        name: "Angele",
        surname: "Nailoniene",
        type: "Atostogos",
        status: "Sukurtas",
        date: "2018-05-06"
      },
      {
        id: 7446,
        name: "Pim",
        surname: "Piririm",
        type: "Atostogos",
        status: "Sukurtas",
        date: "2016-05-06"
      },
      {
        id: 199,
        name: "Liutauras",
        surname: "Pal",
        type: "Liga",
        status: "Pateiktas",
        date: "2019-05-06"
      },
      {
        id: 109,
        name: "Jonas",
        surname: "Vadelionis",
        type: "Atostogos",
        status: "Atmestas",
        date: "2017-05-06"
      }
    ];
    const selectRow = {
      mode: "checkbox",
      clickToSelect: true,
      bgColor: "#edeeeebe"
    };

    return (
      <div className="listContainer">
        <div className="listBox">
          <ToolkitProvider
            keyField="id"
            data={documents}
            columns={columns}
            search
          >
            {props => (
              <div>
                <button className="btn btn-dark" style={{ marginRight: "5px" }}>
                  Peržiūrėti
                </button>
                <button className="btn btn-dark" style={{ marginRight: "5px" }}>
                  Pateikti
                </button>
                <button className="btn btn-danger">Pašalinti</button>
                <SearchBar
                  {...props.searchProps}
                  style={{ width: "40%", marginBottom: "10px", float: "right" }}
                />
                <BootstrapTable
                  {...props.baseProps}
                  filter={filterFactory()}
                  selectRow={selectRow}
                  pagination={paginationFactory()}
                />
              </div>
            )}
          </ToolkitProvider>
        </div>
      </div>
    );
  }
}

export default DocumentsList;

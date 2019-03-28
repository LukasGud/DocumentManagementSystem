import React, { Component } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import filterFactory from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "./adminMembers.css";


class AdminMembers extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            members: []
         }
    }

    componentDidMount = async () => {
    const token = localStorage.getItem("token");
    try {
    const response = await fetch(`http://localhost:8080/api/users/`, {
    method: "GET",
    headers: {
        Authorization: "Bearer" + token,
        "content-type": "application/json"
    }
    });
    const data = await response.json();
    this.setState({ members: data });
    } catch (error) {
    console.error(error);
    }
    console.log(this.state.members);
    }

    render() { 
    const bgStyle = {
        backgroundColor: "#519e8a"
    };

    const columns = [{
        dataField: 'id',
        text: 'Vartotojo ID',
        headerStyle: { backgroundColor: "#519e8a", width: "130px" }
    }, {
        dataField: 'name',
        text: 'Vartotojas',
        headerStyle: bgStyle
    }, {
        dataField: 'username',
        text: 'Vartotojo prisijungimo vardas',
        headerStyle: bgStyle
    }];
        
    const expandRow = {
    renderer: row => (
    <div>
        <p>{ `Vartotojo rolė yra: ${row.roles[0].name}` }</p>
        <p>{ `Vartotojas paskutinį kartą atliko pakeitimus: ${row.updatedAt}` }</p>
        <p>{ `Vartotojas užsiregistravimo sistemoje: ${row.createdAt}` }</p>
        <p>{ `Vartotojas priklauso šioms grupėms:` }</p>
    </div>
    ),
    showExpandColumn: true
    };

    const { SearchBar } = Search;

    return ( 
    <div className="listContainer">
        <div className="listBox">
            <ToolkitProvider
                keyField="id"
                data={this.state.members}
                columns={columns}
                search
                >
                {props => (
                <div>
                    <SearchBar
                    {...props.searchProps}
                    style={{ width: "40%", marginBottom: "10px", float: "right" }}
                    />
                    <BootstrapTable
                    {...props.baseProps}
                    filter={filterFactory()}
                    // selectRow={selectRow}
                    pagination={paginationFactory()}
                    expandRow={ expandRow }
                    />
                </div>
                )}
            </ToolkitProvider>
        </div>
    </div>
        );
    }
}
 
export default AdminMembers;
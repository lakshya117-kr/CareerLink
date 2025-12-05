import CareerlinkForm from "./form";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container"
import { useState } from "react";

export default function CareerlinkFormTable(){
    let [ userData , setData ] = useState([
        [1, "Aryan Kumar", "Student", "LIT2025016"],
        [2, "Virottam Dutt Raturi", "Student", "LIT2025017"],
        [3, "Divyansh Bhargav", "Student", "LIT2025023"],
        [4, "Lakshya Kumar", "Student", "LIT2025033"],
        [5, "Pratyush Sharma", "Student", "LCS2025038"],
        [6, "Akash", "Student", "LIT2025012"],
        [7, "Vishnu", "Student", "LIT2025037"],
        [8, "Pradeep Kumar", "Student", "LCS2025006"],
        [9, "Shreyam", "Student", "LIT2025020"],
        [10, "Atharva Chavan", "Student", "LIT2025014"]
    ]);
    let [ id , setId ] = useState(11);
    let updateTable = (name,proff,details) =>{
        setData([...userData, [id, name, proff, details]]);
        setId(id+1);
    }

    return(
        <>
            <CareerlinkForm addRowData={([name,proff,det])=>{updateTable(name,proff,det)}}/>
            <Container>
                <Table striped bordered hover style={{textAlign:"center", width:"67vw"}} className="m-4">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Profession</th>
                      <th>Details</th>
                      <th>Connect</th>
                    </tr>
                  </thead>
                  <tbody>
                            {userData.map((val) => {
                                return (
                                <tr>
                                    <th> {val[0]} </th>
                                    <td> {val[1]} </td>
                                    <td> {val[2]} </td>
                                    <td> {val[3]} </td>
                                    <td> <img src="https://i.postimg.cc/NFsMTYvC/connect.png" height={"25px"}/> </td>
                                </tr>
                                )
                            })}
                  </tbody>
                </Table>
            </Container>
        </>
    )
}

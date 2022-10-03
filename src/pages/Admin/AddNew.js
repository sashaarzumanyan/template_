import React from 'react'
import ProjectForm from './Forms/ProjectForm';

const AddNew = ({EditRowPorps}) => {
  console.log("create new data page ");
  return (
    // <div style={{ display: "flex", justifyContent: "flex-start" }}>
    //   <div style={{ width: "80%" }}>
    //   </div>
    // </div>
        <ProjectForm EditRowPorps={EditRowPorps} />
  )
}

export default AddNew
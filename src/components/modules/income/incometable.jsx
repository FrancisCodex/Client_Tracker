import React from 'react';
import BinIcon from "../../../assets/icons/binicon";
import EditIcon from "../../../assets/icons/editicon";

const Incometable = ({incomes, openEditIncomeModal, deleteData}) => {

    
  return (
    <div>
        <div className="container py-5 "> 
            <table className="table table-bordered table-hover">
            <thead className="thead-dark">
                <tr>
                <th scope="col">Title</th>
                <th scope="col">Amount</th>
                <th scope="col">Category</th>
                <th scope="col">actions</th>
                </tr>
            </thead>
            <tbody>
                {incomes.map((income, index) => (
                    <tr key={income.id}>
                    <td>{income.title}</td>
                    <td>{income.amount}</td>
                    <td>{income.category}</td>
                    <td className="d-flex flex-row">
                    <div onClick={() => openEditIncomeModal(income.income_id)}>
                    <EditIcon />
                    </div>
                    <div onClick={() => deleteData(income.income_id)}>
                    <BinIcon />
                    </div>
                    </td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
    </div>
  )
}

export default Incometable
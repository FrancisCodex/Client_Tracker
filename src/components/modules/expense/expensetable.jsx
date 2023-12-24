import React from 'react';
import BinIcon from "../../../assets/icons/binicon";
import EditIcon from "../../../assets/icons/editicon";

const Expensetable = ({expenses, openEditExpenseModal, deleteData}) => {
  return (
    <div>
        <div>
        <div className="container py-3 px-sm-0"> 
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
                {expenses.map((expenses) => (
                    <tr key={expenses.id}>
                    <td>{expenses.title}</td>
                    <td>{expenses.amount}</td>
                    <td>{expenses.category}</td>
                    <td className="d-flex flex-row">
                    <div onClick={() => openEditIncomeModal(expenses.expenses_id)}>
                    <EditIcon />
                    </div>
                    <div onClick={() => deleteData(expenses.expenses_id)}>
                    <BinIcon />
                    </div>
                    </td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
    </div>
    </div>
  )
}

export default Expensetable
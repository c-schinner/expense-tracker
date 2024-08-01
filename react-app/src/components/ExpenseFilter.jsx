const ExpenseFilter = ({ filterItem }) => {
    return (
        <div>
            <select name="" id="" className="form-select mb-3" onChange={(e) => filterItem(e.target.value)}>
                <option value=""></option>
                <option value="utilities">Utilities</option>
                <option value="entertainment">Entertainment</option>
                <option value="groceries">Groceries</option>
                <option value="home">Home</option>
                <option value="personal">Personal</option>
            </select>
        </div>
    )
}

export default ExpenseFilter
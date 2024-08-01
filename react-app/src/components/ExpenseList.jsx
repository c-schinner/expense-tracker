const ExpenseList = ({items, deleteItem}) => {
    return (

        <table className="min-w-full divide-y divide-gray-200 table table-hover">
            <thead className="bg-gray-50">
            <tr>

                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Description</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Amount</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Category</th>
                <th scope="col" className="px-6 py-3"></th>
            </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">

            {items.map((item, index) =>
                <tr key = {index}>
                    <td className="px-6 py-4 whitespace-nowrap font-bold text-xl">{item.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap font-bold text-xl">${item.amount}</td>
                    <td className="px-6 py-4 whitespace-nowrap font-bold text-xl">{item.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap font-bold text-xl">
                        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300"
                        onClick={()=> deleteItem(item.id)}>
                            Delete
                        </button>
                    </td>
                </tr>
            )}

            <tr>
                <td className="px-6 py-4 whitespace-nowrap font-bold text-xl"><h3>Total Amount:</h3></td>
                <td className="px-6 py-4 whitespace-nowrap font-bold text-xl"><h3>${ items.reduce((total, item) => total + parseFloat(item.amount), 0).toFixed(2) }</h3></td>
            </tr>

            </tbody>
        </table>

    )
}

export default ExpenseList;
import React, { useEffect, useState } from 'react'
import Formikk from '../../Components/Formikk';
import axios from 'axios'
const Add = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    const [property, setProperty] = useState(null)
    async function getData() {
        const res = await axios("http://localhost:5000/shells")
        setData(res.data);
    }
    async function deleteData(id) {
        const res = await axios.delete(`http://localhost:5000/shells/${id}`)
        getData()
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <Formikk getData={getData} />
            <div className="filter">
                <input type="search" placeholder='search' value={search} onChange={(e) => setSearch(e.target.value)} />
                <button className='btn' onClick={() => setProperty({ name: "name", asc: null })}>default</button>
                <button className='btn' onClick={() => setProperty({ name: "name", asc: true })}>a-z</button>
                <button className='btn' onClick={() => setProperty({ name: "name", asc: false })}>z-a</button>

            </div>
            <table>
                <thead>

                    <tr>
                        <th>Image</th>
                        <th>Name</th>

                        <th>Delete</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        data && data

                            .filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
                            .sort((a, b) => {
                                if (property && property.asc === true) {
                                    return (a[property.name] < b[property.name]) ? -1 : ((b[property.name] < a[property.name]) ? 1 : 0)
                                }
                                else if (property && property.asc === false) {
                                    return (a[property.name] > b[property.name]) ? -1 : ((b[property.name] > a[property.name]) ? 1 : 0)
                                }
                                else {
                                    return 0;
                                }
                            })





                            .map(x =>
                                <tr>
                                    <td><img src={x.image} alt="" /></td>
                                    <td>{x.name}</td>

                                    <td><button onClick={() => deleteData(x._id)}>Delete</button></td>
                                </tr>
                            )
                    }
                </tbody>
            </table>
        </>
    )
}

export default Add
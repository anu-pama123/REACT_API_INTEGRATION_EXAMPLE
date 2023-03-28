import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
    const [tableData, setTableData] = useState([]);

    useEffect(()=> {
        axios.get('http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json').then((response)=>{
            console.log(response.data.dataseries);
            setTableData(response.data.dataseries)
        })
    },[])
    console.log(tableData)

    return(
        <div>
            <table>
                <tbody>
                    {                                    
                        tableData.map((data,index) => {
                            return(
                                <tr key={index}>
                                <td>{data.timepoint}</td>
                                <td>{data.cloudcover}</td>
                                <td>{data.seeing}</td>
                                <td>{data.transparency}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Home;
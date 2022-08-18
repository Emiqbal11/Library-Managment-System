import { studentData } from "../../pages/Book/dummyData";
import { useNavigate } from "react-router-dom";
const StudentTable=()=>{
    const navigate=useNavigate();
    return(<>
    
    <h1>All Student here</h1>
    <table>
<tr>
    <th>name</th>
    <th>f.name</th>
    <th>s card no</th>
    <th>depart</th>
    <th>othter</th>
    <th></th>
    <th></th>
</tr>
{studentData.map((data, i) => (
            <tr>
              <td class="classtable">{data.bookName}</td>
              <td class="classtable">{data.regNo}</td>
              <td class="classtable">{data.address}</td>
              <td class="classtable">{data.author}</td>
              <td>
                <button onClick={()=>navigate('/edit-student',{state:data})}> Edit</button>
              </td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          ))}
    </table>
    </>)
}

export default StudentTable;
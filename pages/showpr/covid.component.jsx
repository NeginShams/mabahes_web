
import { useTable } from 'react-table';
import './covid.styles.scss';
import React , {useState , useEffect} from 'react';
export const Showpr = () =>  {
    const [prs, setPrs] = useState([]);

    useEffect(() => {
      getPrs();
    }, []);
  
    async function getPrs() {
      await  fetch('http://127.0.0.1:8000/api/user/see_recipe/', {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        
        headers: {
            'Authorization': `Bearer  ${localStorage.getItem('authToken')}`,
            "Content-type": "application/json; charset=UTF-8"
        },
        
    }
    
    )
    .then(response => response.json())
    .then(data =>
      setPrs(data)
    );
    }
    // const data = React.useMemo(

    //     () => [
   
    //       {
   
    //         col1: 'Hello',
   
    //         col2: 'World',
   
    //       },
   
    //       {
   
    //         col1: 'react-table',
   
    //         col2: 'rocks',
   
    //       },
   
    //       {
   
    //         col1: 'whatever',
   
    //         col2: 'you want',
   
    //       },
   
    //     ],
   
    //     []
   
    //   )
   
    
      const data = React.useMemo(() => prs, [])
      const columns = React.useMemo(
        () => [
          {
            Header: 'نام پزشک',
            accessor: 'name', // accessor is the "key" in the data
          },
          {
            Header: 'تجویزات',
            accessor: 'pr',
          },
   
        ],
   
        []
   
      )
    //  const columns = [
    // {
    //   title: 'شماره',
    //   dataIndex: 'id',
    //   key: 'id',
    // },
    // {
    //   title: 'نام پزشک',
    //   dataIndex: 'name',
    //   key: 'name',
    // },
    // {
    //     title: 'تجویزات',
    //     dataIndex: 'pr',
    //     key: 'pr',
    //   }
    // ]
    
    const {

        getTableProps,
   
        getTableBodyProps,
   
        headerGroups,
   
        rows,
   
        prepareRow,
   
      } = useTable({ columns, data })
    return(
    <div className='covidcontainer'>
        {/* <li> */}
        {prs.map((prs) => {
              return (
                  <div>
                    <li>نام پزشک</li>
                <p> {prs.doctor_firstname}{prs.doctor_lastname}</p>
                <h3 className='para'>:تجویزات</h3>
                <p> {prs.prescription_content}</p>
                 <hr />
                 </div>
              );
            })}
         {/* <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>

<thead>

  {headerGroups.map(headerGroup => (

    <tr {...headerGroup.getHeaderGroupProps()}>

      {headerGroup.headers.map(column => (

        <th

          {...column.getHeaderProps()}

          style={{

            borderBottom: 'solid 3px red',

            background: 'aliceblue',

            color: 'black',

            fontWeight: 'bold',

          }}

        >

          {column.render('Header')}

        </th>

      ))}

    </tr>

  ))}

</thead>

<tbody {...getTableBodyProps()}>

  {rows.map(row => {

    prepareRow(row)

    return (

      <tr {...row.getRowProps()}>

        {row.cells.map(cell => {

          return (

            <td

              {...cell.getCellProps()}

              style={{

                padding: '10px',

                border: 'solid 1px gray',

                background: 'papayawhip',

              }}

            >

              {cell.render('Cell')}

            </td>

          )

        })}

      </tr>

    )

  })}

</tbody>

</table> */}
{/* </li> */}
         {/* <li>نسخه 1</li>
        <h3 className='para'>:نام پزشک</h3>
        <p className='para'>مرضیه احمدی
        </p>
        <h3 className='para'>:تجویزات</h3>
        <p className='para'> قرص آستامینفن
        </p> */}
    </div>
    );
}
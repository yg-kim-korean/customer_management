import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Customer extends React.Component{
    render(){
        return(
            <TableRow>
                <TableCell>{this.props.id} </TableCell>
                <TableCell><img src={this.props.img} alt="profile" /> </TableCell>
                <TableCell>{this.props.NAME} </TableCell>
                <TableCell>{this.props.birthday} </TableCell>
                <TableCell>{this.props.gender} </TableCell>
                <TableCell>{this.props.job} </TableCell>
            </TableRow>

            // <div>
            //     {/* <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name}/>
            //     <CustomerInfo gender={this.props.gender} birthday={this.props.birthday} job={this.props.job} /> */}
            // </div>
        );
    }
}

// class CustomerProfile extends Component{
//     render(){
//         return(
//           <div>
//               <img src={this.props.image}  alt="profile"/>
//               <h2>{this.props.name}({this.props.id})</h2>
//           </div>  
//         );
//     }
// }

// class CustomerInfo extends Component{
//     render(){
//         return(
//             <div>
//                 <p>{this.props.gender}</p>
//                 <p>{this.props.birthday}</p>
//                 <p>{this.props.job}</p>
//             </div>
//         );
//     }
// }
export default Customer;
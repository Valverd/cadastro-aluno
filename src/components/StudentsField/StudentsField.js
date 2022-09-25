import Student from '../Student/Student';
import './StudentsField.css';

export default function StudentsField() {
    return (
        <div className="StudentsField">
           <table className='table-students'>
                <tr className='tr-title'>
                    <th>Nome</th>
                    <th>RG</th>
                    <th>Classe</th>
                </tr>
                
                <Student />
           </table>
        </div>
    )
}
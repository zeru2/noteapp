import DBconnect from '../../../utils/dbconnect';
import Note from '../../../models/Note';
import checkmethod from '../../../utils/checkmethod'
import DefserverStatus from '../../../utils/StatusCheck'

DBconnect();


export default async (req, res) => {
    const {
        query: { id },
        method
    } = req;
    
    try {
        const getmethod = checkmethod(true, req, res);
        if(getmethod){

        } else {
            
        }

    } catch(err) {
        DefserverStatus("Internal server error", 500, req, res)
    }


}
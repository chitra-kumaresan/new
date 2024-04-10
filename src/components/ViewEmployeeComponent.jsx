//it displays individual employee component using GetById API
import React, {
	useEffect,
	useState,
} from "react";
import { useParams,useNavigate } from "react-router-dom";
import { getEmployee } from "../services/EmployeeService";

const ViewEmployeeComponent = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [joinedDate, setJoinedDate] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const {empId}=useParams();
    const navigator=useNavigate();
  
	//it fetch data by getby id api
 useEffect(()=>{
        const fetchData=async()=>{
            try {
                await getEmployee(empId).then((response)=>{
                    const fetch=response.data;
                    setFirstName(fetch.firstName);
                    setLastName(fetch.lastName);
                    setJoinedDate(fetch.joinedDate);
                    setEmail(fetch.email);
                    setMobileNumber(fetch.mobileNumber);
        
                })
                
            } catch (error) {
                console.error(error);
                
            }
           }
           fetchData();
      },[empId])
    



  return (
    <section
			className="shadow"
			style={{ backgroundColor: "whitesmoke" }}>
			<div className="container py-5">
				<div className="row">
					<div className="col-lg-3">
						<div className="card mb-4">
							<div className="card-body text-center">
								<img
									src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
									alt="avatar"
									className="rounded-circle img-fluid"
									style={{ width: 150 }}
								/>
								<h5 className="my-3">
									{firstName}
								</h5>
								
							</div>
						</div>
					</div>
					<div className="col-lg-9">
						<div className="card mb-4">
							<div className="card-body">
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
                    First Name 
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
										{firstName}
										</p>
									</div>
								</div>

								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
                    Last Name
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{lastName}
										</p>
										
									</div>
								</div>
								<hr />
                                <div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
                    Joined Date
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{joinedDate}
										</p>
									</div>
								</div>
								<hr />
                                <div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
                    email id 
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{email}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
                    Contact
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{mobileNumber}
										</p>
									</div>
								</div>
								<hr />

								<button type="submit" className="btn btn-primary" onClick={()=>navigator("/list")}>Back</button>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};


export default ViewEmployeeComponent
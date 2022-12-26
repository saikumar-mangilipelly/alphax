import Card1 from './Card1'
import { FcApproval } from "react-icons/fc";
import Carousel from './Carousel'
import './Dashboard.css'
function Dashboard() {
    return (
        <div className='container dg'>
            <p className='mt-5'><i className='fs-2'><FcApproval/></i> Updated at May 4, 2022</p>
            <div className='row'>
                <div className='col-lg-7'>
                    <h1 className='fw-bold'>General dashBoard</h1>
                </div>
                <div className='col-lg-5 d-flex gap-2 mx-auto'>
                    <div class="dropdown mt-2">
                        <button class="btn border border-2 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            May 31,22 - June 29,22
                        </button>
                        <ul class="dropdown-menu p-3">
                            <p>Mar 21,22 - May 30,22</p>
                            <p>Mar 21,22 - May 30,22</p>
                            <p>Mar 21,22 - May 30,22</p>
                        </ul>
                    </div>
                    <button className='btn btn-dark' type="button">Download</button>
                    <button className='btn btn-dark' type="button">Share Board</button>
                </div>
            </div>
            <Card1/>
            <div className='card1 bg-dark mx-auto'>
                <h1 className='text-light fw-bold'>Learn more <br />about<i className='fw-lighter'> Commission <br />and Exposure</i></h1>
                <p className='text-light fw-light'>Subscribe to get exclusive deals, item recommendations,<br />and shopping inspirations right into your inbox</p>
                <button className='btn btn-outline-light mt-4'>Read more</button>
            </div>
            <Carousel/>
        </div>
    )
}

export default Dashboard

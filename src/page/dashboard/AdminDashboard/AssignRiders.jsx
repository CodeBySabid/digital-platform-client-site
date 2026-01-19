import { useQuery } from '@tanstack/react-query';
import React, { useRef, useState } from 'react';
import UseAxiosSecure from '../../../hooks/UseAxiosSecure';

const AssignRiders = () => {
    const [selectedParcel, setSelectedParcel] = useState(null)
    const axiosSecure = UseAxiosSecure();
    const riderModalRef = useRef();
    const formateDate = (dateString) => {
        return new Date(dateString).toISOString().split('T')[0]
    }
    const { data: parcels = [] } = useQuery({
        queryKey: ['parcels', 'pending-pickup'],
        queryFn: (async () => {
            const res = await axiosSecure.get(`/parcels?deliveryStatus=pending-pickup`)
            return res.data
        })
    })
    const { data: riders = [] } = useQuery({
        queryKey: ['riders', selectedParcel?.SenderDistrict, 'Available'],
        enabled: !!selectedParcel,
        queryFn: (async () => {
            const res = await axiosSecure.get(`/riders?status=Approved&district=${selectedParcel.SenderDistrict}&
            workStatus=Available`);
            return res.data
        })
    })

    const openAssignRiderModal = parcel => {
        setSelectedParcel(parcel);
        riderModalRef.current.showModal();
    }

    const handleAssignRider = (rider) => {
        const riderInfo = {
            riderId: rider._id,
            riderEmail: rider.email,
            riderName: rider.name,
            parcelId: selectedParcel?._id,
        }
        console.log(riderInfo)
        // axiosSecure.patch(`riders`, riderInfo)
    }
    return (
        <div>
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-green-500 font-semibold mt-2 text-center '>Assign Riders {parcels.length}</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Store</th>
                                <th>Sender Info</th>
                                <th>Receiver Info</th>
                                <th>Delivery Status</th>
                                <th>Amount</th>
                                <th>Payment</th>
                                <th>Create At</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                parcels.map((parcel, index) =>
                                    <tr key={parcel._id}>
                                        <th>{index + 1}</th>
                                        <td>{parcel.parcelName}</td>
                                        <td>{parcel.senderRegions} <br /> {parcel.SenderDistrict}</td>
                                        <td>{parcel.ReceiverRegions} <br /> {parcel.ReceiverDistrict}</td>
                                        <td>{parcel.deliveryStatus}</td>
                                        <td>{parcel.cost}</td>
                                        <td>{parcel.paymentStatus === 'paid' ? <span className='text-black font-semibold bg-[#5edb24] p-2 rounded'>Paid</span> :
                                            <button className='btn bg-[#CAEB66] text-black'>Pay</button>
                                        }</td>
                                        <td>{formateDate(parcel.createAt)}</td>
                                        <td>
                                            <button onClick={() => openAssignRiderModal(parcel)} className='btn bg-[#717bd6]'>Assign Rider</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog ref={riderModalRef} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Riders: {riders.length} !</h3>
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <div className="overflow-x-auto">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        riders.map((rider, index) =>
                                            <tr key={rider._id}>
                                                <th>{index + 1}</th>
                                                <td>{rider.name}</td>
                                                <td>{rider.email} </td>
                                                <td>
                                                    <button onClick={() => handleAssignRider(rider)} className='btn bg-[#717bd6]'>Assign Rider</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default AssignRiders;
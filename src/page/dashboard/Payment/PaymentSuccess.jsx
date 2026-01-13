import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const axiosSecure = UseAxiosSecure();
  const [paymentInfo, setPaymentInfo] = useState({});

  // console.log("FULL QUERY:", searchParams.toString());
  // console.log("SESSION ID:", sessionId);

  useEffect(() => {
    if (sessionId) {
      axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
        .then(res => {
          console.log("Payment saved:", res.data);
          setPaymentInfo({
            transactionId: res.data.transactionId,
            trackingId: res.data.trackingId
          })
        })
        .catch(error => console.log(error))
    }
  }, [sessionId, axiosSecure]);
  console.log(sessionId)

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-green-600">
          Payment Successful ✅
        </h1>
        <p>Your TransactionId: {paymentInfo?.transactionId}</p>
        <p>Your TrackingId: {paymentInfo?.trackingId}</p>
        <Link to={'/dashboard/paymenthistory'} className="btn bg-green-500 mt-2.5">Payment History</Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
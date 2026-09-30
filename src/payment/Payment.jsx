import { useLocation, Navigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import CryptoJS from "crypto-js";

const Payment = () => {

  const location = useLocation();
  console.log(location.state)
  const grandTotal = location.state?.grandTotal;
  const transaction_uuid=location.state?.transcation_id;
  const total_amount = Number(grandTotal);
  const product_code = "EPAYTEST";

  const message = `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=${product_code}`;

  const hash = CryptoJS.HmacSHA256(
    message,
    "8gBm/:&EnhH.1/q"
  );

  const signature = CryptoJS.enc.Base64.stringify(hash);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-md">
        <h2 className="mb-4 text-center text-2xl font-bold">
          eSewa Payment
        </h2>

        <p className="mb-6 text-center text-gray-600">
          Grand Total: Rs. {total_amount}
        </p>

        <form
          action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
          method="POST"
        >
          <input type="hidden" name="amount" value={total_amount} />
          <input type="hidden" name="tax_amount" value="0" />
          <input type="hidden" name="total_amount" value={total_amount} />
          <input
            type="hidden"
            name="transaction_uuid"
            value={transaction_uuid}
          />
          <input
            type="hidden"
            name="product_code"
            value={product_code}
          />
          <input
            type="hidden"
            name="product_service_charge"
            value="0"
          />
          <input
            type="hidden"
            name="product_delivery_charge"
            value="0"
          />
          <input
            type="hidden"
            name="success_url"
            value="http://localhost:5173/success"
          />
          <input
            type="hidden"
            name="failure_url"
            value="http://localhost:5173/faliure"
          />
          <input
            type="hidden"
            name="signed_field_names"
            value="total_amount,transaction_uuid,product_code"
          />
          <input type="hidden" name="signature" value={signature} />

          <button
            type="submit"
            className="w-full rounded-lg bg-green-600 py-3 font-semibold text-white hover:bg-green-700"
          >
            Pay with eSewa
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
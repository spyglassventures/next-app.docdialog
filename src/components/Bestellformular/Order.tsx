"use client";

import { useState, useEffect } from "react";

export default function OrderForm() {
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", message: "" });

  useEffect(() => {
    if (statusMessage.type === "success") {
      const timer = setTimeout(() => {
        window.location.href = "/";
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [statusMessage.type]);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    const data = {
      practiceName: event.target.practiceName.value,
      address: event.target.address.value,
      postalCodeCity: event.target.postalCodeCity.value,
      phone: event.target.phone.value,
      email: event.target.email.value,
      paymentMethod: event.target.paymentMethod.value,
      plan: event.target.plan.value, // Added plan field
      additionalInfo: event.target.additionalInfo.value,
    };

    try {
      const response = await fetch("/api/sendgrid_bestellen", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatusMessage({ type: "success", message: "Bestellung erfolgreich gesendet!" });
        event.target.reset();
      } else {
        throw new Error("Fehler beim Senden der Bestellung.");
      }
    } catch (error) {
      setStatusMessage({ type: "error", message: error.message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container mx-auto p-4">
      {statusMessage.message && (
        <div
          className={`mb-4 text-center py-3 rounded-sm ${statusMessage.type === "success" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
            }`}
        >
          {statusMessage.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-4 text-gray-700">Doc Dialog Bestellung</h2>

        {/* Radio Buttons for Plan Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 text-gray-600">Produkt wählen</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="plan" value="Webseite" required />  Webseite Arztpraxis für Fr. 129,- im Monat
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="plan" value="Praxis KI" defaultChecked /> Praxis KI Assistent für Fr. 398,- im Monat
            </label>
          </div>
        </div>

        {/* Form Fields */}
        {[
          { id: "practiceName", label: "Praxis / Name", placeholder: "Praxis / Name", type: "text" },
          { id: "address", label: "Adresse", placeholder: "Adresse", type: "text" },
          { id: "postalCodeCity", label: "PLZ / Ort", placeholder: "PLZ / Ort", type: "text" },
          { id: "phone", label: "Telefon", placeholder: "Telefon", type: "tel" },
          { id: "email", label: "E-Mail", placeholder: "E-Mail", type: "email" },
        ].map(({ id, label, placeholder, type }) => (
          <div className="mb-4" key={id}>
            <label htmlFor={id} className="block text-sm font-medium mb-2 text-gray-600">
              {label}
            </label>
            <input
              type={type}
              id={id}
              name={id}
              required
              placeholder={placeholder}
              className="w-full rounded-sm border border-gray-300 px-4 py-2 text-gray-800"
            />
          </div>
        ))}

        {/* Payment Method */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 text-gray-600">Zahlungsart</label>
          <div className="flex gap-4">
            {["Rechnung", "Kreditkarte", "Twint", "LSV"].map((method) => (
              <label key={method} className="flex items-center gap-2">
                <input type="radio" name="paymentMethod" value={method} required /> {method}
              </label>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mb-4">
          <label htmlFor="additionalInfo" className="block text-sm font-medium mb-2 text-gray-600">
            Zusätzliche Informationen
          </label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            placeholder="Zusätzliche Informationen"
            rows="3"
            className="w-full rounded-sm border border-gray-300 px-4 py-2 text-gray-800"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className="bg-amber-400 text-black font-bold px-6 py-2 rounded-sm hover:bg-yellow-500 disabled:opacity-50"
          >
            {loading ? "Senden..." : "Bestellung abschicken"}
          </button>
        </div>
      </form>
    </div>
  );
}

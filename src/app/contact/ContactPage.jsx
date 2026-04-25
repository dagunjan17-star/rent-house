"use client"

import { useState } from "react"
import Image from "next/image"
import toast from "react-hot-toast"

export default function Page() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)

  const website =
    typeof window !== "undefined"
      ? window.location.hostname.replace("www.", "")
      : ""

  const handleChange = (e) => {

    const { name, value } = e.target

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return
      if (value.length > 10) return
    }

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    if (formData.phone.length !== 10) {
      toast.error("Phone number must be 10 digits")
      return
    }

    setLoading(true)

    try {

      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          website,
          source: "Contact Page Rent House Form",
        }),
      })

      const result = await res.json()

      if (result.success) {
        toast.success("Your rent house inquiry has been submitted!")
        setFormData({ name: "", phone: "", message: "" })
      } else {
        toast.error("Something went wrong. Please try again.")
      }

    } catch (err) {
      toast.error("Server error. Please try later.")
    } finally {
      setLoading(false)
    }
  }

  return (

    <section className="bg-gradient-to-b from-white to-[#F3FAEC] py-10 px-4 sm:px-6">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}

        <div className="mb-16">

          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">

            Find Your{" "}
            <span className="text-[#78C841]">
              Perfect Rent House in Gurgaon
            </span>

          </h1>

          <p className="mt-6 text-gray-600 max-w-2xl">

            Looking for a rent house or flat in <b>Gurgaon</b>?  
            Our rental experts will help you discover the best homes based on
            your preferred location, budget, and lifestyle requirements.

          </p>

        </div>

        {/* FORM + IMAGE */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}

          <div className="relative h-[520px] rounded overflow-hidden border border-[#78C841]/20 shadow-xl">

            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
              alt="Rent House Consultation Gurgaon"
              fill
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

          </div>

          {/* FORM */}

          <div className="bg-white border border-[#78C841]/20 rounded p-6 shadow-xl hover:shadow-2xl transition duration-500">

            <h3 className="text-2xl font-semibold mb-2 text-[#78C841]">
              Register Rent House Requirement
            </h3>

            <p className="text-gray-500 mb-8 text-sm">
              Fill in your details and our Gurgaon rent house consultant will contact you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* NAME */}

              <div>
                <label className="text-sm text-gray-600">Full Name*</label>

                <input
                  name="name"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 w-full px-4 py-3 rounded bg-[#F3FAEC]
                  border border-[#78C841]/20 text-gray-900
                  focus:ring-2 focus:ring-[#78C841] outline-none transition"
                />
              </div>

              {/* PHONE */}

              <div>
                <label className="text-sm text-gray-600">Phone*</label>

                <input
                  name="phone"
                  required
                  inputMode="numeric"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2 w-full px-4 py-3 rounded bg-[#F3FAEC]
                  border border-[#78C841]/20 text-gray-900
                  focus:ring-2 focus:ring-[#78C841] outline-none transition"
                />
              </div>

              {/* MESSAGE */}

              <div>

                <label className="text-sm text-gray-600">Message</label>

                <textarea
                  rows={4}
                  name="message"
                  placeholder="Mention budget, BHK type, preferred sector in Gurgaon..."
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 w-full px-4 py-3 rounded bg-[#F3FAEC]
                  border border-[#78C841]/20 text-gray-900
                  focus:ring-2 focus:ring-[#78C841] outline-none resize-none transition"
                />

              </div>

              {/* BUTTON */}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded font-semibold
                bg-[#78C841] text-white
                hover:bg-[#5fae2e] transition shadow-md hover:shadow-lg"
              >
                {loading ? "Submitting..." : "Submit Rent House Inquiry"}
              </button>

            </form>

          </div>

        </div>

        {/* MAP */}

        <div className="mt-24 rounded overflow-hidden border border-[#78C841]/20 shadow-xl">

          <iframe
            title="Office Location Gurgaon"
            src="https://www.google.com/maps?q=Gurgaon,Haryana&z=13&output=embed"
            className="w-full h-[500px] border-0"
            loading="lazy"
          />

        </div>

      </div>

    </section>

  )
}
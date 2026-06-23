"use client";

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const PropertyContext = createContext();

const DEFAULT_DOMAIN = "www.houseforrentingurgaon.com";

export const PropertyProvider = ({ children }) => {

  const [dailyLimit,setDailyLimit]=useState(50);
  const [domain] = useState(DEFAULT_DOMAIN);

  /* ================= MAIN PROPERTIES ================= */

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
const [page2,setPage2]=useState(1);
  const limit=150;
  const [totalItems,setTotalItems]=useState(0)
  const getPropertiesByDomain = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get(
        `https://gurgaon-backend.onrender.com/api/listed-properties/getPropertiesByDomain/${domain}?page=${page2}&limit=${limit}`
      );

      setProperties(res.data?.data || []);
      setTotalItems(res.data?.total)
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  /* 🔥 FIX: always fetch when component mounts */
  useEffect(() => {
    getPropertiesByDomain();
  }, [page2]);

  /* ================= BHK FILTER ================= */
const [properties2, setProperties2] = useState([]);
  const [loading3, setLoading3] = useState(false);
  const [error3, setError3] = useState(null);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchPropertiesByType = async (type, pageNumber = 1) => {
    try {
      setLoading3(true);
      setError3(null);

      const res = await axios.get(
        `https://gurgaon-backend.onrender.com/api/listed-properties/properties`,
        {
          params: {
            listingType: "Sale",
            propertyType: type,
            subType: "House,Bedroom",
            city: "Gurgaon",
            page:pageNumber ,
            limit: 150,
          },
        }
      );

      setProperties2(res.data?.data || []);
      setTotalPages(res.data?.totalPages || 1);
      setPage(pageNumber);
    } catch (err) {
      setError3("Type filter failed");
    } finally {
      setLoading3(false);
    }
  };

  /* ================= LOCALITY FILTER ================= */

  const [data, setData] = useState(null);
  const [loading2, setLoading2] = useState(false);
  const [error2, setError2] = useState(null);
  const [locality, setLocality] = useState(null);

  const decodeSlugWithHyphen = (str) =>
    decodeURIComponent(str).trim().replace(/-/g, " ");

  const fetchPropertiesByLocality = async () => {
    if (!locality) return;

    try {
      setLoading2(true);
      setError2(null);

      const response = await axios.get(
        `https://gurgaon-backend.onrender.com/api/listed-properties/getPropertiesByDomainAndLocality/${domain}/${decodeSlugWithHyphen(locality)}`
      );

      setData(response?.data?.data || []);
    } catch (err) {
      setError2("Locality data fetch nahi ho paaya");
    } finally {
      setLoading2(false);
    }
  };

  useEffect(() => {
    fetchPropertiesByLocality();
  }, [locality]);

  /* ================= PROVIDER ================= */

  return (
    <PropertyContext.Provider
      value={{
        // main properties
        properties,
        loading,
        error,
        page2,setPage2,totalItems,itemsPerPage:limit,
        // BHK filter
        properties2,
        fetchPropertiesByType,
        loading3,
        error3,
        page,
        totalPages,
        setPage,
        // locality
        data,
        loading2,
        error2,
        locality,
        setLocality,
        dailyLimit,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

export const useProperty = () => {
  const context = useContext(PropertyContext);

  if (!context) {
    throw new Error("useProperty must be used within PropertyProvider");
  }

  return context;
};
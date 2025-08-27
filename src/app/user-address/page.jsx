"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import Navbar from "../components/navbar";
import Usertab from "../components/user-tab";
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import ScrollToTop from "../components/scroll-to-top";

// import {
//   FiUser,
//   FiUserCheck,
//   FiMail,
//   FiBookmark,
//   FiMessageCircle,
//   FiPhone,
//   FiGlobe,
//   FiKey,
// } from "../assets/icons/vander";
import AddressForm from "../components/addressForm";
import { useAddressActions } from "ecom-user-sdk/user";
import { useUserContext, useAddressContext } from "ecom-user-sdk/context";
import EditAddress from "../components/editAddress";
import useMessage from "../hook/messageHook";

export default function UserAddress() {
  const { addAddress, fetchAddress, deleteAddress } = useAddressActions();
  const { address, loading: loadingAddress } = useAddressContext();
  const [open, setOpen] = useState(false);
  const { closeMessage, openMessage } = useMessage();
  const {
    register,
    handleSubmit,
    onSubmit,
    reset,
    formState: { errors },
  } = addAddress();
  const { user, loading: loadingUser } = useUserContext();
  const [editAddressDetail, setEditAddressDetail] = useState(null);
  const handleAddress = async ({ data: address, extra }) => {
    openMessage("Adding address...", "loading");
    const { result, error } = await onSubmit({
      data: address,
      extra: extra,
    });
    if (result.success) {
      console.log("Address added successfully");
      closeMessage("Address added successfully!", "success");
      reset();
      
    } else {
      console.log("Failed to add address");
      closeMessage(error?.message || "Failed to add address", "error");
    }
    // console.log(result);
  };
  // console.log(address);
  const handleEdit = (addr) => {
    setEditAddressDetail(addr);
    setOpen(true);
  };
  const handleDeleteAddress = async (id) => {
    openMessage("Deleting address...", "loading");

    const { data } = await deleteAddress({ addressId: id });
    // console.log(data);
    if (data?.success) {
      console.log("Address deleted successfully");
      closeMessage("Address deleted successfully!", "success");
    }
    else {
      console.log("Failed to delete address");
      closeMessage("Failed to delete address", "error");
    }
  };

  useEffect(() => {
    if (user && (!address || address.length === 0)) {
      fetchAddress({ user_id: user?.id });
    }
  }, [user]);
  return (
    <>
      <Navbar navClass="defaultscroll is-sticky" />

      <section className="relative lg:pb-24 pb-16 md:mt-[84px] mt-[70px]">
        <div className="md:container container-fluid relative">
          <div className="relative overflow-hidden md:rounded-md shadow dark:shadow-gray-700 h-52 bg-[url('/images/hero/pages.jpg')] bg-center bg-no-repeat bg-cover"></div>
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="md:flex">
            <Usertab />

            <div className="lg:w-3/4 md:w-2/3 md:px-3 mt-6 md:mt-0">
              <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 mt-6">
                <h5 className="text-lg font-semibold mb-5 text-black-600">
                  Saved Address
                </h5>
                {address &&
                  address.length > 0 &&
                  address.map((addr) => {
                    const fullName = `${addr.first_name || ""} ${
                      addr.last_name || ""
                    }`.trim();
                    const fullAddress = `
    ${addr.address_line1 || ""} ${addr.address_line2 || ""}
    ${addr.city || ""}${addr.city ? "," : ""} ${addr.state || ""}, ${
                      addr.postal_code || ""
                    },
    ${addr.country || ""}
  `
                      .replace(/\s+/g, " ")
                      .trim();

                    return (
                      <div key={addr.id} className="mb-6">
                        <p className="text-slate-400 mb-2 font-semibold">
                          {fullName}
                        </p>
                        <p className="text-slate-400 mb-4 whitespace-pre-line">
                          {fullAddress}
                        </p>
                        <button
                          onClick={() => handleEdit(addr)}
                          className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-white-600 text-black rounded-md border border-black me-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteAddress(addr.id)}
                          className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-red-600 text-white rounded-md"
                        >
                          Delete
                        </button>
                      </div>
                    );
                  })}
              </div>
              <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                <h5 className="text-lg font-semibold mb-4">Add New Address</h5>
                <form
                  onSubmit={handleSubmit((data) =>
                    handleAddress({
                      data: data,
                      extra: { userId: user?.id, type: "billing" },
                    })
                  )}
                >
                  <AddressForm register={register} errors={errors} />
                  <button
                    type="submit"
                    id="submit"
                    // name="send"
                    className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-gray-800 text-white rounded-md mt-5"
                    // value="Save"
                  >
                    {" "}
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      {/* <Switcher/> */}
      <ScrollToTop />
      <EditAddress
        open={open}
        setOpen={setOpen}
        editAddressDetail={editAddressDetail}
        setEditAddressDetail={setEditAddressDetail}
      />
    </>
  );
}

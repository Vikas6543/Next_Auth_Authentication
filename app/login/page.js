"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = inputValues;

    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (response.error) {
      alert(response.error);
    }

    if (response.ok) {
      router.push("/");
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
              Login to your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleFormSubmit}
            >
              {/* email input */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@gmail.com"
                  value={inputValues.email}
                  onChange={(e) =>
                    setInputValues({ ...inputValues, email: e.target.value })
                  }
                />
              </div>

              {/* password input */}
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={inputValues.password}
                  onChange={(e) =>
                    setInputValues({ ...inputValues, password: e.target.value })
                  }
                />
              </div>

              {/* submit button */}
              <button
                type="submit"
                className="w-full text-white bg-orange-500 hover:bg-orange-600 outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;

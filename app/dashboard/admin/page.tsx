"use client"
import { useState, useEffect } from "react"



export default function AdminPage() {
    const [data, setData] = useState("");

    useEffect( ()=> {
        fetch('http://127.0.0.1:8000/')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
        });
    }, []);
        
    
    return (
        <main className="relative">

            <div className=" bg-cyan-950 rounded-2xl m-3 w-1/3 text-center">
                <h1 className=" text-2xl">Dodaj użytkownika</h1>

                <form className="max-w-sm mx-auto">
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-3">Submit</button>
                </form>
            </div>

            <div className=" bg-cyan-950 rounded-2xl m-3 w-1/3 text-center">

            </div>

        </main>
    )
}
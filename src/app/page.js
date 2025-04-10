"use client";


import { useState } from "react";
import { FaInstagram, FaLinkedin, FaGithub, } from "react-icons/fa";
import { GiOrbital } from "react-icons/gi";


export default function Page() {
  const [totalClasses, setTotalClasses] = useState("");
  const [attendedClasses, setAttendedClasses] = useState("");
  const [requiredPercentage, setRequiredPercentage] = useState(75);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const calculateBunks = async () => {
    if (!totalClasses || !attendedClasses || !requiredPercentage) {
      alert("Please fill all fields.");
      return;
    }
    if(Number(totalClasses) < Number(attendedClasses)){
      alert("Total classes should be less than attended classes");
      return;
    }

    if(Number(requiredPercentage) <= 0 || Number(requiredPercentage) >= 100){
      alert("Required percentage should be between 0 and 100");
      return;
    } 

    setLoading(true);
    try {
      const response = await fetch("https://how-many-bunk-i-can-have-backend.vercel.app/calculate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          total_classes: Number(totalClasses),
          attended_classes: Number(attendedClasses),
          desired_percentage: Number(requiredPercentage),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("API Response:", data); // Debugging log

      if (!data || typeof data !== "object") {
        throw new Error("Invalid API response format");
      }

      setResult(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert(`Failed to fetch data: ${error.message}`);
    }
    setLoading(false);
  };

  return (

    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-900 to-blue-900 text-white px-4 py-8">
      <head>
        <link rel="icon" href="/logog.png" />
      </head>
      <h1 className="text-4xl font-extrabold mb-2 text-center">🎓 HOW MANY BUNK I CAN HAVE?</h1>
      <p className="mb-6 text-gray-300 text-lg text-center">Enjoy the Life 😎</p>

      <div className="bg-gray-800 p-6 rounded-xl shadow-xl w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-300 font-semibold">Total Number of Lectures</label>
          <input
            type="number"
            value={totalClasses}
            onChange={(e) => setTotalClasses(e.target.value)}
            className="w-full p-3 mt-1 bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter total lectures"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 font-semibold">Attended Lectures</label>
          <input
            type="number"
            value={attendedClasses}
            onChange={(e) => setAttendedClasses(e.target.value)}
            className="w-full p-3 mt-1 bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter attended lectures"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 font-semibold">Required Attendance Percentage</label>
          <input
            type="number"
            value={requiredPercentage}
            onChange={(e) => setRequiredPercentage(e.target.value)}
            className="w-full p-3 mt-1 bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter required attendance percentage"
          />
        </div>

        <button
          onClick={calculateBunks}
          className="w-full bg-blue-500 p-3 rounded-lg text-lg font-bold hover:bg-blue-600 transition-all shadow-md"
          disabled={loading}
        >
          {loading ? "Calculating..." : "Check Bunk Availability 🎯"}
        </button>
      </div>

      {result && (
  <div className="mt-6 text-center bg-gray-900 p-4 rounded-lg shadow-lg w-full max-w-md">
    <p className="text-lg font-bold">
      🏆 YOUR CURRENT ATTENDANCE IS <span className="text-yellow-300">{result.current_attendance}%</span>
    </p>
    {result.max_bunks === 0 && result.additional_classes_needed === 0 ? (
      <p className="mt-2">
        ✅ 🎉 Congratulations! Your attendance is exactly at the required percentage. Keep maintaining it!
      </p>
    ) : result.additional_classes_needed === 0 ? (
      <p className="mt-2">
        🎉 Based on your current attendance, you can bunk{" "}
        <span className="text-red-400 font-bold">{result.max_bunks}</span> more lectures, but after that check Again.
      </p>
    ) : result.max_bunks === 0 ? (
      <p className="mt-2">
        ⚠️ You cannot bunk any more classes. You need to attend <span className="text-green-400 font-bold">{result.additional_classes_needed}</span> lectures to maintain the required percentage.
      </p>
    ) : (
      <p className="mt-2">
        📌 You can bunk <span className="text-red-400 font-bold">{result.max_bunks}</span> lectures, but you also need to attend <span className="text-green-400 font-bold">{result.additional_classes_needed}</span> more lectures to maintain the required percentage.
      </p>
    )}

    {/* Warning message below all cases */}
    <p className="mt-4 text-yellow-300 font-semibold">
      ⚠️ Check your attendance here regularly to avoid any issues!
    </p>
  </div>
)}


      <footer className="bg-gray-800 p-6 rounded-xl shadow-xl mt-8 text-sm text-gray-400 text-center">
        Made by <span className="font-bold text-white">Vivek Jetani</span>
        <div className="flex gap-4 justify-center mt-2">
          <a href="https://www.instagram.com/mr_vicky_jetani/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-pink-400 text-2xl hover:text-pink-500 transition-all" />
          </a>
          <a href="https://www.linkedin.com/in/jet-vivek-jetani/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-400 text-2xl hover:text-blue-500 transition-all" />
          </a>
          <a href="https://github.com/vivekjetani" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-300 text-2xl hover:text-white transition-all" />
          </a>
          <a href="https://jetani.vercel.app/" target="_blank" rel="noopener noreferrer">
            <GiOrbital className="text-gray-300 text-2xl hover:text-white transition-all" />
          </a>
        </div>
      </footer>
    </div>
  );
}

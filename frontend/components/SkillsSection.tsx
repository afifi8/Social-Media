import { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdOutlineDeleteOutline } from "react-icons/md";
import handleBeginDeleteSkill from "@/api/handleDeleteSkill";
import handleBeginAddSkill from "@/api/handleAddSkill";

const SkillsSection = ({ user, token, setUser }: any) => {
  const [newSkill, setNewSkill] = useState(""); // State to hold the new skill
  const [showModal, setShowModal] = useState(false); // State to handle modal visibility

  const handleAddSkill = async () => {
    if (!newSkill.trim()) {
      alert("Please enter a skill.");
      return;
    }

    await handleBeginAddSkill(newSkill, token, setUser);
    setNewSkill(""); // Clear input
    setShowModal(false); // Close modal
  };

  return (
    <div className="ml-8">
      {/* Skills Header */}
      <h1 className="text-xl text-white font-semibold">Your Skills:</h1>
      <div className="text-slate-300">
        {user?.Skills?.length ? (
          user.Skills.map((skill: string, index: number) => (
            <div
              key={index}
              className="flex items-center px-9 justify-between"
            >
              <li className="font-medium mb-1">{skill}</li>
              <MdOutlineDeleteOutline
                className="text-xl cursor-pointer hover:text-red-700 transition"
                onClick={() => handleBeginDeleteSkill(skill, token, setUser)}
              />
            </div>
          ))
        ) : (
          <p className="text-slate-400">No skills added yet.</p>
        )}
      </div>

      {/* Add Skill Button */}
      <button
        className="text-4xl absolute hover:text-blue-500 transition right-1 bottom-2 text-white 
          rounded-lg cursor-pointer"
        title="Add Skill"
        onClick={() => setShowModal(true)} // Show modal when clicked
      >
        <IoMdAddCircleOutline />
      </button>

      {/* Add Skill Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-4">Add a New Skill</h2>
            <input
              type="text"
              className="w-full p-2 outline-none border rounded mb-4"
              placeholder="Enter skill name"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
            />
            <div className="flex justify-end">
              <button
                className="px-6 py-1 text-sm bg-gray-200 rounded mr-2"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-6 py-1 text-sm bg-blue-500 text-white rounded"
                onClick={handleAddSkill}
              >
                Add Skill
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillsSection;

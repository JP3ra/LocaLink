import { useStatStyles } from "@chakra-ui/react";
import React from "react";

function OwnerUpdate() {
    const [ownernum, setownerNum] = useState("");
    const [newLocation, setNewLocation] = useState("");
    
  return (
    <div>
      <form action="">
        <div className="flex flex-col text-gray-400 py-2">
          <label htmlFor="ownernum">Owner ID:</label>
          <input
            className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            type="number"
            name=""
            id="ownernum"
            value={ownernum}
            onChange={(event) => setownerNum(event.target.value)}
          />
        </div>

        <div className="flex flex-col text-gray-400 py-2">
          <label htmlFor="address">Address:</label>
          <input
            className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            type="text"
            name=""
            id="address"
            value={newLocation}
            onChange={(event) => setNewLocation(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default OwnerUpdate;

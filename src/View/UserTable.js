import React, { useContext, useState } from 'react';
import { ButtonContext, UserContext } from '../App';

const UserTable = () => {
  const { userData } = useContext(UserContext);
  const { light } = useContext(ButtonContext);
  const [showMoreDetails, setShowMoreDetails] = useState([]);

  const handleClickMore = (itemId) => {
    setShowMoreDetails((prevDetails) =>
      prevDetails.includes(itemId)
        ? prevDetails.filter((id) => id !== itemId)
        : [...prevDetails, itemId]
    );
  };

  return (
    <div className="w-full">
      <table className={`table-auto p-4 ml-10 ${light ? 'bg-white text-black' : 'bg-black text-white'}`}>
        <thead>
          <tr>
            <th className={`border-solid border-2 ${light ? 'border-black' : 'border-white'}`}>Name</th>
            <th className={`border-solid border-2 ${light ? 'border-black' : 'border-white'}`}>Username</th>
            <th className={`border-solid border-2 ${light ? 'border-black' : 'border-white'}`}>Email</th>
            <th className={`border-solid border-2 ${light ? 'border-black' : 'border-white'}`}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData &&
            userData.map((item) => (
              <React.Fragment key={item.id}>
                <tr>
                  <td className={`text-md p-4 border-solid border-2 ${light ? 'border-black' : 'border-white'}`}>
                    {item.name}
                  </td>
                  <td className={`text-md p-4 border-solid border-2 ${light ? 'border-black' : 'border-white'}`}>
                    {item.username}
                  </td>
                  <td className={`text-md p-4 border-solid border-2 ${light ? 'border-black' : 'border-white'}`}>
                    {item.email}
                  </td>
                  <td className={`text-md p-4 border-solid border-2 ${light ? 'border-black' : 'border-white'}`}>
                    <button onClick={() => handleClickMore(item.id)}>
                      {showMoreDetails.includes(item.id) ? 'Show Less' : 'Show More'}
                    </button>
                  </td>
                </tr>
                {showMoreDetails.includes(item.id) && (
                  <tr>
                    <td colSpan="4" className={`text-md p-4 border-solid border-2 ${light ? 'border-black' : 'border-white'}`}>
                      <div>Phone: {item.phone}</div>
                      <div>Website: {item.website}</div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;

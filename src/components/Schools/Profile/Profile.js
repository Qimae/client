import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Profile = ({userId}) => {
  const [schoolUser, setSchoolUser] = useState([]);
 /*  const { id } = useParams(); */
  useEffect(() => {
    /* axios
      .get("http://localhost:3002/getschooluser/" + id)
      .then((res) => setSchoolUser(res.data.Result[0]))
      .catch((err) => console.log(err)); */
      const fetchProfile = async () => {
        try {
          const response = await axios.get(`http://localhost:3002/getschooluser/${userId}`);
          setSchoolUser(response.data.user);
        } catch (error) {
          console.error('Error fetching profile:', error);
        }
      };
  
      fetchProfile();
  }, [userId]);
  return (
    <div>
      Profile
      <div className="text-center">
      {schoolUser && (
        <div>
          <p>Username: {schoolUser.fullname}</p>
          <p>Email: {schoolUser.email}</p>
          <p>Department: {schoolUser.department}</p>
        </div>
      )}
      </div>
    </div>
  );
};

export default Profile;

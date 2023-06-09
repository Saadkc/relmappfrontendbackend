import axios from "axios";
const BASE_URL = "http://192.168.0.130:3000";

export const postLogin = async (username, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, { username, password });
    console.log(response.data.token);
    const token = response.data.token;
    localStorage.setItem("token", token);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// export const userprofile = async (userId, token, profileData) => {

// //   const formData = new FormData();
// //       formData.append("name", profileData.name);
// //       formData.append("email", profileData.email);
// //       formData.append("gender", profileData.gender);
// //       formData.append("current_city", profileData.birthday);
// //       formData.append("birthday", profileData.current_city);
// //       formData.append("known_languages", profileData.known_languages);
// //       console.log(userId);
// //   try {
// //     const response = await axios.put(`${BASE_URL}/userprofile/${userId}`, formData, {

//       // headers: {
//       //   Authorization: `Bearer ${token}`,
//       //   "Content-Type": "multipart/form-data"
//       // }
// //     });
// //     console.log(response.data);
// //     return response.data;
// //   } catch (error) {
// //     console.error(error);
// //     return null;
// //   }
// // };
// const formData = new FormData();
//   formData.append('name', 'n'); // Append your form data fields and their values here
//   formData.append('email', 'e');

//   // const fileInput = document.getElementById('fileInput');
//   // for (let i = 0; i < fileInput.files.length; i++) {
//   //   formData.append('images[]', fileInput.files[i]);
//   // }

//   try {
//     const response = await fetch(`${BASE_URL}/userprofile/${userId}`, {
//       method: 'PUT',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "multipart/form-data"
//       },
//       body: formData
//     });

//     if (response.ok) {
//       // Handle successful form submission
//     } else {
//       // Handle form submission failure
//     }
//   } catch (error) {
//     // Handle any network or server errors
//   }
// }


export const userprofile = async (userId, token, profileData) => {
  const formData = new FormData();
  formData.append('name', profileData.name);
  formData.append('email', profileData.email);

  try {
    const response = await fetch(`${BASE_URL}/userprofile/${userId}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData
    });

    if (response.ok) {
      // Handle successful form submission
      const responseData = await response.json();
      console.log(responseData);
      return responseData;
    } else {
      // Handle form submission failure
      console.error('Form submission failed.');
    }
  } catch (error) {
    // Handle any network or server errors
    console.error(error);
    return null;
  }
};
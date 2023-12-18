import db from "./firebase"; // Import your Firebase configuration
import { collection, getDocs, query, where, updateDoc } from "firebase/firestore";

export const checkCredentials = async (usernameOrEmail, password) => {
    const userRef = collection(db, "user");
    const courseRef = collection(db, "course");

    const userQuery = query(userRef, where("username", "==", usernameOrEmail));
    const emailQuery = query(userRef, where("email", "==", usernameOrEmail));

    const userSnapshot = await getDocs(userQuery);
    const emailSnapshot = await getDocs(emailQuery);
    const userData = userSnapshot.docs.map((c) => c.data());
    const emailData = emailSnapshot.docs.map((c) => c.data());

    const mergedData = [...new Set([...userData, ...emailData])];
    if (mergedData.length == 0) {
        return "domain not found";
    }

    const user = mergedData[0];

    if (user.password === password) {
        return user; // Return user data for successful login
    } else {
        return "wrong password";
    }
};

export const getCourse = async () => {
    const courseRef = collection(db, "course");

    try {
        const courseSnapshot = await getDocs(courseRef);
        const courseData = courseSnapshot.docs.map((doc) => doc.data());
        return courseData;
    } catch (error) {
        console.error("Error fetching quiz data:", error);
        throw error; // You can handle the error appropriately in your application
    }
};

export const updateCourse = async (courseID, updateData) => {
    const courseRef = collection(db, "course");
    const querySnapshot = await getDocs(query(courseRef, where("id", "==", courseID)));
    if (querySnapshot.empty) {
        console.log("No matching document found");
        return;
    }

    const courseDoc = querySnapshot.docs.find((doc) => doc.exists);
    await updateDoc(courseDoc.ref, updateData);
};

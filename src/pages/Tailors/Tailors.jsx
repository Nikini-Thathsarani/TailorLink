import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

function Tailors() {
  const [tailors, setTailors] = useState([]);

  useEffect(() => {
    const getTailors = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "tailors"));

        const tailorData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setTailors(tailorData);
      } catch (error) {
        console.error("Error getting tailors:", error);
      }
    };

    getTailors();
  }, []);

  return (
    <div>
      <h1>Tailors</h1>

      {tailors.map((tailor) => (
        <div key={tailor.id}>
          <h2>{tailor.name}</h2>
          <p>{tailor.email}</p>
          <p>{tailor.phone}</p>
          <p>{tailor.location}</p>
          <p>Experience: {tailor.experience} years</p>
          <p>Rating: {tailor.rating}</p>
        </div>
      ))}
    </div>
  );
}

export default Tailors;
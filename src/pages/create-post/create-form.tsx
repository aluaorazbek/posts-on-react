import { useForm } from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
//document is a new entry in collection, collection is kinda table (for instance posts table, magazines, etc)
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../config/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from "react-router-dom";

//nencessary for typescript
interface CreateFormData {
  title: string;
  description: string;
}

export const CreateForm = () => {

  const [user] = useAuthState(auth);
  const navigate = useNavigate(); 

  const schema = yup.object().shape({
    title: yup.string().required("You must add a title"),
    description: yup.string().required("You must add text"),
  });

  const { 
    register, 
    handleSubmit, 
    formState: {errors} 
  } = useForm<CreateFormData>({
    resolver: yupResolver(schema)
  });

  //posts is the name of our collection
  const postRef = collection(db, "posts"); 

  const onCreatePost = async (data: CreateFormData) => {
    console.log(data);
    await addDoc (postRef, {
      // title: data.title,
      // describtion: data.description,
      ...data,
      username: user?.displayName,
      userId: user?.uid,
    });
    
    //it will automatically redirect to homepage after submitting a post
    navigate("/");
  };
  return (
    <form onSubmit={handleSubmit(onCreatePost)}>
      <input placeholder="Title..." {...register("title")}/>
      <p style={{color: "red"}}>{errors.title?.message}</p>
      <textarea placeholder="Description..." {...register("description")}/>
      <p style={{color: "red"}}>{errors.description?.message}</p>
      <input type="submit"/>
    </form>
  );
};
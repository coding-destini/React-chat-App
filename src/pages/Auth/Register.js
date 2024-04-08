import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";
import { auth, storage, db } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Register = () => {

  const initialValues = {t add
    displayName: "",
    email: "",
    password: "",
    file: null
  };

  // ------validations 
  const validationSchema = Yup.object().shape({
    displayName: Yup.string()
      .required("Display name is required")
      .matches(/^\S*$/, "Display name should not contain spaces"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().required("Password is required"),
    file: Yup.mixed().required("Avatar is required")
  });

  const [error, seterror] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, values.email, values.password);
      const storageRef = ref(storage, values.displayName);
      const uploadTask = uploadBytesResumable(storageRef, values.file);

      uploadTask.on(
        (error) => {
          console.error("Upload error:", error);
          setSubmitting(false);
          setErrors({ submit: "Failed to upload avatar" });
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName: values.displayName,
              photoURL: downloadURL
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName: values.displayName,
              email: values.email,
              photoURL: downloadURL
            });
            await setDoc(doc(db, "userChat", res.user.uid), {});
            navigate('/');
          });
        }
      );
    } catch (err) {
      console.error("Firebase error:", err);
      setSubmitting(false);
      setErrors({ submit: "Firebase error occurred" });
    }
  };

  return (
    <div>
       <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <section className="w-full max-w-md">
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            BizChat
          </a>
          <h1 className="text-xl font-bold leading-tight text-gray-900 mb-6">
            Create your account
          </h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label
                    htmlFor="displayName"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your name
                  </label>
                  <Field
                    type="text"
                    id="displayName"
                    name="displayName"
                    placeholder="Display name"
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5"
                  />
                  <ErrorMessage name="displayName" component="div" className="text-red-500" />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="name@company.com"
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500" />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5"
                  />
                  <ErrorMessage name="password" component="div" className="text-red-500" />
                </div>

               {/* ------------ Upload avatar ------------ */}
               <div>
  <label htmlFor="file">
    <div className="cssbuttons-io-button w-fit">
      <svg
        viewBox="0 0 640 512"
        fill="white"
        height="1em"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 mr-2"
      >
        <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"></path>
      </svg>
      <span>Upload Avatar</span>
      <input
        type="file"
        id="file"
        name="file"
        className="hidden"
        style={{ display: 'none' }}
      />
    </div>
  </label>
</div>



                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-primary-300"
                      required=""
                    />
                    <label
                      htmlFor="remember"
                      className="ml-2 text-sm text-gray-500"
                    >
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full shadow bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white "
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Signing up...' : 'Sign up'}
                </button>
                <ErrorMessage name="submit" component="div" className="text-red-500" />

                <p className="text-sm font-light text-gray-500">
                  Already have an account yet?
                  <Link to="/signin">
                    <a
                      href="#"
                      className="font-medium text-primary-600 hover:underline"
                    >
                      {" "}
                      Sign in
                    </a>
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Register;

import React, { useState } from "react";
import LabeledInput from "../elements/LabeledInput";
import Button from "../elements/Button";
import GoogleIcon from "../elements/GoogleIcon";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

/* =======================
   VALIDATION SCHEMA
======================= */
const SignUpSchema = Yup.object().shape({
  name: Yup.string().required("Nama wajib diisi"),
  email: Yup.string()
    .email("Email tidak valid")
    .required("Email wajib diisi"),
  password: Yup.string()
    .min(6, "Password minimal 6 karakter")
    .required("Password wajib diisi"),
});

function FormSignUp() {
  const [apiError, setApiError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  return (
    <div className="w-full max-w-md mx-auto">
      <p className="text-center text-xl font-semibold mb-8">
        Create an account
      </p>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={SignUpSchema}
        onSubmit={async (values, { setSubmitting }) => {
          setApiError("");

          try {
            const response = await fetch(
              "https://jwt-auth-eight-neon.vercel.app/register",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  name: values.name,
                  email: values.email,
                  password: values.password,
                }),
              }
            );

            const data = await response.json();

            if (!response.ok) {
              // contoh error: email sudah digunakan
              setApiError(data.message || "Email Sudah Pernah Digunakan Sebelumnya");
              return;
            }

            // kalau sukses (opsional)
            setSuccessMessage("Register Berhasil");
          } catch (error) {
            setApiError("Terjadi kesalahan pada server");
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            {/* NAME */}
            <div>
              <Field name="name">
                {({ field }) => (
                  <LabeledInput
                    {...field}
                    label="Name"
                    placeholder="John Doe"
                    type="text"
                  />
                )}
              </Field>
              <ErrorMessage
                name="name"
                component="p"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            {/* EMAIL */}
            <div>
              <Field name="email">
                {({ field }) => (
                  <LabeledInput
                    {...field}
                    label="Email Address"
                    placeholder="hello@example.com"
                    type="email"
                  />
                )}
              </Field>
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <Field name="password">
                {({ field }) => (
                  <LabeledInput
                    {...field}
                    label="Password"
                    placeholder="••••••••"
                    type="password"
                    passwordEye
                  />
                )}
              </Field>
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            {/* BUTTON */}
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Loading..." : "Register"}
            </Button>
          </Form>
        )}
      </Formik>

      {/* Divider */}
      <div className="flex items-center my-6">
        <div className="grow h-px bg-gray-300"></div>
        <span className="px-3 text-gray-500 text-sm">
          or sign up with
        </span>
        <div className="grow h-px bg-gray-300"></div>
      </div>

      {/* Google */}
      <button
        type="button"
        className="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition"
      >
        <GoogleIcon />
        <span className="text-gray-700 font-medium">
          Continue with Google
        </span>
      </button>

      {/* Link */}
      <p className="text-center text-sm text-gray-600 mt-6">
        Already have an account?{" "}
        <Link to="/login" className="text-teal-600 font-semibold">
          Sign in here
        </Link>
      </p>

      {/* ERROR TOAST */}
      {apiError && (
        <div className="fixed bottom-6 left-6 bg-red-600 text-white px-5 py-3 rounded-lg shadow-lg flex items-center gap-3">
          <span className="font-semibold">!</span>
          <span>{apiError}</span>
          <button
            className="ml-2 font-bold"
            onClick={() => setApiError("")}
          >
            ×
          </button>
        </div>

        
      )}

      {/* SUCCESS TOAST */}
        {successMessage && (
        <div className="fixed bottom-6 left-6 bg-green-600 text-white px-5 py-3 rounded-lg shadow-lg flex items-center gap-3">
            <span className="font-semibold">✓</span>
            <span>{successMessage}</span>
            <button
            className="ml-2 font-bold"
            onClick={() => setSuccessMessage("")}
            >
            ×
            </button>
        </div>
        )}

    </div>
  );
}

export default FormSignUp;
